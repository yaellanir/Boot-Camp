// import "./box1.css";
import React from "react";
// import styled from "styled-components"

// const Box = styled.div`
//   background-color: lightgreen;
//   width: 500px;
//   height: 350px;`


// export default function Box1(props) {
//   console.log(props.children);
//   return <Box className="greenbox flex-center">
//     {props.children}
//   </Box>;
// }
// export default Box1;

const divStyle = {
  backgroundColor: 'green',
  width: '500px' ,
  height: '350px' ,
}


function Box1( {children}) {
  return (
    <div  style={divStyle} className="flex-center">{children}`</div>
  );
}

export default Box1;