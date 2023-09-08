import styled from "styled-components";

export const Nav = styled.div.attrs({
	className:
		"navbar justify-around sm:justify-start bg-base-300 md:rounded-lg mt-3",
})``;
export const NavItem = styled.a.attrs({
	className: "text-lg sm:text-xl btn btn-ghost normal-case",
})``;

export const activeClassName = "opacity-100";

export const nonActiveClassName = "opacity-50";
