import React from "react";

import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoFrom from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [{}],
    showAdd: false
  };

  addTodo = (value) => {
    const { todos } = this.state;
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      this.setState({
        todos: addedTodo
      });
    } else {
      alert("Only 10 todos is allowed");
    }
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Finish add todo before clear");
      return;
    }

    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { showAdd, todos } = this.props;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-beetwen"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          ></Header>
          <TodoFrom addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}
export default TodoList;
