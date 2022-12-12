import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  const [value, setValue] = useState(0);

  const clickHandler = () => {
    console.log(value);
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div className="myApp">
      <button onClick={clickHandler}>increment</button>
      <Counter text={value}></Counter>
    </div>
  );
}

export default App;
