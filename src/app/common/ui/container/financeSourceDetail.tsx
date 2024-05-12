import { finance, FinancialIndex } from "@/app/common/datatype";

export default function ({}: {}) {
	return function ({ finances }: { finances: finance[][] }) {
		return <div>{JSON.stringify(finances)}</div>;
	};
}
