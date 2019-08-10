import React from "react";
import "./App.css";
import Header from "./Header";
import Phonebook from "./Phonebook";

function App() {
  //get saved list
  return (
    <div className="App">
      <Header userName="Marie" />
      <Phonebook />
    </div>
  );
}

export default App;
