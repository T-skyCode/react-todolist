import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "belajar React"
    },
    {
      text: "belajar React tai "
    },
    {
      text: "belajar React tai anjing"
    },
    {
      text: "belajar React taio anjing monyet"
    },
    {
      text: "belajar React tai anjing monyet babi"
    },
    {
      text: "belajar React apa kabs"
    },
    {
      text: "belajar React"
    },
    {
      text: "belajar React tai "
    },
    {
      text: "belajar React tai anjing"
    },
    {
      text: "belajar React taio anjing monyet"
    },
    {
      text: "belajar React tai anjing monyet babi"
    },
    {
      text: "belajar React apa kabs"
    }
  ];

  return (
    <section className="todo">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
