import React from "react";

export default function DogChooser(props) {
  const dogOptions = props.dogs.map(dog => {
    let key = Object.keys(dog);
    return <option value={key}>{key}</option>;
  });

  return (
    <form>
      <label htmlFor="dog_drop_drop" />
      <select
        onChange={e => props.currentDog(e.target.value)}
        id="dog_drop_down"
      >
        {dogOptions}
      </select>
    </form>
  );
}
