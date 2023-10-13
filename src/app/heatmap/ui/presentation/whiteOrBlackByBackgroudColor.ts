//https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
const colorWhiteOrBlackByBackgroundColor = (colorRgb: string) => {
	try {
		const colors = colorRgb
			.slice(colorRgb.indexOf("(") + 1, colorRgb.indexOf(")"))
			.split(", ")
			.map((elem) => Number(elem));
		if (colors[0] * 0.299 + colors[1] * 0.587 + colors[2] * 0.114 > 186) {
			return "#000000";
		} else {
			return "#ffffff";
		}
	} catch {
		return "#ffffff";
	}
};

export default colorWhiteOrBlackByBackgroundColor;
