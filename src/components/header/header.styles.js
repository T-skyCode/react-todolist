import { css } from "@emotion/react";

export const headerTitle = (theme) =>
  css`
    /* width: 52%; */
    text-align: center;
    color: ${theme.color.primary.black};
    font-size: 3.6rem;
    font-family: "Homemade Apple", "sans-serif";
    text-transform: lowercase;
  `;
