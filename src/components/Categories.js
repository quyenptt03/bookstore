import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <ul>
          <li className="btn-primary">All</li>
          <li className="btn-primary">Best Sellers</li>
          <li className="btn-primary">Fantasy</li>
          <li className="btn-primary">History</li>
          <li className="btn-primary">Art</li>
          <li className="btn-primary">Love Stories</li>
        </ul>
      </div>
    );
  }
}
