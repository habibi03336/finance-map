import styled from "styled-components";

const MenuItemInner = styled.a``;
const MenuItemOuter = styled.li``;
const MenuItem = ({
	children,
	focused,
	...props
}: {
	children: React.ReactNode;
	focused: boolean;
}) => {
	return (
		<MenuItemOuter {...props} className={focused ? "bordered" : ""}>
			<MenuItemInner className="border-accent from-accent">
				{children}
			</MenuItemInner>
		</MenuItemOuter>
	);
};

export default {
	Div: styled.div.attrs({
		className: "relative",
	})``,
	Menu: styled.ul.attrs({
		className: "menu bg-base-100 w-full rounded-sm mt-1.5 absolute opacity-80",
	})``,
	MenuItem: styled(MenuItem).attrs({})``,
};
