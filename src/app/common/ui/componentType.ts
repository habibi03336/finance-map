import { StyledComponent } from "styled-components";

export type DesignComponent = StyledComponent<any, any, {}, any>;
export type DesignInputComponent = StyledComponent<"input", any, {}, never>;
export type DesignSelectComponent = StyledComponent<"select", any, {}, never>;
