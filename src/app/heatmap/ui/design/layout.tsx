export default function ({
	indexElem,
	companySearchElem,
	fsElem,
	periodElem,
	extraElem,
	dataDetailElem,
}: {
	indexElem: JSX.Element;
	companySearchElem: JSX.Element;
	fsElem: JSX.Element;
	periodElem: JSX.Element;
	extraElem: JSX.Element;
	dataDetailElem: JSX.Element;
}) {
	return (
		<>
			<div className="flex bg-base-300 p-3 rounded-lg mt-3">
				<div className="periodElem text-base w-full sm:w-2/3 grid gap-1 grid-cols-1 grid-rows-2 lg:gap-0 lg:grid-cols-2 lg:grid-rows-1">
					{periodElem}
				</div>
				<div className="companySearchElem hidden sm:w-1/3 sm:block z-30">
					{companySearchElem}
				</div>
				<div className="sm:hidden">
					<label htmlFor="companySearchModal" className="btn companySearchElem">
						<span>기업</span>
						<span>검색</span>
					</label>
				</div>
			</div>
			<div className="fsElem">
				<div className="bg-base-300 p-3 mt-3 rounded-lg overflow-x-auto">
					<div className="w-full">{fsElem}</div>
				</div>
			</div>
			<div className="flex justify-between mt-3">
				<div className="hidden md:block bottom-0 z-20 w-144">
					<div className="indexElem p-3 bg-base-300 rounded-lg grid grid-cols-3">
						{indexElem}
					</div>
				</div>
				<div className="md:hidden pl-3">
					<label htmlFor="indexModal" className="btn indexElem">
						재무지표 수정
					</label>
				</div>
				<div className="flex">
					<label
						htmlFor="financeDataSourceDetailModal"
						className="btn indexElem"
					>
						재무제표 출처 상세
					</label>
					<div className="w-7 h-7 flex flex-end mx-6 my-3 fill-current">
						{extraElem}
					</div>
				</div>
			</div>
			{/* company search modal when width is sm */}
			<input type="checkbox" id="companySearchModal" className="modal-toggle" />
			<div className="modal">
				<div className="indicator w-5/6">
					<label
						htmlFor="companySearchModal"
						className="indicator-item badge badge-lg text-xl cursor-pointer"
					>
						x
					</label>
					<div className="modal-box bg-base-300 w-full h-96">
						<div className="">{companySearchElem}</div>
					</div>
				</div>
			</div>
			{/* index model when width is sm */}
			<input type="checkbox" id="indexModal" className="modal-toggle" />
			<div className="modal">
				<div className="indicator w-5/6">
					<label
						htmlFor="indexModal"
						className="indicator-item badge badge-lg text-xl cursor-pointer"
					>
						x
					</label>
					<div className="modal-box bg-base-300 w-full">
						<div className="bg-base-300 rounded-lg">{indexElem}</div>
					</div>
				</div>
			</div>
			{/* finance data source detail modal */}
			<input
				type="checkbox"
				id="financeDataSourceDetailModal"
				className="modal-toggle"
			/>
			<div className="modal">
				<div className="indicator w-5/6 md:w-3/6">
					<label
						htmlFor="financeDataSourceDetailModal"
						className="indicator-item badge badge-lg text-xl cursor-pointer"
					>
						x
					</label>
					<div className="modal-box bg-base-300 min-w-full h-96">
						<div className="">{dataDetailElem}</div>
					</div>
				</div>
			</div>
		</>
	);
}
