import { scaleSequential, ScaleSequential } from "d3-scale";
import { interpolateRgb } from "d3-interpolate";
import { ScalarColorMapper } from "./ScalarColorMapper";

export default class ScalarColorMapperImpl implements ScalarColorMapper {
	private positiveColorMapper: ScaleSequential<string>;
	private negativeColorMapper: ScaleSequential<string>;
	private defaultColor: string = "beige";

	constructor() {
		this.positiveColorMapper = scaleSequential();
		this.negativeColorMapper = scaleSequential();
	}

	setPositiveColor(color: string) {
		this.positiveColorMapper.interpolator(
			interpolateRgb(this.defaultColor, color)
		);
	}

	setNegativeColor(color: string) {
		this.negativeColorMapper.interpolator(
			interpolateRgb(color, this.defaultColor)
		);
	}

	setDomain(min: number, max: number) {
		this.positiveColorMapper.domain([0, max]);
		this.negativeColorMapper.domain([min, 0]);
	}

	getColor(num: number) {
		if (num === 0) {
			return this.defaultColor;
		} else if (num < 0) {
			return this.negativeColorMapper(num);
		} else {
			return this.positiveColorMapper(num);
		}
	}
}
