import { css } from "@emotion/react";

export const add = () =>
  css`
    padding: 16px;
  `;

export const addForm = () => css`
  display: flex;
  align-items: center;
`;

export const addInput = ({ theme }) => css`
  background: unset;
  border: unset;
  padding: 0 64px;
  flex: 1;
  color: ${theme.color.primary.black};
  border-bottom: 1px solid ${theme.color.primary.red};
  outline: unset;
  font-family: "homemade apple", "sans-serif";
  font-size: 16px;
  text-transform: lowercase;
`;

export const addBtn = ({ theme }) => css`
  font-size: 1.8rem;
  font-family: "Bungee", "sans-serif";
  color: ${theme.color.primary.black};
  padding: 16px;
  padding-right: unset;
  cursor: pointer;

  background: unset;
  border: none;
  outline: none;
`;
