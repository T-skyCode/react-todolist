/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import Button from "../button/buttonClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import style from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button
            text={showAdd ? "Finish" : "Add"}
            onClick={showAddToggle}
            align="left"
          />
        </Item>

        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        </Item>

        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
