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

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  console.log("todos", todos);
  return (
    <Paper>
      <Header> </Header>
      <TodoFrom addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
