import React from "react";
import loadingGif from "../images/gif/loading-spinner.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={loadingGif} alt=" " />
    </div>
  );
}
