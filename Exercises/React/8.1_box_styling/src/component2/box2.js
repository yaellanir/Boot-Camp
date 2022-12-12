// import './box2.css'
// import React from "react";
import styled from "styled-components"
// import styled from "./Box2.module.css"

const Box = styled.div`
background-color:lightblue;
width: 400px;
height: 300px;`


function Box2({children}) {
  return (
    <Box className="flex-center">{children}</Box>
  );
}

export default Box2;