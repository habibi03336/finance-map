import confirm from "./confirm";
import alert from "./alert";
const globalApi = {
	confirm: confirm({
		modalClass: "modal visible opacity-100 pointer-events-auto",
		modalboxClass: "modal-box",
		modalTextDivClass: "flex justify-center text-xl m-2 p-4",
		modalButtonDivClass: "flex justify-center gap-2",
		modalButtonClass: "btn text-lg",
	}),
	alert: alert({
		modalClass: "modal visible opacity-100 pointer-events-auto",
		modalboxClass: "modal-box",
		modalTextDivClass: "flex justify-center text-xl m-2 p-4",
		modalButtonDivClass: "flex justify-center gap-2",
		modalButtonClass: "btn text-lg",
	}),
};

export default globalApi;
