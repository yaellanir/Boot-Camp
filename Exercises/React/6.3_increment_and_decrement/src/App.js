import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState(0);

  const clickInc = () => {
    if (value < 10) {
      setValue((prevValue) => prevValue + 1);
    }
    console.log(value);
  };
  const clickDec = () => {
    if (value > -10) {
      setValue((prevValue) => prevValue - 1);
    }
    console.log(value);
  };

  return (
    <div className="myApp">
      <button onClick={clickInc}>increment</button>
      <button onClick={clickDec}>decrement</button>
      <Counter
        value={value}
        color={value < 0 ? "red" : value > 0 ? "green" : "black"}
      />
    </div>
  );
}

export default App;

// function Counter({ value, color }) {
//   return <div style={{ color: color }}>{value}</div>;
// }
