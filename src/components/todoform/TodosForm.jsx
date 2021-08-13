/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";

import * as styles from "./todoform.styles";

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
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
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
