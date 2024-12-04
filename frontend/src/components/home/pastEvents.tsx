import React from "react";
import EventCard from "./eventCard";

function PastEvents() {
  return (
    <div className="flex flex-col items-center justify-center m-2 p-2 w-full h-auto md:h-auto text-center">
      <h1 className="font-montserrat text-customOrange text-2xl md:text-3xl font-bold">
        Past Events
      </h1>
      <div className="flex flex-row items-center justify-around space-x-4 w-full h-auto  p-2">
        <EventCard
          title="Docker 101: An Introduction to Docker"
          link="https://www.google.com"
          image="/blog/blogDummy.jpg"
        />
        <EventCard
          title="Docker 101: An Introduction to Docker"
          link="https://www.google.com"
          image="/blog/blogDummy.jpg"
        />
        <EventCard
          title="Docker 101: An Introduction to Docker"
          link="https://www.google.com"
          image="/blog/blogDummy.jpg"
        />
      </div>
    </div>
  );
}

export default PastEvents;
