import React, { Component } from "react";

import "./Dog.css";
import DogChooser from "./dogChooser";
import DogFetcher from "./dogFetcher";
import Carousel from "./Carousel";

export default class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDog: "affenpinscher",
      currentImage: "",
      currentIndex: 0,
    };
  }

  componentDidMount() {
    DogFetcher({
      breed: this.state.currentDog,
      setImage: currentImage => this.setState({ currentImage })
    });
  }

  render() {
    return (
      <div>
        <DogChooser
          dogs={this.props.dogs}
          currentDog={currentDog => this.setState({ currentDog }, () => DogFetcher(
            {breed: this.state.currentDog,
             setImage: currentImage => this.setState({ currentImage })
            }))}
        />
        <Carousel currentImage={this.state.currentImage}
           />
      </div>
    );
  }
}
