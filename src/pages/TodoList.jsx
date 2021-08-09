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

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("showAdd", showAdd);
  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd}></Header>
      <TodoFrom addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
