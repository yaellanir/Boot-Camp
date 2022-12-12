import "./box1.css";
import React from "react";

export default function box1(props) {
  console.log(props.children,props.yael);
  return <div className="greenbox flex-center">
    {props.children}
  </div>;
}
