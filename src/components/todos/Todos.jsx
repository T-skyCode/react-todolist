/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";
import PropTypes from "prop-types";

import Todo from "../todo/Todo";

import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();
  return (
    <section css={styles.todo}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.todoPlaceholderText({ theme })}>
          Add todo by clicking{" "}
          <span css={styles.addButtonPlaceholderText({ theme })}> Add </span>{" "}
          button on the top left corner
        </div>
      )}
    </section>
  );
};

Todo.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
