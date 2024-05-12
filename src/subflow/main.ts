import introduce from "./introduce";
import modal from "./modal";

const Introduce = introduce({
	stageClassName: "absolute top-0 w-full h-full z-30",
	descriptionStageClassName:
		"w-5/6 h-2/6 md:w-3/6 md:h-1/6 flex justify-center items-center p-5 border-2 border-neutral rounded-lg bg-base-100 absolute top-0 left-0 bottom-0 right-0 m-auto z-40 font-normal italic leading-8 text-start pointer-events-none",
	highlightClassName: "relative border-2 drop-shadow-md rounded-lg border-info",
	curtainClassName:
		"absolute rounded-lg top-0 w-full h-full bg-base-300 opacity-80",
	tooltipClassName:
		"text-sm md:text-base font-normal w-fit h-fit absolute top-0 left-0 bottom-0 right-0 m-auto p-2 bg-base-300 text-center",
});

export const subflowModal = modal({
	stageClassName: "absolute top-0 w-full h-full z-30",
	buttonDivClassName: "absolute top-0.5 right-1",
	buttonAsset: `
	<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
	</svg>
	`,
	modalStageClassName:
		"w-5/6 h-2/6 md:w-3/6 md:h-1/6 flex p-5 border-2 border-neutral rounded-lg bg-base-100 absolute top-0 left-0 bottom-0 right-0 m-auto z-40 font-normal italic leading-8 text-start",
	curtainClassName:
		"absolute rounded-lg top-0 w-full h-full bg-base-300 opacity-80",
});

export const heatmapIntro = async () => {
	const introduce = new Introduce();
	await introduce.byClassNamesAndDescriptions(
		["periodElem", "companySearchElem", "fsElem", "indexElem"],
		[
			[
				"기간을 설정합니다.",
				"분기 단위로 자유롭게 설정할 수 있습니다.",
				'예를 들어 "2021년 4분기 ~ 2022년 1분기"와 같은 기간으로 데이터를 볼 수 있습니다.',
			],
			["기업을 검색합니다.", "검색된 기업을 추가합니다."],
			[
				"비교한 결과를 보여줍니다.",
				"지표의 높고 낮음을<br/>색으로 보여줍니다.",
				'"히트맵"이라고도 불립니다.',
				"마음껏 비교하며<br/>다양한 히트맵을 만드세요!",
			],
			["지표를 선택합니다.", "원하는 지표만 넣을 수 있습니다!"],
		]
	);
	await introduce.byPlainText([
		"매출, 영업이익, 순이익, EPS, PER은<br/> 선택한 기간의 총합을 기준으로 계산합니다.",
		"자본, BPS, PBR은<br/> 선택한 기간의 분기 평균을 기준으로 계산합니다.",
		"ROE는<br/>(선택 기간 총합 순이익) / (선택 기간 분기 자본 평균)으로 계산합니다.",
	]);
	introduce.finish();
};

export const overallIntro = async () => {
	const introduce = new Introduce();
	await introduce.byPlainText([
		'강단있는 투자를 위한 서비스 "한 눈 재무제표"입니다.',
		"기업의 언어인 재무제표를 쉽게 확인하세요.",
		"흔들리지 않는 강단있는 투자를 할 수 있을 겁니다.",
		"현재 대시보드와 히트맵 기능을 제공하고 있습니다.",
		'자세한 사용법은 "?" 버튼을 누르면 확인할 수 있습니다.',
		"참고로 현재는 2016년 1분기부터의 금융기업을 제외한 상장기업 데이터를 제공하고 있습니다.",
		"앞으로 더 많은 데이터와 기능이 추가될 예정이므로 기대해주세요!",
	]);
	introduce.finish();
};

export const dashboardIntro = async () => {
	const introduce = new Introduce();
	await introduce.byClassNamesAndDescriptions(
		[
			"periodElem",
			"companySearchElem",
			"companySelectedElem",
			"indexKeyPadElem",
			"chartElem",
		],
		[
			["기간을 설정하는 부분입니다."],
			["추가할 기업을 검색할 수 있는 부분입니다."],
			[
				"선택된 기업이 표시되는 부분입니다.",
				"색상을 클릭하여 변경할 수 있습니다.",
				"기업 이름을 클릭하여 삭제할 수 있습니다.",
			],
			["지표를 선택하는 부분입니다."],
			["선택된 기간, 기업, 지표를 바탕으로 데이터가 표시됩니다."],
		]
	);
	introduce.finish();
};
