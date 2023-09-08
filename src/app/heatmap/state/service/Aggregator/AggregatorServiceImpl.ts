import { companyRoot, index, indexRow } from "@/app/heatmap/datatype";
import indexCalculator from "./financeMarketIndex/indexCalculatePolicy";
import indexUnit from "./financeMarketIndex/indexUnit";
import AggregatorService from "./AggregatorService";
import { ScalarColorMapper } from "./module/ScalarColorMapper";

class AggregatorServiceImpl implements AggregatorService {
	#colorMapper: ScalarColorMapper;

	constructor(colorMapper: ScalarColorMapper) {
		this.#colorMapper = colorMapper;
	}

	getFSData(indexs: index[], companies: companyRoot[]) {
		const res = {
			companies: companies.map((company) => company.tag),
			rows: [] as indexRow[],
		};
		const rows = [];
		for (let i = 0; i < indexs.length; i += 1) {
			const index = indexs[i];
			const calculator = indexCalculator.get(index)!;
			const data: (number | null)[] = companies.map((company) =>
				calculator(company.rootData)
			);
			rows.push(
				data.includes(null)
					? this.generateRowWithDefaultColor(index, data)
					: this.generateRowWithHeatmapColor(index, data as number[])
			);
		}
		res.rows = rows;
		return res;
	}

	private generateRowWithHeatmapColor(index: index, data: number[]) {
		this.#colorMapper.setDomain(Math.min(...data), Math.max(...data));
		const unitMapper = indexUnit.get(index);
		const row: indexRow = {
			title: index,
			data: data.map((elem) => {
				return {
					color: this.#colorMapper.getColor(elem),
					data: unitMapper ? unitMapper(elem) : `${elem}`,
				};
			}),
		};
		return row;
	}

	private generateRowWithDefaultColor(index: index, data: (number | null)[]) {
		const dataFiltered: number[] = data.filter(
			(elem) => elem != null
		) as number[];
		this.#colorMapper.setDomain(
			Math.min(...dataFiltered),
			Math.max(...dataFiltered)
		);
		const unitMapper = indexUnit.get(index);
		const row: indexRow = {
			title: index,
			data: data.map((_elem) => {
				let elem;
				if (_elem === null) {
					elem = "데이터 없음";
				} else {
					elem = unitMapper ? unitMapper(_elem) : `${_elem}`;
				}
				return {
					color:
						_elem === null
							? "rgb(255, 255, 255)"
							: this.#colorMapper.getColor(_elem),
					data: elem,
				};
			}),
		};
		return row;
	}
}

export default AggregatorServiceImpl;
