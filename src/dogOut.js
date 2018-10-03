import React from 'react';

export default function DogOut(props) {
    console.log(props.breed);
    const link = `https://dog.ceo/api/breed/${props.key}/images/random`
    console.log(props.key);

    return (
      <div>
        <img src={link} alt='dog breed'></img>
      </div>
    )
  }



//https://dog.ceo/api/breed/{prop}/images/random