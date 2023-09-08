import { useState } from "react";
import { company } from "../../datatype";
import { DesignComponent, DesignInputComponent } from "../componentType";

export default function ({
	Div,
	Input,
	Menu,
	MenuItem,
}: {
	Div: DesignComponent;
	Menu: DesignComponent;
	Input: DesignInputComponent;
	MenuItem: DesignComponent;
}) {
	return function ({
		companiesSearched,
		searchInputHandler,
		onSelectCompany,
	}: {
		companiesSearched: company[];
		searchInputHandler: (token: string) => void;
		onSelectCompany: (company: company) => void;
	}) {
		const [focused, setFocused] = useState<number>(-1);
		const [inputVal, setInputvVal] = useState("");

		const arrowDownUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.code === "ArrowDown") {
				e.preventDefault();
				if (focused + 1 < companiesSearched.length) setFocused(focused + 1);
			}
			if (e.code === "ArrowUp") {
				e.preventDefault();
				if (focused - 1 >= -1) setFocused(focused - 1);
			}
			if (e.code === "Enter") {
				e.preventDefault();
				if (focused === -1) return;
				confirmAndSelectCompany(companiesSearched[focused]);
			}
		};

		const confirmAndSelectCompany = async (company: company) => {
			if (await window.globalApi.confirm(`"${company.name}"를 추가합니다.`)) {
				onSelectCompany(company);
				searchInputHandler("");
				setInputvVal("");
				setFocused(-1);
			}
		};

		return (
			<Div>
				<Input
					value={inputVal}
					placeholder="기업검색"
					onChange={(e) => {
						searchInputHandler(e.target.value);
						setInputvVal(e.target.value);
						if (focused !== -1) setFocused(-1);
					}}
					onKeyDown={arrowDownUpHandler}
				/>
				<Menu onMouseOut={() => setFocused(-1)}>
					{companiesSearched.map((company, idx) => {
						return (
							<MenuItem
								onMouseOver={() => setFocused(idx)}
								onClick={() => confirmAndSelectCompany(company)}
								focused={idx === focused}
								key={company.companyCode}
							>
								{company.name} {company.stockCode}
							</MenuItem>
						);
					})}
				</Menu>
			</Div>
		);
	};
}
