import Box1 from "./component1/box1";
import Box2 from "./component2/box2";
import Box3 from "./component3/box3";
import Box4 from "./component4/box4";
import React from "react";
import "./App.css";

function App() {


  return (
    <div>
      <Box1 yael= "yael">
        <Box2>
          <Box3>
            <Box4></Box4>
            <Box4></Box4>
          </Box3>
        </Box2>
      </Box1>
    </div>
  );
}

export default App;
