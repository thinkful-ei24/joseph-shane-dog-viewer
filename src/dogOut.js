import React from "react";

export default function DogOut(props) {
  return (
    <div>
      <img src={props.currentLink} alt="dog breed" />
    </div>
  );
}

//https://dog.ceo/api/breed/{prop}/images/random
