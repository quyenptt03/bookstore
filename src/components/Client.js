import React from "react";
import { Link } from "react-router-dom";
import client1 from "../images/client-1.png";
import client2 from "../images/client-2.png";
import client3 from "../images/client-3.png";
import client4 from "../images/client-4.png";
import client5 from "../images/client-5.png";
import client6 from "../images/client-6.png";

export default function Client() {
  return (
    <div className="client">
      <Link to="/">
        <div className="client-item">
          <img src={client1} alt="" />
        </div>
      </Link>
      <Link to="/">
        <div className="client-item">
          <img src={client2} alt="" />
        </div>
      </Link>
      <Link to="/">
        <div className="client-item">
          <img src={client3} alt="" />
        </div>
      </Link>
      <Link to="/">
        <div className="client-item">
          <img src={client4} alt="" />
        </div>
      </Link>
      <Link to="/">
        <div className="client-item">
          <img src={client5} alt="" />
        </div>
      </Link>
      <Link to="/">
        <div className="client-item">
          <img src={client6} alt="" />
        </div>
      </Link>
    </div>
  );
}
