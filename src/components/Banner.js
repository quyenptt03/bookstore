import React from "react";

export default function Banner({ children, title, subtitle, text }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
}
