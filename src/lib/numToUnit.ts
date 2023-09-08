type numToUnit = (num: number) => string;

const commaForEachThreeDigit = (num: number) => {
	const arr = [];
	let i = 0;
	while (num !== 0) {
		if (i == 3) {
			arr.unshift(",");
			i = 0;
		}
		arr.unshift(num % 10);
		num = Math.floor(num / 10);
		i += 1;
	}
	return arr.join("");
};

const toWon: numToUnit = (num) => {
	if (num === 0) return "0(원)";
	const isMinus = num < 0;
	const won = Math.abs(num);
	return (
		(isMinus ? "-" : "") + `${commaForEachThreeDigit(Math.floor(won))}(원)`
	);
};

const toSpeakingNum: numToUnit = (num) => {
	const ignoreThreshHold = 10_000;
	let won = Math.floor(Math.abs(num));
	if (won < ignoreThreshHold) {
		return "0";
	}
	const arr = [];
	const unit = ["조", "억", "만"];
	const jo = 1_000_000_000_000;
	arr.push(Math.floor(won / jo));
	won = won % 1_000_000_000_000;
	const uck = 100_000_000;
	arr.push(Math.floor(won / uck));
	won = won % uck;
	const man = 10_000;
	arr.push(Math.floor(won / man));
	const res = [];
	for (let i = 0; i < unit.length; i += 1) {
		if (arr[i] !== 0) {
			res.push(arr[i]);
			res.push(unit[i]);
		}
	}
	if (num < 0) {
		res.unshift("-");
	}
	res.push("");
	return res.join("");
};

const toPercentByFirstDecimal: numToUnit = (num) => {
	return `${Math.floor(num * 1000) / 10}%`;
};

const to10ThousandTicket: numToUnit = (num) => {
	return `${commaForEachThreeDigit(Math.floor(num / 10000))}(만 주)`;
};

const toMutiplier: numToUnit = (num) => {
	return `${Math.floor(num * 100) / 100}(배)`;
};

const numToUnit: { [key: string]: numToUnit } = {
	won: toWon,
	speakingNum: toSpeakingNum,
	percentByFirstDecimal: toPercentByFirstDecimal,
	tenThousandTicket: to10ThousandTicket,
	mutiplier: toMutiplier,
};

export default numToUnit;
