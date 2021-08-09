import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoFrom from "../components/TodosForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!" },
    { text: "Learning React Hooks!" },
    { text: "Learning Styling in React!" }
  ]);
  return (
    <Paper>
      <Header> </Header>
      <TodoFrom />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
