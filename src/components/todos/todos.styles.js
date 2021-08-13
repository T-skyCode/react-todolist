import { css } from "@emotion/react";

export const todo = () => css`
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;

export const todoPlaceholderText = ({ theme }) => css`
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
  color: ${theme.color.primary.black};
`;

export const addButtonPlaceholderText = ({ theme }) => css`
  font-family: "Bungee", sans-serif;
  font-size: 24px;
  color: ${theme.color.primary.black};
`;
