import React from "react";
import Title from "./Title";
import EventCard from "./EventCard";

export default function BookPromotion() {
  return (
    <div className="book-promotion">
      <Title
        subtitle="Events"
        title="Book promotion"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ></Title>
      <div className="event-cards-wrapper">
        <EventCard
          date="08.04.2020"
          location="La, California"
          title="Festival of Books"
        />
        <EventCard
          date="08.25.2020"
          location="Paris, France"
          title="Book Signing"
        />
        <EventCard
          date="08.26.2020"
          location="Washington, Us"
          title="Book Fair"
        />
        <EventCard
          date="08.31.2020"
          location="Madrid, Spain"
          title="Promotion Book"
        />
      </div>
    </div>
  );
}
