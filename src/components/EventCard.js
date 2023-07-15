import React from "react";
import { Link } from "react-router-dom";
export default function EventCard({ date, location, title }) {
  return (
    <div className="event-card">
      <div className="event-data-and-location">
        <div className="event-date">{date}</div>
        <div className="event-separator">
          <span>/</span>
        </div>
        <div className="event-location">{location}</div>
      </div>
      <Link to="/">
        <div className="event-title">{title}</div>
      </Link>
      <div className="buy-tickets btn-primary">See Tickets</div>
    </div>
  );
}
