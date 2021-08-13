// /** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";
import PropTypes from "prop-types";
// import cx from "classnames";

// import styles from "./button.module.css";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "color-black",
  //   color === "red" && "color-red",
  //   align == "left" && "align-left",
  //   align == "right" && "align-right"
  // ].join(" ");

  // const classNames = cx(styles.headerBtn, {
  //   [styles.colorBlack]: color === "black",
  //   [styles.colorRed]: color === "red",
  //   [styles.alignLeft]: align === "left",
  //   [styles.alignRight]: align === "right"
  // });

  const theme = useTheme();
  return (
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>

    <button css={styles.button({ align, color, theme })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
