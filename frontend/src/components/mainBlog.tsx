import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function MainBlog() {
  function handleMainBlogClick() {
    window.open("https://medium.com/@infosliitmcc", "_blank");
  }

  return (
    <div className="h-full md:h-96 w-full flex flex-row md:flex-nowrap flex-wrap justify-center items-center md:pl-12 md:pr-12 p-4  md:mb-0">
      <Image
        src="/blogDummy.jpg"
        width={100}
        height={100}
        alt="Mozilla Logo"
        className="cursor-pointer rounded-3xl h-60 md:h-80 w-full md:w-6/12"
      />
      <div className="h-60 md:h-80 w-full md:w-9/12  md:p-4 md:m-2 p-2 justify-center items-center justify-self-center content-center">
        <span
          className="bg-orange-100 text-customOrange text-sm md:text-md 
      me-2 px-2.5 py-1.5 rounded-3xl "
        >
          Latest
        </span>
        <h1 className="text-xl md:text-3xl text-black pl-1 pr-4 pt-4 pb-4 md:p-4">
          The Power of Open Source: How Mozilla Shaped the Web
        </h1>
        <p className="text-stone-400 text-sm md:text-lg">
          Dive into the profound influence of Mozilla in the open-source world
          and its pivotal role in shaping the modern web. This blog delves into
          Mozilla&apos;s historical impact, detailing how its unwavering
          commitment to open source principles has been instrumental in the
          evolution of today&apos;s web.
          <span
            className="text-purple-600 inline-flex items-center md:ml-2 md:mt-0 mt-2 font-semibold cursor-pointer hover:text-purple-300"
            onClick={handleMainBlogClick}
          >
            View More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </span>
        </p>
        <p className="text-black text-sm md:text-lg font-medium p-1">
          By: Sarah J.
        </p>
        <p className="text-stone-400 text-sm md:text-md p-1">Just Now</p>
      </div>
    </div>
  );
}

export default MainBlog;
