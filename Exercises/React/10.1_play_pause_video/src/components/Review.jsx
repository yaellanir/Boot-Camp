import React from "react";

function Review(props) {
  return (
    <div>
      Review
      <div>{props.data.firstName}</div>
      <div>{props.data.lastName}</div>
      <div>{props.data.age}</div>
      <div>{props.data.freetext}</div>
      <button>submit</button>
    </div>
  );
}

export default Review;
