import React, { useState } from "react";

import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoFrom from "../components/todoform/TodoFormClass";
import Todos from "../components/todos/TodosClass";

import Container from "../layout/Container";

const TodoList = () => {
  // const [todos, setTodos] = useState([]);

  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todos")) || []
  // );

  const [todos, setTodos] = useStateWithLocalStorage("todos");
  const [showAdd, setShowAdd] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("Only 10 Todos is allowed");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-beetwen"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        ></Header>
        <TodoFrom addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
