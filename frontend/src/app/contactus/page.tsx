"use client";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import React from "react";
import Head from "next/head";

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
    </div>
  );
}

export default Page;
