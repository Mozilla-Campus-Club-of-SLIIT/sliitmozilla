import React from "react";
import { useRouter } from "next/navigation";
import { useDrawerContext } from "@/contextApi/drawerState";
import Image from "next/image";
import AnimatedButton from "./animatedBtn";

function Drawer() {
  const { toggleDrawer } = useDrawerContext();
  const router = useRouter();
  const { open } = useDrawerContext();

  const navigatePage = (path: string) => {
    router.push(path);
    toggleDrawer(false);
  };

  //Handle Home Click
  const handleHomeClick = () => {
    router.push("/");
  };

  //Handle About Click
  const handleAboutClick = () => {
    router.push("/about");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-white bg-opacity-50 backdrop-blur-lg border border-opacity-20 shadow-lg text-white transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out flex flex-col z-50`}
    >
      <div className="p-4 flex-grow">
        <div className="p-4 flex-grow flex flex-col items-center justify-center">
          <Image
            src="/logo-color.png"
            width={100}
            height={100}
            alt="Mozilla Logo"
            onClick={handleHomeClick}
            className="cursor-pointer"
          />
        </div>
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-customOrange hover:text-white  py-2 px-4 rounded"
          onClick={() => navigatePage("/home")}
        >
          Home
        </button>
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-customOrange  py-2 px-4 rounded hover:bg-customOrange hover:text-white"
          onClick={() => navigatePage("/about")}
        >
          About
        </button>
        <hr className="shadow-lg font-bold" />
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-customOrange  py-2 px-4 rounded hover:bg-customOrange hover:text-white"
          onClick={() => navigatePage("/events")}
        >
          Events
        </button>
        <hr className="shadow-lg font-bold" />
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-customOrange  py-2 px-4 rounded hover:bg-customOrange hover:text-white"
          onClick={() => navigatePage("/blogs")}
        >
          Blogs
        </button>
        <hr className="shadow-lg font-bold" />
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-customOrange  py-2 px-4 rounded hover:bg-customOrange hover:text-white"
          onClick={() => navigatePage("/contact")}
        >
          Contact
        </button>
        <hr className="shadow-lg font-bold" />
        <div className="flex justify-center">
        <AnimatedButton
          name="Join SLIIT Mozilla"
          handleButtonClick={handleAboutClick}
        />
        </div>
        <hr className="shadow-lg font-bold" />
      </div>
    </div>
  );
}

export default Drawer;
