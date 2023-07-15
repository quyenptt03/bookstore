import React, { Component } from "react";
import author1 from "../images/team-1.png";
import sign1 from "../images/sign1.svg";
import author2 from "../images/team-2.png";
import sign2 from "../images/sign2.svg";
import author3 from "../images/team-3.png";
import sign3 from "../images/sign3.svg";
import author4 from "../images/team-4.png";
import sign4 from "../images/sign4.svg";

export default class Author extends Component {
  state = {
    authors: [
      {
        id: 1,
        job: "Author",
        name: "Adam Strass",
        discription:
          "Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.",
        images: [{ author: author1 }, { sign: sign1 }],
      },
      {
        id: 2,
        job: "Designer",
        name: "Jennifer Doe",
        discription:
          "Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.",
        images: [{ author: author2 }, { sign: sign2 }],
      },
      {
        id: 3,
        job: "Consultant",
        name: "James Coleman",
        discription:
          "Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.",
        images: [{ author: author3 }, { sign: sign3 }],
      },
      {
        id: 4,
        job: "Support",
        name: "Linda Heyes",
        discription:
          "Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.",
        images: [{ author: author4 }, { sign: sign4 }],
      },
    ],
  };
  render() {
    let { authors } = this.state;
    authors = authors.map((author) => {
      return (
        <div className="author" key={author.id}>
          <div className="author-img">
            <img
              src={author.images[0].author}
              alt=""
              className="author-image"
            />
            <div className="animate-plus">
              <span className="plus-item">+</span>
              <span className="plus-item">+</span>
              <span className="plus-item">+</span>
              <span className="plus-item">+</span>
              <span className="plus-item">+</span>
            </div>
            <img src={author.images[1].sign} alt="" className="author-sign" />
          </div>
          <div className="author-info">
            <div className="author-title">{author.job}</div>
            <div className="author-name">{author.name}</div>
            <div className="author-description">{author.discription}</div>
          </div>
        </div>
      );
    });
    return <div className="author-of-month">{authors}</div>;
  }
}
