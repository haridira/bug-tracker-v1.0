import React from "react";

function Card(props) {
  return (
    <div>
      <h2></h2>
      <h2>{props.name}</h2>
      <h4>{props.comment}</h4>
    </div>
  );
}

export default Card;
