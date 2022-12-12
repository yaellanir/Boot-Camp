// import './box3.css'
// import React from "react";
import styled from "styled-components"


const Box = styled.div`
background-color:lightpink;
width: 350px;
height: 250px;
gap: 5px;
flex-direction: column;`


function Box3({children}) {

  return (
    <Box className="flex-center">{children}</Box>
  );
}

export default Box3;