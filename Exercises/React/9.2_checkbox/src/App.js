import React, { useState, useEffect } from "react";
import Checkbox from "./components/Checkbox";

const labels = [
  {
    label: "I read the terms of the app",
    checked: false,
    id: 1,
    inputKey: "readTerms",
  },
  {
    label: "I accept the terms of the app",
    checked: false,
    id: 2,
    inputKey: "acceptTerms",
  },
  {
    label: "I want to get the weekly news letter",
    checked: true,
    id: 3,
    inputKey: "getNewsLetter",
  },
  {
    label: "I want to get sales and offers",
    checked: true,
    id: 4,
    inputKey: "getOffers",
  },
];

function App() {
  const [inputValues, setInputValues] = useState({
    readTerms: false,
    acceptTerms: false,
    getNewsLetter: true,
    getOffers: true,
  });
  // const [readTerms , setReadTerms]  = useState()
  // const [acceptTErms , setAcceptTErms]  = useState()
  // const [getNewsLetter , setGetNewsLetter] = useState()
  // const [ getOffers , setGetOffers] = useState()
  function inputHandler(inputKey, isChecked) {
    setInputValues((prevValue) => {
      return { ...prevValue, [inputKey]: isChecked };
    });
  }
  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);
  return (
    <div>
      App
      {labels.map((label, i) => {
        return (
          <Checkbox
            inputHandler={inputHandler}
            key={i}
            id={label.id}
            label={label.label}
            checked={label.checked}
            inputKey={label.inputKey}
          />
        );
      })}
      {/* <Checkbox label={"I read the terms of the app"}/>
      <Checkbox label={"I accept the terms of the app"}/>
      <Checkbox label={"I want to get the weekly news letter"}checked={true}/>
      <Checkbox label={"I want to get sales and offers"}checked={true}/> */}
    </div>
  );
}

export default App;
