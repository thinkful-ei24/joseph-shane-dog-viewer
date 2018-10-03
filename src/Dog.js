import React, { Component } from "react";

import "./Dog.css";
import DogChooser from "./dogChooser";
import DogOut from "./dogOut";
import DogFetcher from "./dogFetcher";

export default class Dog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDog: "affenpinscher",
      currentImage: ""
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
          currentDog={currentDog => this.setState({ currentDog })
          DogFetcher={
            breed: this.state.currentDog,
            setImage: currentImage => this.setState({ currentImage })
          }
        }
  
        />
        <DogOut currentLink={this.state.currentImage} />
      </div>
    );
  }
}
