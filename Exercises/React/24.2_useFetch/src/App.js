import React from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

function Display1(params) {
  const { loading, data, error } = useFetch(
    "https://api.chucknorris.io/jokes/random"
  );
  return (
    <>
      <p>{data && data.value}</p>
      {loading && "...loading"}
      {error && <h1>{error}</h1>}
    </>
  );
}
function Display2(params) {
  const { loading, data, error } = useFetch(
    "https://6374a94848dfab73a4e4fc2d.mockapi.io/shoe-inventory"
  );
  console.log(data);
  return (
    <div>
      {data?.map((item) => {
        return <div>{JSON.stringify(item)}</div>;
      })}
      {loading && "...loading"}
      {error && <h1>{error}</h1>}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Display1 />
      <Display2 />
    </div>
  );
}

export default App;
