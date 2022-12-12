

import React,{ useState} from "react";
import Form from "./components/Form";
import "./App.css";
import Review from "./components/Review"

function App(params) {
  const [subittedData,setSubmittedData] = useState(null)
  function submitForm(data) {
    setSubmittedData((prevValue) =>{
      return {...prevValue, ...data}
    })
  }
  return (
    <div>
      <Form submit={submitForm} />
      {subittedData && <Review data={subittedData} />}
    </div>
  );
}

export default App;
