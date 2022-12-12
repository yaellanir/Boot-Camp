import React from "react";

function Names({ names }) {
  // console.log(names);
  return (
    <div>
      {names.map((name, i) => {
        return <h3 key={i}>{name}</h3>;
      })}
    </div>
  );
}

export default Names;
