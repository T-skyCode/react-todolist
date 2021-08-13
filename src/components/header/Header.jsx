// import React from "react";
/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";

import PropTypes from "prop-types";

import Button from "../button/Button";
// import style from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section css={styles.header}>
      <Button
        text={showAdd ? "Finish" : "Add"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
