import React from "react";
import Image from "next/image";
// import { Button } from '@/components/ui/button';
interface Props {
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

const EventCard: React.FC<Props> = ({
  image,
  title,
  description,
  date,
  location,
}) => {
  return (
    <div className="h-500 m-4 flex w-80 flex-col rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg  bg-white">
      <Image src={"/" + image} alt={title} width={350} height={200} />
      <h3 className="text-black font-montserrat mt-4 justify-center px-0.5 text-center text-xl">
        {" "}
        {title}
      </h3>
      <div className="text-black mt-4 flex flex-row items-center">
        <div className="ml-8 mr-4 flex flex-row items-center justify-center">
          <Image
            alt="location"
            src={"/calendar-icon.png"}
            width={20}
            height={100}
          />
          <p className="font-raleway ml-2 text-base">{date}</p>
        </div>
        <div className="ml-8 mr-4 flex flex-row items-center justify-center">
          <Image
            alt="location"
            src={"/location-icon.png"}
            width={20}
            height={100}
          />
          <p className="font-raleway ml-2 text-base">{location}</p>
        </div>
      </div>
      <p className="text-black font-raleway ml-8 mr-4 mt-4 justify-center text-base">
        {description}
      </p>
      <button className='bg-customOrange hover:bg-orange-400 font-raleway mx-auto mb-4 mt-4 h-12 w-52 rounded-lg bg-orange text-base font-bold text-white'>
        View More
      </button>
    </div>
  );
};

export default EventCard;
