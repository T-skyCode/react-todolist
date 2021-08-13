import React from "react";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";

import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#000",
      red: "#ff0000"
      // FF0000
    }
  },
  background: {
    color: {
      primary: "#f2eecb"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />;
    </ThemeProvider>
  );
}
