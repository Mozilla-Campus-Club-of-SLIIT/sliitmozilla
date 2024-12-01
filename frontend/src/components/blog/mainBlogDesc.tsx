import Image from "next/image";
import React from "react";
import AnimatedBlogBtn from "./animatedBlogBtn";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function MainBlogDesc() {
  function handleMainBlogClick() {
    window.open("https://medium.com/@infosliitmcc", "_blank");
  }

  return (
    <div className="h-full w-screen flex flex-row flex-wrap flex-wrap justify-center items-center p-2 md:p-12 gap-4">
      <Image
        src="/blog/ai.jpg"
        width={100}
        height={100}
        alt="Mozilla Logo"
        className="cursor-pointer rounded-3xl h-60 md:h-80 w-full md:w-2/6 drop-shadow-2xl shadow-inner shadow-2xl shadow-slate-00 select-none"
        unoptimized
      />
      <hr className="hidden md:block w-1 h-80 bg-gray-400 mx-8" />
      <div className="block md:hidden w-80 h-[1px] bg-gray-400 mx-2 "/>

      <div className="h-auto md:h-80 w-full md:w-3/6 md:p-4 md:m-2 p-2 flex flex-col justify-center items-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg border border-white/20">
        <h1 className="text-xl md:text-3xl text-stone-500 pl-1 pr-4 pt-4 pb-4 md:p-4 leading-tight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl break-words select-none">
          Your Gateway to the Web&apos;s Future. Dive into the world of open
          source, technology, and innovation with our engaging articles and
          insights. Join our community in exploring the exciting possibilities
          of the web.
        </h1>
        <AnimatedBlogBtn
          name=" View Blogs"
          icon={faArrowRight}
          handleButtonClick={handleMainBlogClick}
        />
      </div>
    </div>
  );
}

export default MainBlogDesc;
