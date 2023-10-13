export interface ScalarColorMapper {
	setDomain: (min: number, max: number) => void;
	setPositiveColor: (color: string) => void;
	setNegativeColor: (color: string) => void;
	getColor: (num: number) => string;
}
