import { FinanceSourceDetailContainer } from "..";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof FinanceSourceDetailContainer> = {
	title: "Common/FinanceSourceDetailContainer",
	component: FinanceSourceDetailContainer,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default meta;
type Story = StoryObj<typeof FinanceSourceDetailContainer>;
export const Basic: Story = {
	// More on args: https://storybook.js.org/docs/react/writing-stories/args
	args: {
		finances: [
			[
				{
					cashEquivalents: 577302493888,
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					currency: "KRW",
					debt: 741496354658,
					equity: 837910911421,
					netProfit: 54216344885,
					operatingProfit: 62992151049,
					quarter: { year: 2021, quarter: 1 },
					reportCode: "20210514001474",
					reportType: "seperate K-IFRS",
					sales: 417488989253,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2021,
						quarter: 2,
					},
					reportCode: "20210812000333",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 874205698926,
					debt: 665163491888,
					sales: 493861372604,
					operatingProfit: 53905888404,
					netProfit: 36309858225,
					cashEquivalents: 529442311820,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					reportCode: null,
					reportType: null,
					currency: null,
					sales: null,
					equity: null,
					debt: null,
					operatingProfit: null,
					netProfit: null,
					cashEquivalents: null,
					quarter: {
						year: 2021,
						quarter: 3,
					},
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					reportCode: null,
					reportType: null,
					currency: null,
					sales: null,
					equity: null,
					debt: null,
					operatingProfit: null,
					netProfit: null,
					cashEquivalents: null,
					quarter: {
						year: 2021,
						quarter: 4,
					},
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2022,
						quarter: 1,
					},
					reportCode: "20220519000133",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 945430932813,
					debt: 628330759043,
					sales: 333264733985,
					operatingProfit: 3919721158,
					netProfit: 5672691546,
					cashEquivalents: 504978232468,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2022,
						quarter: 2,
					},
					reportCode: "20220816000844",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 963233561995,
					debt: 652610899616,
					sales: 465981429200,
					operatingProfit: 27552754752,
					netProfit: 17917705977,
					cashEquivalents: 417546683053,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2022,
						quarter: 3,
					},
					reportCode: "20221114000453",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 977399999988,
					debt: 655026292981,
					sales: 467086055937,
					operatingProfit: 19494610622,
					netProfit: 14210691675,
					cashEquivalents: 512812671406,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2022,
						quarter: 4,
					},
					reportCode: "20230315000019",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 998695819431,
					debt: 748120988544,
					sales: 696087115676,
					operatingProfit: 30105745260,
					netProfit: 17620091968,
					cashEquivalents: 624065545945,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2023,
						quarter: 1,
					},
					reportCode: "20230515000235",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 1003004360959,
					debt: 816039746505,
					sales: 515273571784,
					operatingProfit: 10402973562,
					netProfit: 11249343783,
					cashEquivalents: 504222426570,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2023,
						quarter: 2,
					},
					reportCode: "20230811002638",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 1019767515852,
					debt: 860816346222,
					sales: 600237783975,
					operatingProfit: 21174807535,
					netProfit: 16438364305,
					cashEquivalents: 574346312342,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2023,
						quarter: 3,
					},
					reportCode: "20231114001112",
					reportType: "seperate K-IFRS",
					currency: "KRW",
					equity: 1027283690951,
					debt: 872120114975,
					sales: 592392165256,
					operatingProfit: 17478817711,
					netProfit: 7522970514,
					cashEquivalents: 534114022558,
				},
				{
					company: {
						companyCode: "00128971",
						name: "DL건설",
						stockCode: "001880",
					},
					quarter: {
						year: 2023,
						quarter: 4,
					},
					reportCode: "20240319000567",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 1028728338775,
					debt: 954908164582,
					sales: 722129521378,
					operatingProfit: 12440925501,
					netProfit: 6737979574,
					cashEquivalents: 637139657116,
				},
			],
			[
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2021,
						quarter: 1,
					},
					reportCode: "20210514001603",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 8218007000000,
					debt: 12582074000000,
					sales: 4254116000000,
					operatingProfit: 341219000000,
					netProfit: null,
					cashEquivalents: 2400981000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2021,
						quarter: 2,
					},
					reportCode: "20210817001368",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 9078471000000,
					debt: 13098995000000,
					sales: 5131016000000,
					operatingProfit: 724280000000,
					netProfit: null,
					cashEquivalents: 2044072000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2021,
						quarter: 3,
					},
					reportCode: "20211115002487",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 9222178000000,
					debt: 14390128000000,
					sales: 4027414000000,
					operatingProfit: -372762000000,
					netProfit: -205836000000,
					cashEquivalents: 1531311000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2021,
						quarter: 4,
					},
					reportCode: "20220315001026",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 8742373000000,
					debt: 15021764000000,
					sales: 4439360000000,
					operatingProfit: 75733000000,
					netProfit: 71811000000,
					cashEquivalents: 1282880000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2022,
						quarter: 1,
					},
					reportCode: "20220516001898",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 19439570000000,
					debt: 15536318000000,
					sales: 4342348000000,
					operatingProfit: 258854000000,
					netProfit: 226622000000,
					cashEquivalents: 5161254000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2022,
						quarter: 2,
					},
					reportCode: "20220816002372",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 19902406000000,
					debt: 16532015000000,
					sales: 5070561000000,
					operatingProfit: 195607000000,
					netProfit: 89926000000,
					cashEquivalents: 1983481000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2022,
						quarter: 3,
					},
					reportCode: "20221114001585",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 21163371000000,
					debt: 18724891000000,
					sales: 7648157000000,
					operatingProfit: 521853000000,
					netProfit: 187710000000,
					cashEquivalents: 2189474000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2022,
						quarter: 4,
					},
					reportCode: "20230315001342",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 20593762000000,
					debt: 17705683000000,
					sales: 8537543000000,
					operatingProfit: 237405000000,
					netProfit: 275568000000,
					cashEquivalents: 5937967000000,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2023,
						quarter: 1,
					},
					reportCode: "20230515002279",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 22047674000000,
					debt: 18665780000000,
					sales: 8747117000000,
					operatingProfit: 633166000000,
					netProfit: 561986000000,
					cashEquivalents: null,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2023,
						quarter: 2,
					},
					reportCode: "20230814002063",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 23128717000000,
					debt: 19265936000000,
					sales: 8773487000000,
					operatingProfit: 460599000000,
					netProfit: 465141000000,
					cashEquivalents: null,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2023,
						quarter: 3,
					},
					reportCode: "20231114001430",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 24667966000000,
					debt: 20500543000000,
					sales: 8223542000000,
					operatingProfit: 731249000000,
					netProfit: 420531000000,
					cashEquivalents: null,
				},
				{
					company: {
						companyCode: "01515323",
						name: "LG에너지솔루션",
						stockCode: "373220",
					},
					quarter: {
						year: 2023,
						quarter: 4,
					},
					reportCode: "20240314001110",
					reportType: "consolidated K-IFRS",
					currency: "KRW",
					equity: 24373509000000,
					debt: 21063635000000,
					sales: 8001324000000,
					operatingProfit: 338220000000,
					netProfit: 190327000000,
					cashEquivalents: 5068783000000,
				},
			],
		],
	},
};
