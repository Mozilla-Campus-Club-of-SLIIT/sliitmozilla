"use client";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import ContactAnimatedButton from "@/components/contactUs/contactAnimateBtn";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}


function Page() {
   // Yup Schema for Validation
   const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Formik Initial Values
  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  
    // Form Submit Handler
    const handleSubmit = (values: typeof initialValues) => {
      console.log("Form Submitted:", values);
      alert("Message Sent!");
    };

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
          Connect with our Student Outreach Team for academic and
          Mozilla-related support.
        </p>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-between w-full h-full p-4 ">
        <div className="flex flex-col flex-wrap items-center justify-between w-full md:w-2/5 h-full p-4 ">
          <div className="flex flex-col flex-wrap items-center justify-between w-full h-full bg-orange-200 bg-opacity-30 hover:bg-customOrange hover:bg-opacity-15 p-4 rounded-xl ">
            <Image
              alt="location"
              src={"/icons/pin.png"}
              width={20}
              height={100}
              style={{ width: "30px", height: "30px" }}
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=SLIIT+Malabe+Campus,+New+Kandy+Rd,+Malabe+10115"
              target="_blank"
              rel="noopener noreferrer"
              className="font-raleway ml-2 text-base text-black text-center"
            >
              <p>Mozilla Campus Club</p>
              <p>SLIIT Malabe Campus, New Kandy Rd,</p>
              <p>Malabe 10115</p>
            </a>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-between w-full h-full mt-4">
            <div className="flex flex-col flex-wrap items-center justify-between flex-grow bg-orange-200 bg-opacity-30 hover:bg-customOrange hover:bg-opacity-15 p-4 rounded-xl md:mr-4">
              <Image
                alt="email"
                src={"/icons/message.png"}
                width={20}
                height={100}
                style={{ width: "30px", height: "30px" }}
              />
              <a
                href="mailto:infosliitmcc@gmail.com"
                className="font-raleway ml-2 text-base text-black"
              >
                infosliitmcc@gmail.com
              </a>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-between flex-grow bg-orange-200 bg-opacity-30 hover:bg-customOrange hover:bg-opacity-15 p-4 rounded-xl">
              <Image
                alt="location"
                src={"/icons/phone.png"}
                width={20}
                height={100}
                style={{ width: "30px", height: "30px" }}
              />
              <a
                href="tel:0778829607"
                className="font-raleway ml-2 text-base text-black"
              >
                +94 76 852 5475
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-start justify-start w-full md:w-3/5 h-full p-4 bg-customOrange bg-opacity-15 text-black rounded-xl">
          <div className="flex flex-col items-start justify-start w-full h-auto p-4">
            <h1 className="text-3xl font-bold text-left text-black font-montserrat">
              Let&apos;s chat
            </h1>
            <p className="text-lg font-normal text-left text-customBrown font-montserrat">
              Fill up the form and our Team will get back to you
            </p>
            <p className="text-lg font-normal text-left text-customBrown font-montserrat">
              within 24 hours.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col items-start justify-start w-full h-auto p-4">
              <div className="flex flex-row flex-wrap items-center justify-center w-full h-auto">
                <div className="flex flex-col items-start justify-start w-full md:w-2/5 p-4 m-2 h-auto">
                <Field
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="w-full h-12 p-4  rounded-xl"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
                </div>
                <div className="flex flex-col items-start justify-start w-full md:w-2/5 p-4 m-2 h-auto">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full  h-12 p-4  rounded-xl"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
                </div> 
              </div>
                <div className="flex flex-col flex-wrap items-center justify-center w-full h-auto p-4">
                <Field
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full md:w-4/5 h-12 p-4 rounded-xl"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
                </div>
              <div className="flex flex-col flex-wrap items-center justify-center w-full h-auto p-4">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="w-full md:w-4/5 h-52 p-4  rounded-xl placeholder-top-left focus:outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center w-full h-auto p-4">
                <ContactAnimatedButton
                  name="Send"
                  handleButtonClick={() => {}}
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Page;
