/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React from "react";
import Head from "next/head";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import blogData from "@/data/blogs.json";
import BlogCard from "@/components/blog/blogCard";
import MainBlogDesc from "@/components/blog/mainBlogDesc";
import Footer from "@/components/footer";

function Page() {

  //All blogs
  const allBlogs = blogData.blogData;

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
      <div className="h-auto w-full flex flex-col justify-center items-center p-6">
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
      </div>
      <MainBlogDesc />
      <div className="h-60 md:h-auto  w-screen overscroll-contain flex flex-row animate-marquee space-x-4 hover:animate-none justify-start items-center overflow-x-auto overflow-y-hidden scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-customOrange scrollbar-track-slate-100 ">
        {allBlogs.map((blog) => (
          <div key={blog.id} className="flex-shrink-0">
            <BlogCard
              category={blog.category}
              image={blog.image}
              title={blog.title}
              url={blog.url}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
