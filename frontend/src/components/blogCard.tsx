import React, { useRef, useState } from "react";
import Image from "next/image";
import AnimatedButton from "./animatedBtn";

interface Props {
  category: string;
  image: string;
  title: string;
  description: string;
  author: string;
  time: string;
  url: string;
}

const BlogCard: React.FC<Props> = ({
  category,
  image,
  title,
  description,
  author,
  time,
  url
}) => {
  const [hoverMiddle, setHoverMiddle] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  //Handle Mouse mover for hover
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { clientX, clientY } = event;
      const { top, left, width, height } =
        cardRef.current.getBoundingClientRect();

      // Calculate the middle area (customize the size of the middle area as needed)
      const middleVerticalStart = top + height * 0.25;
      const middleVerticalEnd = top + height * 0.75;
      const middleHorizontalStart = left + width * 0.25;
      const middleHorizontalEnd = left + width * 0.75;

      if (
        clientX >= middleHorizontalStart &&
        clientX <= middleHorizontalEnd &&
        clientY >= middleVerticalStart &&
        clientY <= middleVerticalEnd
      ) {
        setHoverMiddle(true);
      } else {
        setHoverMiddle(false);
      }
    }
  };

  //Handle badge color
  const badgeColor = (() => {
    switch (category.toLowerCase()) {
      case "latest":
        return "bg-orange-100";
      case "learn":
        return "bg-blue-100";
      case "tips":
        return "bg-purple-100";
      case "tricks":
        return "bg-green-100";
      case "article":
        return "bg-orange-100";
      case "entertainment":
        return "bg-green-100";
      default:
        return "bg-gray-100";
    }
  })();

  //Handle text color in Badge
  const badgeTextColor = (() => {
    switch (category.toLowerCase()) {
      case "tips":
        return "text-purple-600";
      case "tricks":
        return "text-green-600";
      case "learn":
        return "text-blue-600";
      case "article":
        return "text-orange-600";
      case "entertainment":
        return "text-green-600";
      default:
        return "text-orange-600";
    }
  })();

  //Handle View Button Click
  const handleViewBtnClick = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    } else {
      console.error("Window object not available.");
      alert("An error occured")
    }
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverMiddle(false)}
      className="h-full m-8 flex w-96 flex-col flex-wrap rounded-3xl  bg-white overflow-y-auto relative group items-center justify-center"
    >
      <Image
        src={"/" + image}
        alt={title}
        width={350}
        height={200}
        className="rounded-xl self-center justify-self-center"
      />
      <span
        className={`${badgeColor} ${badgeTextColor} text-sm md:text-md
    me-2 px-2.5 py-1.5 rounded-3xl w-fit m-4 text-center  text-ellipsis  h-full`}
      >
        {category}
      </span>

      <h3 className="text-black font-montserrat mt-4 justify-center px-0.5 text-center text-xl">
        {" "}
        {title}
      </h3>
      <p className="text-stone-400 font-raleway ml-8 mr-4 mt-4 justify-center text-base ">
        {description}
      </p>
      <p className="text-black text-sm md:text-lg font-medium p-1">
          {author}
        </p>
        <p className="text-stone-400 text-sm md:text-md p-1">
          {time}
        </p>
      <div
        className={`absolute inset-0 w-full h-full ${
          hoverMiddle ? "opacity-100" : "opacity-0"
        } flex items-center justify-center bg-white bg-opacity-90 transition-opacity duration-300 ease-in-out`}
      >
        <AnimatedButton
          name="View Blog"
          handleButtonClick={() => handleViewBtnClick(url)}
        />
      </div>
    </div>
  );
};

export default BlogCard;
