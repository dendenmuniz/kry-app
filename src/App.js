import React, { useState } from "react";
import "./App.css";
import  JsonValidation  from "./components/JsonValidation";
import Questions from "./components/Questions";
import Label from "./components/Label";

function App() {
  let kryQuestions;
  try {
     kryQuestions = require("./config/questions.json");
    const start = () => {
      JsonValidation(kryQuestions);
    };
    start();
  } catch (error) {
    return (
      <div className="App">
        {error.message}
        <Label text="It's not possible load the App at the moment. (Invalid JSON)" />
      </div>
    );
  }
  
    return (
      <div className="app">
        <Questions />
      </div>
    );
  
}

export default App;
