import { css } from "emotion/core";

export const button = ({ align }) => css`
  width: 24%;
  font-size: 1.8rem;
  font-family: "Bungee", "sans-serif";
  cursor: pointer;
  padding: 16px;
  background: unset;
  border: unset;
  outline: unset;
  text-align: ${align};
`;
