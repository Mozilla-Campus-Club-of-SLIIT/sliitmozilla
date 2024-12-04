"use client";
import Box from "@/components/board/box";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import Head from "next/head";
import React from "react";

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
      <div className="w-full h-min-screen m-4">
        <div className="flex flex-row flex-wrap w-full h-auto justify-center items-center p-4">
          <Box
            name="Sayuru Bopitiya"
            role="President"
            image="sayuru.jpeg"
            linkedin="https://www.linkedin.com/in/sayuru-bopitiya/"
            website="https://sayururehan.vercel.app/"
          />
          <Box
            name="Nethmi Nikeshala"
            role="Vice President"
            image="nethmi.jpeg"
            linkedin="https://www.linkedin.com/in/nethmi-nikeshala/"
            website="https://keshalahapuarachchi.github.io/NethmiPortfolio/"
          />
          <Box
            name="Getmi Rathnayaka"
            role="Secretary"
            image="gethmi.jpeg"
            linkedin="https://www.linkedin.com/in/gethmi-hasinika-rathnayaka/"
            website=""
          />
          <Box
            name="Danuja Jayasuriya"
            role="Dev Lead"
            image="danuja.jpeg"
            linkedin="https://www.linkedin.com/in/danuja-jayasuriya/"
            website="https://www.danuja.me"
          />
          <Box
            name="Jayadinu Dias"
            role="Treasurer"
            image="jayadinu.jpeg"
            linkedin="https://www.linkedin.com/in/jayadinu-dias/"
            website=""
          />
          <Box
            name="Ravindu Dilusha"
            role="Editor"
            image="ravidu.jpeg"
            linkedin="https://www.linkedin.com/in/ravindu-dilusha/"
            website="https://ravindudilusha.vercel.app"
          />
          <Box
            name="Nowen Kottage"
            role="Event Coordinator"
            image="nowen.jpeg"
            linkedin="https://www.linkedin.com/in/nowen-kottage-aa9571211/"
            website="https://www.nowenkottage.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
