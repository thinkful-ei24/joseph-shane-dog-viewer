import React from 'react';
import './carousel.css';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      index: -1
    }
  }

  handleChange() {
    if(this.state.index === this.props.currentImage.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 1})
    }
    setTimeout(this.handleChange,3000);
  }

  componentDidMount() {
    this.handleChange();
  }

  render() {
      return (
    <div>
      <img src={this.props.currentImage[this.state.index]} alt="dog breed" />
    </div>
  );
  }

}