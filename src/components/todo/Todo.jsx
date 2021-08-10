import React from "react";
import PropTypes from "prop-types";

import style from "./todo.module.css";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className={style.tod} onClick={() => completeTodo(index)}>
      <span
        className={style.todText}
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
