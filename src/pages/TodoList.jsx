import React from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoFrom from "../components/TodosForm";
import Todos from "../components/Todos";

const TodoList = () => {
  return (
    <Paper>
      <Header> </Header>
      <TodoFrom />
      <Todos />
    </Paper>
  );
};

export default TodoList;
