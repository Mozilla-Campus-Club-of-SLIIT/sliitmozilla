/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React from "react";
import Head from "next/head";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import Image from "next/image";

function Page() {
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
      <div className="h-auto w-full flex flex-row flex-wrap justify-around items-center p-6">
        <Image
          src="/about/fox.png"
          alt="About"
          width={300}
          height={500}
          className="object-cover "
        />
        <h1 className="font-montserrat text-customOrange text-2xl md:text-5xl font-bold">
          Mozilla Campus Club Of SLIIT
        </h1>
      </div>
      <div className="h-auto w-full ">
        <Image
          src="/about/dotUp1.png"
          alt="About"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="h-auto w-full ">
        <Image
          src="/about/dotDown.png"
          alt="About"
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="h-auto w-full flex flex-row flex-wrap justify-around items-center ">
        <h1 className="font-montserrat text-black text-2xl md:text-5xl font-bold">
          About Us
        </h1>
      </div>
      <div className="flex items-center justify-center m-2">
        <h1 className="font-montserrat text-orange-300 text-2xl md:text-5xl font-bold">
          &ldquo;
        </h1>
        <h1 className="font-montserrat text-customOrange text-2xl md:text-5xl font-bold">
          Something here to showcase
        </h1>
        <h1 className="font-montserrat text-orange-300 text-2xl md:text-5xl font-bold">
          &rdquo;
        </h1>
      </div>
      <div className="flex items-center justify-center m-2">
        <p className="font-montserrat text-black text-lg md:text-2xl font-bold m-4 p-4 text-center">
          Educating and promoting groups and amplifying and advocating the
          message of the FOSS ideology to achieve software independence for all
          SLIIT FOSS enthusiasts.
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-full relative border-b">
        <div className="flex flex-col items-center justify-center m-2 w-full h-72 md:h-96 absolute z-10 text-center bg-white/10 backdrop-blur-xl">
          <h1 className="font-montserrat text-black text-2xl md:text-5xl font-bold">
            Our Mission
          </h1>
          <p className="font-montserrat text-black text-lg md:text-2xl font-bold m-4 p-4">
            Educating and promoting groups and amplifying and advocating the
            message of the FOSS ideology to achieve software independence for
            all SLIIT FOSS enthusiasts.
          </p>
        </div>
        <Image
          src="/about/mission.png"
          alt="Mission"
          width={300}
          height={500}
          className="object-fit w-full h-72 md:h-96"
          unoptimized
        />
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-full relative border-b">
        <div className="flex flex-col items-center justify-center m-2 w-full h-72 md:h-96 absolute z-10 text-center bg-white/10 backdrop-blur-xl">
          <h1 className="font-montserrat text-black text-2xl md:text-5xl font-bold">
            Our Vision
          </h1>
          <p className="font-montserrat text-black text-lg md:text-2xl font-bold m-4 p-4">
            Support and inspire the global community on behalf of Free and Open
            Source Applications throughout the path to reach the optimum
            standard of technology!
          </p>
        </div>
        <Image
          src="/about/vision.png"
          alt="Vision"
          width={300}
          height={500}
          className="object-fit w-full h-72 md:h-96"
          unoptimized
        />
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-full relative border-b">
        <div className="flex flex-col items-center justify-center m-2 w-full h-72 md:h-96 absolute z-10 text-center bg-white/10 backdrop-blur-xl">
          <h1 className="font-montserrat text-black text-2xl md:text-5xl font-bold">
            Our Strategy
          </h1>
          <p className="font-montserrat text-black text-lg md:text-2xl font-bold m-4 p-4">
            Support FOSS related projects and communities in Sri Lanka in
            infrastructure and advisory
          </p>
        </div>
        <Image
          src="/about/strategy.png"
          alt="Strategy"
          width={300}
          height={500}
          className="object-fit w-full h-72 md:h-96"
          unoptimized
        />
      </div>
    </div>
  );
}

export default Page;
