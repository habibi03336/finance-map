import { period } from "../../datatype";
import Quarter from "@/app/common/util/Quarter";
import { DesignSelectComponent, DesignComponent } from "../componentType";

export default function ({
	Select,
	Option,
	Item,
}: {
	Select: DesignSelectComponent;
	Option: DesignComponent;
	Item: DesignComponent;
}) {
	return function ({
		onUpdatePeriod,
		availablePeriod,
		period,
	}: {
		onUpdatePeriod: (period: period) => void;
		availablePeriod: period;
		period: period;
	}) {
		const quarters = [1, 2, 3, 4];
		const startYear = availablePeriod.start.year;
		const endYear = availablePeriod.end.year;
		const allStartYears: number[] = [];
		for (let i = startYear; i < endYear + 1; i += 1) {
			allStartYears.push(i);
		}
		const allEndYears = [];
		for (let i = period.start.year; i < endYear + 1; i += 1) {
			allEndYears.push(i);
		}

		return (
			<>
				<Item>
					<Select
						value={period.start.year}
						onChange={(e) => {
							onUpdatePeriod({
								...period,
								start: {
									...period.start,
									year: Number(e.target.value),
								},
							});
						}}
					>
						{allStartYears.map((year) => (
							<Option key={year} value={year}>
								{year}
							</Option>
						))}
					</Select>
					연도
					<Select
						value={period.start.quarter}
						onChange={(e) => {
							onUpdatePeriod({
								...period,
								start: {
									...period.start,
									quarter: Number(e.target.value) as 1 | 2 | 3 | 4,
								},
							});
						}}
					>
						{quarters.map((quarter) => (
							<Option key={quarter} value={quarter}>
								{quarter}
							</Option>
						))}
					</Select>
					분기부터
				</Item>
				<Item>
					<Select
						value={period.end.year}
						onChange={(e) => {
							onUpdatePeriod({
								...period,
								end: {
									...period.end,
									year: Number(e.target.value),
								},
							});
						}}
					>
						{allEndYears.map((year) => (
							<Option key={year} value={year}>
								{year}
							</Option>
						))}
					</Select>
					연도
					<Select
						value={period.end.quarter}
						onChange={(e) => {
							onUpdatePeriod({
								...period,
								end: {
									...period.end,
									quarter: Number(e.target.value) as 1 | 2 | 3 | 4,
								},
							});
						}}
					>
						{period.start.year === period.end.year &&
							quarters.map((quarter) => {
								if (quarter >= period.start.quarter) {
									return (
										<Option key={quarter} value={quarter}>
											{quarter}
										</Option>
									);
								}
							})}
						{period.start.year < period.end.year &&
							quarters.map((quarter) => (
								<Option key={quarter} value={quarter}>
									{quarter}
								</Option>
							))}
					</Select>
					분기까지
				</Item>
			</>
		);
	};
}
