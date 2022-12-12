import React, { useState, createContext } from "react";
import data from "./data.json";
import ListItem from "./components/ListItem/ListItem";
import "./App.css";

export const context = createContext({ data1: [], setData: null });

function App() {
  const [data1, setData] = useState([]);
  setData(data)
  console.log(data);

  return (
    <div className="App">
      <context.Provider value={{ data1, setData }}>
        <ListItem />
      </context.Provider>
    </div>
  );
}

export default App;
