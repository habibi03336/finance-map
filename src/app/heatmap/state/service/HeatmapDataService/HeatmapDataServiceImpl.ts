import { index, indexRow, market, rootData } from "@/app/heatmap/datatype";
import indexCalculator from "./financeMarketIndex/indexCalculatePolicy";
import indexUnit from "./financeMarketIndex/indexUnit";
import HeatmapDataService from "./HeatmapDataService";
import { ScalarColorMapper } from "./module/ScalarColorMapper";
import { finance } from "@/app/common/datatype";

class HeatmapDataServiceImpl implements HeatmapDataService {
	#colorMapper: ScalarColorMapper;

	constructor(colorMapper: ScalarColorMapper) {
		this.#colorMapper = colorMapper;
	}

	generate(indexs: index[], finances: finance[][], market: market[]) {
		const result = {
			companies: finances.map((finance) => finance[0].company),
			rows: [] as indexRow[],
		};
		const roots: rootData[] = [];
		for (let i = 0; i < finances.length; i += 1) {
			roots.push(this.generateCompanyRoot(finances[i], market[i]));
		}
		const rows = [];
		for (let i = 0; i < indexs.length; i += 1) {
			const index = indexs[i];
			const calculator = indexCalculator.get(index)!;
			const data: (number | null)[] = roots.map((root) => calculator(root));
			rows.push(
				data.includes(null)
					? this.generateRowWithDefaultColor(index, data)
					: this.generateRowWithHeatmapColor(index, data as number[])
			);
		}
		result.rows = rows;
		return result;
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

	private generateCompanyRoot(finances: finance[], market: market): rootData {
		const equities = finances.map((f) => f.equity);
		const netProfits = finances.map((f) => f.netProfit);
		const sales = finances.map((f) => f.sales);
		const operatingProfits = finances.map((f) => f.operatingProfit);
		const sum = (pre: any, cur: any) => pre + cur;
		return {
			companyCode: finances[0].company.companyCode,
			averageEquity: equities.some((elem) => elem === null)
				? null
				: equities.reduce(sum, 0) / equities.length,
			netProfit: netProfits.some((elem) => elem === null)
				? null
				: netProfits.reduce(sum, 0),
			sales: sales.some((elem) => elem === null) ? null : sales.reduce(sum, 0),
			operatingProfit: operatingProfits.some((elem) => elem === null)
				? null
				: operatingProfits.reduce(sum, 0),
			...market,
		};
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

export default HeatmapDataServiceImpl;
