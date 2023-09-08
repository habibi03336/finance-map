export default ({
	indexKeyPadElem,
	companySearchElem,
	companySelectedElem,
	chartElem,
	periodElem,
	introElem,
}: {
	indexKeyPadElem: JSX.Element;
	companySearchElem: JSX.Element;
	companySelectedElem: JSX.Element;
	chartElem: JSX.Element;
	periodElem: JSX.Element;
	introElem: JSX.Element;
}) => {
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
					<label
						htmlFor="companySearchModal"
						className="companySearchElem btn "
					>
						<span>기업</span>
						<span>검색</span>
					</label>
				</div>
			</div>
			<div className="grid grid-rows-1 grid-cols-6 gap-3">
				<div className="chartElem col-span-6 sm:col-span-4 row-span-1 bg-base-300 p-3 mt-3 rounded-lg overflow-x-auto">
					<div style={{ minHeight: "24rem" }}>{chartElem}</div>
				</div>
				<div className="col-span-6 sm:col-span-2 row-span-1 flex flex-col justify-end mt-3">
					<div className="companySelectedElem h-full">
						{companySelectedElem}
					</div>
					<div className="pt-3 bottom-0 z-20 w-full">
						<div className="indexKeyPadElem bg-base-300 rounded-lg">
							{indexKeyPadElem}
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-end mx-6 my-3 fill-current">
				<div className="w-7 h-7">{introElem}</div>
			</div>
			{/* company search modal when width is sm */}
			<input type="checkbox" id="companySearchModal" className="modal-toggle" />
			<div className="modal">
				<div className="indicator w-5/6">
					<label
						htmlFor="companySearchModal"
						className="indicator-item badge badge-lg text-xl"
					>
						x
					</label>
					<div className="companySearchElem modal-box bg-base-300 w-full h-96">
						<div className="">{companySearchElem}</div>
					</div>
				</div>
			</div>
		</>
	);
};
