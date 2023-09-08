export default function ({
	modalClass,
	modalboxClass,
	modalTextDivClass,
	modalButtonDivClass,
	modalButtonClass,
}: {
	modalClass: string;
	modalboxClass: string;
	modalTextDivClass: string;
	modalButtonDivClass: string;
	modalButtonClass: string;
}) {
	return (message: string) => {
		const $modal = document.createElement("div");
		$modal.className = modalClass;
		const $modalbox = document.createElement("div");
		$modalbox.className = modalboxClass;
		const $textDiv = document.createElement("div");
		$textDiv.innerText = message;
		$textDiv.className = modalTextDivClass;
		const $yesButton = document.createElement("button");
		$yesButton.innerHTML = "<pre> 네 </pre>";
		$yesButton.className = modalButtonClass;
		const $noButton = document.createElement("button");
		$noButton.innerText = "아니오";
		$noButton.className = modalButtonClass;
		const $buttonDiv = document.createElement("div");
		$buttonDiv.className = modalButtonDivClass;
		$buttonDiv.append($noButton, $yesButton);
		$modalbox.append($textDiv, $buttonDiv);
		$modal.append($modalbox);
		const html = document.getElementsByTagName("html")[0];
		const body = document.getElementsByTagName("body")[0];
		html.append($modal);
		$modal.tabIndex = -1;
		$modal.focus();
		body.style.pointerEvents = "none";
		body.style.overflow = "hidden";
		const backToDefault = () => {
			$modal.onkeydown = () => {};
			$modal.remove();
			body.style.pointerEvents = "auto";
			body.style.overflow = "";
		};
		return new Promise<boolean>((resolve) => {
			$modal.onkeydown = (e) => {
				e.preventDefault();
				if (e.key == "Enter") {
					resolve(true);
					backToDefault();
				} else if (e.key == "Escape") {
					resolve(false);
					backToDefault();
				}
			};
			$yesButton.onclick = () => {
				resolve(true);
				backToDefault();
			};
			$noButton.onclick = () => {
				resolve(false);
				backToDefault();
			};
		});
	};
}
