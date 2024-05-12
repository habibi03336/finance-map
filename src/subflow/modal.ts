const modal = ({
	stageClassName,
	buttonDivClassName,
	buttonAsset,
	modalStageClassName,
	curtainClassName,
}: {
	buttonDivClassName: string;
	stageClassName: string;
	buttonAsset: string;
	modalStageClassName: string;
	curtainClassName: string;
}) => {
	return (contentHTML: string) => {
		const $body = document.getElementsByTagName("body")[0];
		const tempBodyStyle = { pointerEvents: "", opacity: "", overflow: "" };
		tempBodyStyle.pointerEvents = $body.style.pointerEvents;
		tempBodyStyle.opacity = $body.style.opacity;
		tempBodyStyle.overflow = $body.style.overflow;
		$body.style.pointerEvents = "none";
		$body.style.overflow = "hidden";

		const $html = document.getElementsByTagName("html")[0];
		const $stage = document.createElement("div");
		const $curtain = document.createElement("div");
		$curtain.className = curtainClassName;
		$stage.className = stageClassName;
		const $modal = document.createElement("div");
		const $closeButton = document.createElement("button");
		$closeButton.className = buttonDivClassName;
		$closeButton.innerHTML = buttonAsset;
		$closeButton.onclick = () => {
			console.log("E");
			const $body = document.getElementsByTagName("body")[0];
			$body.style.pointerEvents = tempBodyStyle.pointerEvents;
			$body.style.opacity = tempBodyStyle.opacity;
			$body.style.overflow = tempBodyStyle.overflow;
			$stage.remove();
		};
		$modal.className = modalStageClassName;
		const $content = document.createElement("div");
		$content.innerHTML = contentHTML;
		$modal.append($closeButton, $content);
		$stage.append($modal, $curtain);
		$html.append($stage);
	};
};

export default modal;
