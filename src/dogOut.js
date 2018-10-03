import React from "react";
import "./dogOut.css";

export default function DogOut(props) {
  return (
    <div>
      <img src={props.currentLink} alt="dog breed" />
    </div>
  );
}
