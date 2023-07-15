import React, { Component } from "react";

export default class InputField extends Component {
  render() {
    return (
      <div className="inputField">
        <input
          type={this.props.type}
          className="input"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(event) => this.props.onChange(event.target.value)}
        />
      </div>
    );
  }
}
