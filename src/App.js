import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "@emotion/react";

import TodoList from "./pages/TodoList";
import About from "./pages/About";

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
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/about" component={About} />
        </Switch>
        <TodoList />
      </Router>
    </ThemeProvider>
  );
}
