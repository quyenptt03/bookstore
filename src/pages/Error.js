import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error404">
      <Banner
        title="404"
        subtitle="Page not found"
        text="Oops! The page you are looking for does not exist. It might have been moved or deleted."
      >
        <Link to="/" className="btn-primary">
          go to home
        </Link>
      </Banner>
    </div>
  );
}
