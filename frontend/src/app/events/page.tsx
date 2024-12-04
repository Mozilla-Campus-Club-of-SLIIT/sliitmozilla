/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React, { useState, useEffect } from "react";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import Head from "next/head";
import eventData from "@/data/events.json";
import EventCard from "@/components/events/eventCard";
import Carousel from "@/components/events/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/footer";

const Page: React.FC = () => {
  const [currentPageWebinar, setCurrentPageWebinar] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 2 : 3);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter events based on the search query
  const filteredEvents = eventData?.eventData.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  return (
    <div className="min-h-screen min-w-screen overflow-y-auto bg-slate-100 overflow-x-hidden">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Drawer />
      <Carousel />
      <div className="relative w-1/2 mx-auto my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 pr-4 rounded-xl focus:outline-none text-black cursor-pointer"
          placeholder="Search Event"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute top-3 left-3 text-customOrange"
        />
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center w-full">
        {filteredEvents
          ?.slice(
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
        filteredEvents?.length,
        currentPageWebinar,
        setCurrentPageWebinar
      )}
      <Footer />
    </div>
  );
};

export default Page;
