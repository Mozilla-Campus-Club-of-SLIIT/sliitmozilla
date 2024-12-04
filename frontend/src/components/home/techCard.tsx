import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedButton from "../animatedBtn";

interface TechCardProps {
  title: string;
  category: string;
  link: string;
  image: string;
}

function TechCard({ title, category, link, image }: TechCardProps) {
    const [hoverMiddle, setHoverMiddle] = useState(false);
    const [fontSize, setFontSize] = useState("1rem");
    const cardRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

      //Handle badge color
  const badgeColor = (() => {
    switch (category.toLowerCase()) {
      case "latest":
        return "bg-orange-100";
      case "learn":
        return "bg-blue-100";
      case "tech":
        return "bg-purple-100";
      case "ai":
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
      case "tech":
        return "text-orange-600";
      case "ai":
        return "text-green-600";
      default:
        return "text-orange-600";
    }
  })();

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.contentRect.width < 200) {
              setFontSize("0.8rem");
            } else if (entry.contentRect.width < 300) {
              setFontSize("1rem");
            } else {
              setFontSize("1.25rem");
            }
          }
        });
    
        if (titleRef.current) {
          observer.observe(titleRef.current);
        }
    
        return () => {
          observer.disconnect();
        };
      }, []);
    
      //Handle View Button Click
      const handleViewBtnClick = (url: string) => {
        if (typeof window !== "undefined") {
          window.open(url, "_blank");
        } else {
          console.error("Window object not available.");
          alert("An error occured");
        }
      };
    
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
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverMiddle(false)}
      className=" h-auto m-8 flex w-72 flex flex-wrap rounded-xl  bg-customOrange bg-opacity-5 overflow-y-auto relative group select-none"
    >
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="h-28 md:h-40  w-72  rounded-t-xl self-center justify-self-center "
        />
             <span
          className={`${badgeColor} ${badgeTextColor} text-sm md:text-md absolute bottom-0 right-0 me-2 px-2.5 py-1.5 rounded-3xl w-fit m-4 text-center text-ellipsis h-auto`}
        >
          {category}
        </span>
      </div>

      <h3
        ref={titleRef}
        className="text-black font-montserrat justify-center px-0.5 text-center"
        style={{ fontSize }}
      >
        {" "}
        {title}
      </h3>
      <div
        className={`absolute inset-0 w-full h-full ${
          hoverMiddle ? "opacity-100" : "opacity-0"
        } flex items-center justify-center bg-white bg-opacity-90 transition-opacity duration-300 ease-in-out`}
      >
        <AnimatedButton
          name="Read more"
          handleButtonClick={() => handleViewBtnClick(link)}
        />
      </div>
    </div>
  );
}

export default TechCard;
