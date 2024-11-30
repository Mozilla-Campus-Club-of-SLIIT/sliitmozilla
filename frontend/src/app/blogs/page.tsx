/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import AnimatedButton from "@/components/animatedBtn";
import MainBlog from "@/components/mainBlog";
import blogData from "@/data/blogs.json";
import BlogCard from "@/components/blogCard";

function Page() {
  const [itemsPerPage, setItemsPerPage] = useState(6);

  //Use effect to limit the items rendered based on Page
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 3 : 6);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //All blogs
  const allBlogs = blogData.blogData;

  //Function for View All
  function handleViewAllClick() {
    window.open("https://medium.com/@infosliitmcc", "_blank");
  }

  return (
    <div className="h-screen w-screen bg-white overflow-auto">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Drawer />
      <div className="h-auto w-full flex flex-col justify-center items-center p-12">
        <h1 className="font-montserrat text-customBrown text-2xl md:text-5xl font-bold">
          Mozilla Campus Club
        </h1>
        <div className="flex items-center justify-center m-2">
          <h1 className="font-montserrat text-orange-300 text-2xl md:text-5xl font-bold">
            &ldquo;
          </h1>
          <h1 className="font-montserrat text-customOrange text-2xl md:text-5xl font-bold">
            Blog
          </h1>
          <h1 className="font-montserrat text-orange-300 text-2xl md:text-5xl font-bold">
            &rdquo;
          </h1>
        </div>
        <p className="text-center text-stone-400 p-4 flex items-center justify-center text-sm md:text-2xl">
          Your Gateway to the Web&apos;s Future. Dive into the world of open
          source, technology, and innovation with our engaging articles and
          insights. Join our community in exploring the exciting possibilities
          of the web.
        </p>
        <AnimatedButton
          name=" View all "
          handleButtonClick={handleViewAllClick}
        />
      </div>
      <MainBlog />
      <div className="flex flex-row flex-wrap items-center justify-center ">
        {allBlogs.slice(0, itemsPerPage).map((blog) => (
          <BlogCard
            key={blog.id}
            category={blog.category}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            time={blog.time}
            url={blog.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
