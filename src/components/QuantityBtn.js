import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
    this.isPlus = this.isPlus.bind(this);
    this.isMinus = this.isMinus.bind(this);
  }
  isPlus = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  isMinus = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1,
      });
    } else {
      this.setState({
        number: this.state.number,
      });
    }
  };
  render() {
    return (
      <div className="quantity-input">
        <label htmlFor="quantity-amount" className="quantity-title" />
        <div className="quantity-btn">
          <span className="minus-btn" onClick={this.isMinus} />
          <input
            className="quantity-amount"
            value={this.state.number}
            id="quantity-amount"
            type="text"
            readOnly=""
          />
          <span className="plus-btn" onClick={this.isPlus} />
        </div>
      </div>
    );
  }
}
