import React from "react";
import TechCard from "./techCard";

function LatestBlog() {
  return (
    <div className="flex flex-col items-center justify-center m-2 p-2 w-full h-auto md:h-auto text-center">
      <h1 className="font-montserrat text-customOrange text-2xl md:text-3xl font-bold">
        Latest Blogs
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-around space-x-4 w-full h-auto  p-2">
        <TechCard
          title="Docker 101: An Introduction to Docker"
          category="Tech"
          link="https://www.google.com"
          image="/blog/blogDummy.jpg"
        />
        <TechCard
          title="Docker 101: An Introduction to Docker"
          category="Ai"
          link="https://www.google.com"
          image="/blog/blogDummy.jpg"
        />
        <TechCard
          title="Docker 101: An Introduction to Docker"
          category="Tech"
          link="https://www.google.com"
          image="/blog/blogDummy.jpg"
        />
      </div>
    </div>
  );
}

export default LatestBlog;
