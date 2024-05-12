import styled from "styled-components";

const Div = styled.div.attrs({})``;

const NavItem = ({
	children,
	active,
	...props
}: {
	children: React.ReactNode;
	active: boolean;
}) => {
	return (
		<Div {...props} className={active ? "tab tab-active" : "tab"}>
			{children}
		</Div>
	);
};

const Link = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
		/>
	</svg>
);

export default {
	Div: styled.div.attrs({ className: "text-xs md:text-base" })``,
	Nav: styled.div.attrs({ className: "tabs tab-lifted m-1" })``,
	NavItem: NavItem,
	Table: styled.table.attrs({ className: "table w-full m-1" })``,
	TableHead: styled.thead.attrs({})``,
	TableBody: styled.tbody.attrs({})``,
	TableRow: styled.tr.attrs({})``,
	Th: styled.th.attrs({})``,
	Td: styled.td.attrs({})``,
	LinkSVG: Link,
};
