/** @jsxImportSource @emotion/react */
import { withTheme, jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledTodo = styled.div`
  position: relative;
  flex: 1 0 auto;
  text-align: center;
  max-height: 34px;
  margin: 16px 0 0;
  font-family: "Homemade apple", "sans-serif";
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  padding-bottom: 50px;
`;

const StyledTodoText = styled.span`
  width: 100%;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  color: ${(props) => props.theme.color.primary.black};
  text-decoration: ${(props) =>
    props.isCompleted ? "line-through" : "initial"};
`;

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted, theme } = this.props;
    return (
      <StyledTodo theme={theme} onClick={() => completeTodo(index)}>
        <StyledTodoText theme={theme} isCompleted={isCompleted}>
          {text}
        </StyledTodoText>
      </StyledTodo>
    );
  }

  static PropTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };
}

export default withTheme(Todo);
