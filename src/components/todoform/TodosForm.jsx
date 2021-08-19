/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";

import * as styles from "./todoform.styles";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const TodoFrom = ({ addTodo, showAdd }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No blank Todo!");
      return;
    }

    if (value.length > 30) {
      alert("Please Create a Shorter Todo text!");
      setValue("");
      return;
    }
    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="center">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoFrom.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoFrom;
