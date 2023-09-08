const toggleNightDay = document.getElementById(
	"toggleNightDay"
) as HTMLInputElement;
toggleNightDay?.addEventListener("click", (e) => {
	if (toggleNightDay.checked) {
		document
			.getElementsByTagName("html")[0]
			.setAttribute("data-theme", "bumblebee");
	} else {
		document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
	}
});
