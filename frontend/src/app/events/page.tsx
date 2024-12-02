"use client";
import React, { useState, useEffect, useRef } from "react";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import Head from "next/head";
import eventData from "@/data/events.json";
import EventCard from "@/components/events/eventCard";
import Carousel from "@/components/events/carousel";



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
      
    </div>
  );
};

export default Page;
