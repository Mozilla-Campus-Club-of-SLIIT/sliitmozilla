import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
interface BoxProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  website?: string;
}
export default function Box({
  name,
  role,
  image,
  linkedin,
  website,
}: BoxProps) {
  return (
    <div className="w-72 h-72 bg-customOrange bg-opacity-5  rounded-xl shadow-lg hover:drop-shadow-none drop-shadow-lg shadow-slate-300 hover:shadow-none m-4 p-2">
      <div
        className={`backdrop-blur-lg flex flex-col m-4 w-10/12 md:w-auto h-2/5 flex-wrap  md:justify-around rounded-3xl relative`}
      >
        <Image
          src={`/board/${image}`}
          alt="User Image"
          width={200}
          height={200}
          className="object-fit w-full h-40 rounded-xl"
        />

        <div className="absolute -bottom-14 -right-2 border-2 border-white rounded-full overflow-hidden w-16 h-16 md:w-8 md:h-8 bg-white">
          <Image
            src="/logo-color.png"
            alt="Logo"
            width={400}
            height={400}
            className="object-fit w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-center text-2xl font-bold text-customOrange mt-8">
          {name}
        </h1>
        <p className="text-center text-sm text-gray-500">{role}</p>
        <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl text-blue-500"
            onClick={() => window.open(linkedin, "_blank")}
          />
          {website && (
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-2xl text-blue-500"
              onClick={() => window.open(website, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
