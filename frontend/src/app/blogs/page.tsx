/* eslint-disable @next/next/no-page-custom-font */
"use client";
import React from "react";
import Head from "next/head";
import Drawer from "@/components/drawer";
import Header from "@/components/header";
import blogData from "@/data/blogs.json";
import BlogCard from "@/components/blog/blogCard";
import MainBlogDesc from "@/components/blog/mainBlogDesc";

function Page() {
  // const [itemsPerPage, setItemsPerPage] = useState(6);

  //All blogs
  const allBlogs = blogData.blogData;

  //Use effect to limit the items rendered based on Page
  // useEffect(() => {
  //   const handleResize = () => {
  //     setItemsPerPage(window.innerWidth < 768 ? 3 : 6);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="h-screen w-screen overflow-y-auto bg-slate-100 overflow-x-hidden">
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
      <div className="h-60 md:h-80 w-auto md:p-4 md:m-2 p-2 flex flex-row animate-marquee space-x-4 justify-center items-center hover:animate-none overflow-x-auto overflow-y-hidden">
        {/* {allBlogs.slice(0, itemsPerPage).map((blog) => ( */}
        {allBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            category={blog.category}
            image={blog.image}
            title={blog.title}
            url={blog.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
