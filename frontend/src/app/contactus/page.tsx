"use client";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import React from "react";
import Head from "next/head";

function Page() {
  return (
    <div className="min-h-screen min-w-screen overflow-y-auto bg-slate-100 overflow-x-hidden bg-contact-us-bg bg-[80%] bg-no-repeat">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Drawer />
      <div className="flex flex-col items-start justify-start w-96 h-full p-4">
        <h1 className="text-5xl font-bold text-left text-customOrange font-montserrat">
          Contact Us
        </h1>
        <p className="text-lg font-normal text-left text-customBrown font-montserrat">
        Connect with our Student Outreach Team for academic and Mozilla-related support.
        </p>
      </div>
    </div>
  );
}

export default Page;
