import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Transactions from "./pages/Transactions/Transactions"
import Users from "./pages/Users/Users"
import HomePage from "./pages/HomePage/HomePage";
import Error from "./pages/Error/Error";
import useFetch from "./Hooks/useFetch";
import {Routes, Route} from "react-router-dom"

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL
    : "http://localhost:3001/api/users";

function App() {
  console.log(BASE_URL);
  const [data, error] = useFetch(BASE_URL);
  console.log(data);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage data={data}/>}/>
        <Route exact path="/transactions" element={<Transactions data={data}/>}/>
        <Route exact path="/users" element={<Users data={data}/>}/>
      </Routes>
    </div>
  );
}

export default App;
