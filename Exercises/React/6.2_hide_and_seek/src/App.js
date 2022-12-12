import React, { useState } from "react";
import "./App.css";
// import "./box.css"

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const HideShowToggle = () => {
    setIsVisible((current) => !current)
    
  };

  return (
    <div className="app">
      <div  className="yellowBox" style={{visibility: isVisible ? 'visible' : 'hidden'}}>
      </div>
      <button onClick={HideShowToggle}>show/hide</button>
    </div>
  );
}

export default App;
