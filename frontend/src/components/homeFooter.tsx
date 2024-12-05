import Image from "next/image";
import React from "react";

function HomeFooter() {
  return (
    <div className="w-full h-auto bg-slate-100">
      <div className="flex flex-col items-left justify-left w-full h-auto p-4">
        <Image alt="fossLogo" src={"/fossLogo.png"} width={80} height={100} />
        <p className="text-lg font-normal text-left text-slate-500 font-consolas w-80 mt-2 mb-2">
          Welcome to SLIIT FOSS community. We&apos;re a group of volunteers who
          believe in the usage of Free/Open Source Software (FOSS).
        </p>
        <p className="text-xl font-normal text-left text-black font-bold font-cabinet w-80 mb-2">
          CONNECT WITH US
        </p>
        <div className="flex flex-row items-left justify-left w-full h-auto">
          <Image
            alt="facebook"
            src={"/icons/facebook_black.png"}
            width={20}
            height={100}
            className="w-30 h-30 mr-2"
            onClick={() => {}}
            unoptimized
          />
          <Image
            alt="instagram"
            src={"/icons/instagram_black.png"}
            width={20}
            height={100}
            className="w-30 h-30 mr-2"
            onClick={() => {}}
            unoptimized
          />
          <Image
            alt="twitter"
            src={"/icons/twitter_black.png"}
            width={20}
            height={100}
            className="w-30 h-30 mr-2"
            onClick={() => {}}
            unoptimized
          />
          <Image
            alt="linkedln"
            src={"/icons/linkedln_black.png"}
            width={20}
            height={100}
            className="w-30 h-30 mr-2"
            onClick={() => {}}
            unoptimized
          />
          <Image
            alt="youtube"
            src={"/icons/youtube_black.png"}
            width={20}
            height={100}
            className="w-30 h-30 mr-2"
            onClick={() => {}}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
