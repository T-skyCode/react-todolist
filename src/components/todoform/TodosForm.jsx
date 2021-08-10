import React, { useState } from "react";
import PropTypes from "prop-types";

import style from "./todoform.module.css";

const TodoFrom = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

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
      <section className={style.add}>
        <form className={style.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={style.addInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={style.addBtn}>Add</button>
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
