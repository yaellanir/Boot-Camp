import './box2.css'
import React from "react";

function Box2( {children}) {
  return (
    <div className="bluebox flex-center"> {children}</div>
  );
}

export default Box2;