import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todo">
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo.text} />;
      })}
    </section>
  );
};

Todo.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Todos;
