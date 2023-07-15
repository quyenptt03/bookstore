import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services">
      <div className="services-wrap">
        <div className="services-icon">❦</div>
        <Title
          subtitle="Our Services"
          title="Aorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
        >
          <Link to="/" className="btn-primary">
            read more
          </Link>
        </Title>
      </div>
    </div>
  );
}
