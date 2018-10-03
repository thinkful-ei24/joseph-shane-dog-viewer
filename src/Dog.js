import React, { Component } from "react";

import "./Dog.css";
import DogChooser from "./dogChooser";
import DogOut from "./dogOut";

export default class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDog: 'affenpinscher'
    }
  }
  render() {
    return (
      <div>
      <DogChooser dogs={this.props.dogs} currentDog={currentDog => this.setState({currentDog})}  />
      <DogOut currentDog={this.state.currentDog} />
      </div>
    )
  }
}
