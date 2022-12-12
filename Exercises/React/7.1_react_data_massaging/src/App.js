import React, { useState } from "react";
import "./App.css";
import data from "./data";
import { getNames, bornBefore1990 } from "./utils";
import Names from "./components/Names";
import Card from "./components/Card";

function App() {
  const [names, setNames] = useState(getNames(data));
  const [years, setYears] = useState(bornBefore1990(data));
  // console.log(names, years);

  return (
    <div className="myApp">
      <Names names={names} />
      {years.map((year, i) => {
        return <Card key={i} person={year} />;
      })}
    </div>
  );
}

export default App;
