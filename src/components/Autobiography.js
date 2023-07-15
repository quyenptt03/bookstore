import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import aut1 from "../images/aut1.jpg";
import aut2 from "../images/aut2.jpg";
import aut3 from "../images/aut3.png";
import aut4 from "../images/aut4.png";
import aut5 from "../images/aut5.png";
import aut6 from "../images/aut6.png";
import aut7 from "../images/aut7.jpg";
import aut8 from "../images/aut8.jpg";
import aut9 from "../images/aut9.png";
import aut10 from "../images/aut10.png";
import aut11 from "../images/aut11.png";
import aut12 from "../images/aut12.png";

export default function Autobiography() {
  return (
    <div className="autobiography-wrapper">
      <div className="autobiography">
        <div className="autobiography-info">
          <Title
            subtitle="Autobiography"
            title="This month's guest host"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          >
            <Link to="/" className="btn-primary">
              read more
            </Link>
          </Title>
        </div>
        <div className="autobiography-images">
          <div className="person-img">
            <img src={aut1} alt="" width="369" />
          </div>
          <div className="landscape-img">
            <img src={aut2} alt="" width="332" />
          </div>
          <div className="aut-bg">
            <img src={aut3} alt="" width="285" />
          </div>
          <div className="aut-text">
            <img src={aut4} alt="" width="105" />
          </div>
          <div className="aut-shape">
            <img src={aut5} alt="" width="248" />
          </div>
          <div className="aut-symbolize">
            <img src={aut6} alt="" width="179" />
          </div>
        </div>
      </div>
      <div className="autobiography">
        <div className="autobiography-info">
          <Title
            subtitle="Autobiography"
            title="Travelog of the year"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
          >
            <Link to="/" className="btn-primary">
              read more
            </Link>
          </Title>
        </div>
        <div className="autobiography-images">
          <div className="person-img">
            <img src={aut7} alt="" width="234" />
          </div>
          <div className="landscape-img">
            <img src={aut8} alt="" width="410" />
          </div>
          <div className="aut-bg">
            <img src={aut9} alt="" width="279" />
          </div>
          <div className="aut-text">
            <img src={aut10} alt="" width="207" />
          </div>
          <div className="aut-shape">
            <img src={aut11} alt="" width="397" />
          </div>
          <div className="aut-symbolize">
            <img src={aut12} alt="" width="241" />
          </div>
        </div>
      </div>
    </div>
  );
}
