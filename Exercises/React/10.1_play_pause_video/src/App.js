

import React,{ useState} from "react";
import "./App.css";
import Video from "./components/Video"

function App(params) {
  const [subittedData,setSubmittedData] = useState(null)
  function submitForm(data) {
    setSubmittedData((prevValue) =>{
      return {...prevValue, ...data}
    })
  }
  return (
    <div>
  <Video></Video>
    </div>
  );
}

export default App;
