import { css } from "@emotion/react";

export const container = ({ theme }) => css`
  width: 600px;
  min-height: 600px;
  background-color: ${theme.background.color.primary};
  border-radius: 4px;
  margin-top: 70px;
  padding: 32px;
`;

export const frame = ({ theme }) => css`
  height: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  border: 2px solid ${theme.color.primary.black};
`;
