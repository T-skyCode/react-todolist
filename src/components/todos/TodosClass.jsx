/** @jsxImportSource @emotion/react */
import { withTheme, jsx } from "@emotion/react";

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";

const StyledTodoPlaceholderText = styled.div`
  font-family: "Homemade Apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
  color: ${(props) => props.theme.color.primary.black};
`;

const StyledAddButtonPlaceholderText = styled.span`
  font-family: "Bungee", sans-serif;
  font-size: 24px;
  color: ${(props) => props.theme.color.primary.black};
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo, theme } = this.props;
    return (
      <section className="todos-component">
        <Container
          flexDirection="column"
          minHeight="500px"
          padding="50px 0 0 0"
        >
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
            <StyledTodoPlaceholderText theme={theme}>
              {[
                "Add todo by clicking ",
                <StyledAddButtonPlaceholderText theme={theme}>
                  Add
                </StyledAddButtonPlaceholderText>,
                " Button on the top of left corner"
              ]}
            </StyledTodoPlaceholderText>
          )}
        </Container>
      </section>
    );
  }

  static PropTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default withTheme(Todos);
