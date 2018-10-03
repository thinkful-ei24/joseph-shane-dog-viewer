import React, { Component } from "react";

import "./Dog.css";
import DogChooser from "./dogChooser";

export default class Dog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DogChooser dogs={this.props.dogs} />;
  }
}
