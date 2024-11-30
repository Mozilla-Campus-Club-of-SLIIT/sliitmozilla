"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedButton from "./animatedBtn";
import { useDrawerContext } from "@/contextApi/drawerState";
import { motion } from "framer-motion";

function Header() {
  const [darkmode, setDarkmode] = useState(false);
  const router = useRouter();
  const { toggleDrawer } = useDrawerContext();
  const { open } = useDrawerContext();

  //Handle Home Click
  const handleHomeClick = () => {
    router.push("/");
  };

  //Handle About Click
  const handleAboutClick = () => {
    router.push("/about");
  };

  //Handle Event Click
  const handleEventClick = () => {
    router.push("/events");
  };

  //Handle Blog Click
  const handleBlogClick = () => {
    router.push("/blogs");
  };

  //Handle Board Click
  const handleBoardClick = () => {
    router.push("/board");
  };

  //Handle Contact us Click
  const handleContactUsClick = () => {
    router.push("/contactus");
  };

  //Toggle Darkmode
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className="sticky top-0">
      <nav className="flex items-center justify-between  bg-transparent bg-opacity-30 backdrop-blur-md p-2 ">
        <div className="w-auto h-auto">
          <Image
            src="/logo-color.png"
            width={100}
            height={100}
            alt="Mozilla Logo"
            onClick={handleHomeClick}
            className="cursor-pointer"
          />
        </div>
        {!open && (
          <div className="md:hidden  w-auto h-auto ">
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                title="menu"
                className="bg-customOrange/10 backdrop-blur-lg border border-white/30 flex text-black  items-center text-neutral-700 m-2 space-x-2 p-4 rounded-3xl shadow-lg hover:shadow-none"
                onClick={() => toggleDrawer(true)}
              >
                <FontAwesomeIcon icon={faBars} className="text-black" />
              </button>
            </motion.div>
          </div>
        )}
        {open && (
          <div className="md:hidden  w-auto h-auto ">
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                title="menu"
                className="bg-customOrange/10 backdrop-blur-lg border border-white/30 flex text-black  items-center text-neutral-700 m-2 space-x-2 p-4 rounded-3xl shadow-lg hover:shadow-none"
                onClick={() => toggleDrawer(false)}
              >
                <FontAwesomeIcon icon={faXmark} className="text-black" />
              </button>
            </motion.div>
          </div>
        )}
        <div className="hidden md:flex w-auto h-auto flex-row">
          <h1
            className="cursor-pointer text-black m-2 p-2 text-lg hover:underline decoration-orange-500 hover:text-orange-500 decoration-solid decoration-2"
            onClick={handleHomeClick}
          >
            Home
          </h1>
          <h1
            className="cursor-pointer text-black m-2 p-2 text-lg hover:underline decoration-orange-500 hover:text-orange-500 decoration-solid decoration-2"
            onClick={handleAboutClick}
          >
            About
          </h1>
          <h1
            className="cursor-pointer text-black m-2 p-2 text-lg hover:underline decoration-orange-500 hover:text-orange-500 decoration-solid decoration-2"
            onClick={handleEventClick}
          >
            Event
          </h1>
          <h1
            className="cursor-pointer text-black m-2 p-2 text-lg hover:underline decoration-orange-500 hover:text-orange-500 decoration-solid decoration-2"
            onClick={handleBlogClick}
          >
            Blogs
          </h1>
          <h1
            className="cursor-pointer text-black m-2 p-2 text-lg hover:underline decoration-orange-500 hover:text-orange-500 decoration-solid decoration-2"
            onClick={handleBoardClick}
          >
            Board
          </h1>
          <h1
            className="cursor-pointer text-black m-2 p-2 text-lg hover:underline decoration-orange-500 hover:text-orange-500 decoration-solid decoration-2"
            onClick={handleContactUsClick}
          >
            Contact
          </h1>
          <AnimatedButton
            name="Join SLIIT Mozilla"
            handleButtonClick={handleAboutClick}
          />
          <FontAwesomeIcon
            icon={darkmode ? faSun : faMoon} // Change icon based on dark mode status
            className="w-4 h-4 md:w-6 md:h-6 cursor-pointer text-black m-2 p-2"
            onClick={toggleDarkMode}
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
