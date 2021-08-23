/** @jsxImportSource @emotion/react */

import { useTheme, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import Todo from "../todo/TodoClass";

import * as styles from "./todos.styles";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px" padding="50px 0 0 0">
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
          <React.Fragment>
            <div css={styles.todoPlaceholderText({ theme })}>
              Add todo by clicking{" "}
              <span css={styles.addButtonPlaceholderText({ theme })}>
                {" "}
                Add{" "}
              </span>{" "}
              button on the top left corner
            </div>
            <Container justifyContent="center">
              <Item>
                <span css={styles.seeAboutPagePlaceholdertext}>
                  <Link to="/about">Or visit about page</Link>
                </span>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
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
