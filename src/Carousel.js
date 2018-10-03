import React from 'react';


export default function Carousel(props) {

  function handleChange(curIndex, maxIndex) {
    if(curIndex === maxIndex) {return 0}
    console.log('test', curIndex);
    return curIndex++;
  }
  console.log(props.maxIndex);
  return (
    <div>
      <button onClick={e => props.onChange(handleChange(props.curIndex, props.maxIndex))}>Next</button>
    </div>
  );
}