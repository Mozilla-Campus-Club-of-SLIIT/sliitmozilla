"use client";
import React, { useState, useEffect } from "react";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import eventData from "@/data/events.json";
import EventCard from "@/components/eventCard";

const Page: React.FC = () => {
  const [currentPageUpcoming, setCurrentPageUpcoming] = useState(0);
  const [currentPagePast, setCurrentPagePast] = useState(0);
  const [currentPageWebinar, setCurrentPageWebinar] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 2 : 4);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPagination = (
    totalItems: number,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return (
      <div className="pagination flex justify-center space-x-2 my-4">
        <button
          title="previous"
          disabled={currentPage === 0}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="text-black hover:text-customOrange"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 ${
              currentPage === index
                ? "text-white bg-customOrange rounded-full"
                : "bg-orange-200 text-black rounded-full"
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          title="Next"
          disabled={currentPage === totalPages - 1}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="text-black hover:text-customOrange"
        >
          Next
        </button>
      </div>
    );
  };

  const upcomingEvents = eventData.eventData.filter(
    (event) => event.category === "upcomingevent"
  );
  const pastEvents = eventData.eventData.filter(
    (event) => event.category === "pastevent"
  );
  const webinar = eventData.eventData.filter(
    (event) => event.category === "webinar"
  );

  return (
    <div className="h-screen w-screen bg-white">
      <Header />
      <Drawer />
      <div className="bg-white">
        <h1 className="font-montserrat mb-4 mt-8 justify-center text-center text-4xl md:text-7xl font-bold text-customOrange">
          Upcoming Events
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {upcomingEvents
            .slice(
              currentPageUpcoming * itemsPerPage,
              (currentPageUpcoming + 1) * itemsPerPage
            )
            .map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
              />
            ))}
        </div>
        {renderPagination(
          upcomingEvents.length,
          currentPageUpcoming,
          setCurrentPageUpcoming
        )}

        <h2 className="text-black font-montserrat mb-4 mt-8 justify-center text-center text-4xl  md:text-5xl font-bold">
          Past Events
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {pastEvents
            .slice(
              currentPagePast * itemsPerPage,
              (currentPagePast + 1) * itemsPerPage
            )
            .map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
              />
            ))}
        </div>
        {renderPagination(
          pastEvents.length,
          currentPagePast,
          setCurrentPagePast
        )}

        <h2 className="text-black font-montserrat mb-4 mt-8 justify-center text-center text-4xl  md:text-5xl font-bold">
          Webinars
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {webinar
            .slice(
              currentPageWebinar * itemsPerPage,
              (currentPageWebinar + 1) * itemsPerPage
            )
            .map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
              />
            ))}
        </div>
        {renderPagination(
          webinar.length,
          currentPageWebinar,
          setCurrentPageWebinar
        )}
      </div>
    </div>
  );
};

export default Page;
