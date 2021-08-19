import { css } from "@emotion/react";

export const addInput = ({ theme }) => css`
  background: unset;
  border: unset;
  padding: 0 64px;
  /* flex: 1; */
  color: ${theme.color.primary.black};
  border-bottom: 1px solid ${theme.color.primary.red};
  outline: unset;
  font-family: "homemade apple", "sans-serif";
  font-size: 16px;
  text-transform: lowercase;
  width: 100%;
`;
