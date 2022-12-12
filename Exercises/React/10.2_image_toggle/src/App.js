import React from "react";
import { useRef } from "react";
import "./App.css";
import styled from "styled-components";
const Img = styled.img`
  width: 400px;
`;
function App() {
  const image = require("./photos/color.jpg");
  const imageBlackWhite = require("./photos/blackwhite.jpg");
  const imageRef = useRef(image);

  return (
    <div>
      <Img
        onMouseEnter={() => (imageRef.current.src = imageBlackWhite)}
        onMouseLeave={() => (imageRef.current.src = image)}
        ref={imageRef}
        src={image}
      />
    </div>
  );
}

export default App;
