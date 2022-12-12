import './box4.css'
import React from "react";
import styled from "styled-components"



const Box = styled.div`
  background-color:rgb(161, 64, 161);
  width: 150px;
  height: 50px;
`


function Box4() {
  return (
    <Box className="flex-center"></Box>
  );
}

export default Box4;