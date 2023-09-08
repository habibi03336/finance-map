import { index, rootData } from "@/app/heatmap/datatype";

const indexCalculator: Map<index, Function> = new Map([
	["주가", (rootData: rootData) => rootData["stockPrice"]],
	["상장주식수", (rootData: rootData) => rootData["stockAmount"]],
	["순이익", (rootData: rootData) => rootData["netProfit"]],
	["자본", (rootData: rootData) => rootData["averageEquity"]],
	["매출", (rootData: rootData) => rootData["sales"]],
	["시가총액", (rootData: rootData) => rootData["marketCap"]],
	["영업이익", (rootData: rootData) => rootData["operatingProfit"]],
	[
		"영업이익률",
		(rootData: rootData) => {
			if (rootData["operatingProfit"] === null || rootData["sales"] === null) {
				return null;
			}
			return rootData["operatingProfit"] / rootData["sales"];
		},
	],
	[
		"PER",
		(rootData: rootData) => {
			if (
				rootData["stockPrice"] === null ||
				rootData["netProfit"] === null ||
				rootData["stockAmount"] === null
			) {
				return null;
			}
			return (
				rootData["stockPrice"] /
				(rootData["netProfit"] / rootData["stockAmount"])
			);
		},
	],
	[
		"ROE",
		(rootData: rootData) => {
			if (
				rootData["netProfit"] === null ||
				rootData["averageEquity"] === null
			) {
				return null;
			}
			return rootData["netProfit"] / rootData["averageEquity"];
		},
	],
	[
		"PBR",
		(rootData: rootData) => {
			if (
				rootData["marketCap"] === null ||
				rootData["averageEquity"] === null
			) {
				return null;
			}
			return rootData["marketCap"] / rootData["averageEquity"];
		},
	],
	[
		"EPS",
		(rootData: rootData) => {
			if (rootData["netProfit"] === null || rootData["stockAmount"] === null) {
				return null;
			}
			return rootData["netProfit"] / rootData["stockAmount"];
		},
	],
	[
		"BPS",
		(rootData: rootData) => {
			if (
				rootData["averageEquity"] === null ||
				rootData["stockAmount"] === null
			) {
				return null;
			}
			return rootData["averageEquity"] / rootData["stockAmount"];
		},
	],
]);

export default indexCalculator;
