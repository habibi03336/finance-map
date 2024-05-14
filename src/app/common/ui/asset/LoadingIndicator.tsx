const LoadingIndicator = () => {
	return (
		<>
			<div className="absolute w-full rounded h-full bg-neutral absolute top-0 z-20 opacity-70 pointer-events-none"></div>
			<div className="w-fit h-fit absolute top-0 left-0 bottom-0 right-0 m-auto z-30">
				<div
					className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
					role="status"
				>
					<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
						Loading...
					</span>
				</div>
			</div>
		</>
	);
};

export default LoadingIndicator;
