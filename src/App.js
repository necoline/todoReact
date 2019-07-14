import React from "react";
import "./App.css";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  //js
  return (
    <div className="App">
      <Header userName="Marie" />
      <ToDoList />
    </div>
  );
}

export default App;
