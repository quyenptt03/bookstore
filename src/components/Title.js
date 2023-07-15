import React from "react";

export default function Title({ subtitle, title, text, children }) {
  return (
    <div className="title-inner">
      <h6 className="subtitle">{subtitle}</h6>
      <h2 className="page-title">{title}</h2>
      <p className="text">{text}</p>
      {children}
    </div>
  );
}
