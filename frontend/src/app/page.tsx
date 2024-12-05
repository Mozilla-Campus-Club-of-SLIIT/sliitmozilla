/* eslint-disable @next/next/no-page-custom-font */
"use client";
import AnimatedButton from "@/components/animatedBtn";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import LatestBlog from "@/components/home/latestBlog";
import PastEvents from "@/components/home/pastEvents";
import TechSessions from "@/components/home/techSessions";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HomeAnibtn from "@/components/home/homeAnibtn";
import HomeFooter from "@/components/homeFooter";

interface FormValues {
  email: string;
}

function Page() {
  const router = useRouter();

  // Yup Schema for Validation
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // Formik Initial Values
  const initialValues: FormValues = {
    email: "",
  };

  // Form Submit Handler
  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form Submitted:", values);
    alert("You have subscribed to our newsletter!");
  };

  const handleMemberClick = () => {
    router.push("/contactus");
  };
  return (
    <div className="h-auto min-w-screen overflow-y-auto bg-slate-100 overflow-x-hidden">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Drawer />
      <div className="flex flex-col items-center justify-center m-2 p-1.5 w-full h-auto md:h-96 text-center">
        <h1 className="font-montserrat text-black text-2xl md:text-5xl font-bold">
          Mission-driven. People-powered.
        </h1>
        <p className="font-zilla text-black text-lg md:text-2xl  m-4 p-4 w-4/5">
          The Mozilla Campus Club of SLIIT believes in making the internet a
          healthier, happier place for everyone. The health of the internet and
          online life is why we exist.
        </p>
        <AnimatedButton
          name="Become a member"
          handleButtonClick={handleMemberClick}
        />
      </div>
      <div className="flex flex-row items-center justify-center w-full h-16 md:h-16 text-center bg-customOrange overflow-hidden">
        <div className="flex flex-row items-center justify-start space-x-8 animate-marquee">
          <div className="flex flex-row items-center mr-96">
            <Image
              src="/home/whiteIcon.png"
              width={50}
              height={50}
              alt="Mozilla Logo"
              unoptimized
              className="cursor-pointer object-contain mr-2"
            />
            <p className="font-zilla text-black text-lg md:text-2xl text-white font-bold text-center whitespace-nowrap">
              Code n&apos; Coffee Tech Session Episode 1: Clean Code by Software
              Engineer
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              src="/home/whiteIcon.png"
              width={50}
              height={50}
              alt="Mozilla Logo"
              unoptimized
              className="cursor-pointer object-contain mr-2"
            />
            <p className="font-zilla text-black text-lg md:text-2xl text-white font-bold text-center whitespace-nowrap">
              Quarterly Magazine Edition 1: August by the Editorial team
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-2 w-full h-auto md:h-auto text-center">
        <h1 className="font-montserrat text-black text-2xl md:text-5xl font-bold">
          Areas of Focus
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center space-x-4 w-full h-auto m-4 p-2">
          <div className="flex flex-col items-center justify-center w-full md:w-2/6 h-auto">
            <Image
              src="/home/people.png"
              width={50}
              height={50}
              alt="People Icon"
              unoptimized
              className="cursor-pointer object-contain mr-2"
            />
            <h1 className="font-inter text-black text-2xl md:text-3xl font-bold">
              Community Building
            </h1>
            <p className="font-inter text-black text-lg md:text-2xl  m-4 p-4 w-4/5">
              lorem ipsum doler sit lorem ipsum doler sit lorem ipsum doler sit
              lorem ipsum doler sit
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-2/6 h-auto">
            <Image
              src="/home/googleCode.png"
              width={50}
              height={50}
              alt="Code Icon"
              unoptimized
              className="cursor-pointer object-contain mr-2"
            />
            <h1 className="font-inter text-black text-2xl md:text-3xl font-bold">
              Build the web
            </h1>
            <p className="font-inter text-black text-lg md:text-2xl  m-4 p-4 w-4/5">
              lorem ipsum doler sit lorem ipsum doler sit lorem ipsum doler sit
              lorem ipsum doler sit
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-2/6 h-auto">
            <Image
              src="/home/commercial.png"
              width={50}
              height={50}
              alt="Commercial Icon"
              unoptimized
              className="cursor-pointer object-contain mr-2"
            />
            <h1 className="font-inter text-black text-2xl md:text-3xl font-bold">
              Community Education
            </h1>
            <p className="font-inter text-black text-lg md:text-2xl  m-4 p-4 w-4/5">
              lorem ipsum doler sit lorem ipsum doler sit lorem ipsum doler sit
              lorem ipsum doler sit
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center m-2 w-full h-auto md:h-auto text-center">
        <Image
          src="/home/masscot.jpg"
          width={500}
          height={500}
          alt="Hero Image"
          unoptimized
          className="cursor-pointer object-contain mr-2 mb-2 md:mb-0 rounded-xl select-none pointer-events-none"
        />

        <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-1/2">
          <h1 className="font-zilla text-customOrange text-2xl md:text-5xl font-bold">
            Hello future Mozillians!
          </h1>
          <p className="font-inter text-black text-lg md:text-2xl  m-4 p-4 w-full md:w-4/5">
            Im Moxy, the mascot of the Mozilla Campus Club of SLIIT. Let&apos;s
            take a walk through the
          </p>
        </div>
      </div>
      <PastEvents />
      <a
        className="font-inter text-blue-400 text-sm  m-4 p-4 w-full flex items-center justify-center decoration-solid decoration-blue-400 decoration-4"
        href="https://www.youtube.com/@mozillacampusclubofsliit2158"
      >
        Read more about SLIIT Mozilla&apos;s Past Events
      </a>
      <TechSessions />
      <a
        className="font-inter text-blue-400 text-sm  m-4 p-4 w-full flex items-center justify-center decoration-solid decoration-blue-400 decoration-4"
        href="https://www.youtube.com/@mozillacampusclubofsliit2158"
      >
        Read more about SLIIT Mozilla&apos;s Tech Sessions
      </a>
      <LatestBlog />
      <a
        className="font-inter text-blue-400 text-sm  m-4 p-4 w-full flex items-center justify-center decoration-solid decoration-blue-400 decoration-4"
        href="https://www.youtube.com/@mozillacampusclubofsliit2158"
      >
        Read more about SLIIT Mozilla&apos;s Blogs
      </a>
      <div className="flex flex-row flex-wrap justify-around items-center w-full relative border-b h-auto bg-home-bg m-2">
        <div className="flex flex-col items-center justify-center  w-full h-full  text-center bg-slate/10 backdrop-blur-xl">
          <h1 className="font-montserrat text-white text-3xl md:text-3xl font-bold">
            <span className="bg-black text-white px-1">
              Get (great!) Mozilla news
            </span>
          </h1>
          <p className="font-inter text-black text-lg md:text-2xl  m-4 p-4">
            Subscribe to receive our newsletters to be informed on everything
            about SLIIT Mozilla!
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col items-start justify-start w-full h-auto p-4">
              <div className="flex flex-col flex-wrap items-center justify-center w-full h-auto">
                <div className="flex flex-col items-center justify-center w-full md:w-2/5 p-4 m-2 h-auto">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full h-12 p-4 rounded-xl text-customOrange"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm text-center mt-4"
                  />
                </div>
                <HomeAnibtn name="Send" handleButtonClick={() => {}} />
              </div>
              <p className="font-inter text-black text-sm  md:m-4 p-4 w-full flex items-center justify-center ">
                We will only send you SLIIT Mozilla related information.
              </p>
            </Form>
          </Formik>
        </div>
      </div>
      <HomeFooter/>
    </div>
  );
}

export default Page;
