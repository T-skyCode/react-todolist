/** @jsxImportSource @emotion/react */
import { withTheme, jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Button from "../button/buttonClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  /* flex: 1; */
  color: ${(props) => props.theme.color.primary.black};
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: unset;
  font-family: "homemade apple", "sans-serif";
  font-size: 16px;
  text-transform: lowercase;
  width: 100%;
`;
class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();

    if (!value) {
      alert("No blank Todo!");
      return;
    }

    if (value.length > 30) {
      alert("Please Create a Shorter Todo text!");
      this.setState({
        value: ""
      });
      return;
    }
    addTodo(value);
    this.setState({
      value: ""
    });
  };

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;
    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="center">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  theme={theme}
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
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
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}
export default withTheme(TodoForm);
