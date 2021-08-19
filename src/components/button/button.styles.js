import { css } from "@emotion/react";

export const button = ({ color, align, theme }) => {
  let textColor;
  const {
    color: { primary }
  } = theme;
  //shorthand dari memanggil object theme.color.primary

  switch (color) {
    case "black":
      textColor = primary.black;
      break;

    case "red":
      textColor = primary.red;
      break;

    default:
      textColor = primary.black;
  }

  return css`
    font-size: 1.8rem;
    font-family: "Bungee", "sans-serif";
    color: ${textColor};

    cursor: pointer;
    padding: 16px;
    background: unset;
    border: unset;
    outline: unset;
    text-align: ${align};
    /* &:hover{} cara untuk menambahkan hover atau pseudo class css */
  `;
};
