import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="w-full h-auto bg-slate-100">
      <div className="flex flex-row flex-wrap items-center justify-between w-full h-auto p-4">
        <Image
          alt="mozillaLogo"
          src={"/logo-color.png"}
          width={100}
          height={100}
          className="w-30 h-30 mr-2"
        />
        <div className="flex flex-row flex-wrap items-center justify-center w-auto h-auto">
          <nav className="flex flex-col items-center justify-center w-auto h-auto">
            <a
              href="https://www.mozilla.org/en-US/about/"
              className="text-lg font-inter text-center text-black font-consolas w-80 mt-2 mb-2"
            >
              HOME
            </a>
            <a
              href="https://www.mozilla.org/en-US/contribute/"
              className="text-lg font-inter text-center text-black font-consolas w-80 mt-2 mb-2"
            >
              ABOUT US
            </a>
            <a
              href="https://www.mozilla.org/en-US/contact/"
              className="text-lg font-inter text-center text-black font-consolas w-80 mt-2 mb-2"
            >
              BLOG
            </a>
          </nav>
          <nav className="flex flex-col items-center justify-center w-auto h-auto">
            <a
              href="https://www.mozilla.org/en-US/about/"
              className="text-lg font-inter text-center text-black font-consolas w-80 mt-2 mb-2"
            >
              BOARD
            </a>
            <a
              href="https://www.mozilla.org/en-US/contribute/"
              className="text-lg font-inter text-center text-black font-consolas w-80 mt-2 mb-2"
            >
              EVENT
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center w-auto h-auto">
          <p className="text-lg font-inter text-center text-black font-consolas w-80 mt-2 mb-2">
            BE THE FIRST TO HERE OUR LATEST CONTENT AND NEWS
          </p>
          <div className="relative w-80">
            <input
              type="text"
              className="w-full h-10 pl-3 pr-10 mb-2 border rounded"
              placeholder="example@email.com"
            />
            <button
              title="subscribe"
              className="absolute  h-10 right-0 top-0 h-full w-10 bg-customOrange text-white flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center md:justify-between w-full h-auto mb-2 ">
        <h1 className="text-lg font-inter text-center text-black font-bold w-80 mt-2 mb-2">
          Stay connected with anyone and anywhere
        </h1>
        <div className="flex flex-col flex-wrap items-center justify-center w-auto h-auto">
          <h1 className="text-md font-inter text-center text-black  w-80 mt-2 mb-2">
            WE ARE IN
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center w-auto h-auto">
            <Image
              alt="facebook"
              src={"/icons/facebook_orange.png"}
              width={50}
              height={100}
              className="w-30 h-30 mr-2"
              onClick={() => {}}
            />
            <Image
              alt="twitter"
              src={"/icons/twitter_orange.png"}
              width={50}
              height={100}
              className="w-30 h-30 mr-2"
              onClick={() => {}}
            />
            <Image
              alt="linkedln"
              src={"/icons/linkedln_orange.png"}
              width={50}
              height={100}
              className="w-30 h-30 mr-2"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center md:justify-between w-full h-auto p-4 bg-customOrange">
        <Image
          alt="mozillaLogo"
          src={"/home/whiteIcon.png"}
          width={40}
          height={100}
          className="w-30 h-30 mr-2"
        />
        <a
          href="https://www.mozilla.org/en-US/about/"
          className="text-lg font-inter text-center text-white font-consolas w-80 mt-2 mb-2"
        >
          © 2024 Mozilla Corporation. All rights reserved.
        </a>
        <a
          href="https://www.mozilla.org/en-US/about/"
          className="text-lg font-inter text-center text-white font-consolas w-80 mt-2 mb-2"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.mozilla.org/en-US/about/"
          className="text-lg font-inter text-center text-white font-consolas w-80 mt-2 mb-2"
        >
          TEARMS & CONDITIONS
        </a>
      </div>
    </div>
  );
}

export default Footer;
