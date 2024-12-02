import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../css/eventCaro.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import eventCaroData from "@/data/eventsCaro.json";
import AnimatedButton from "../animatedBtn";

function Carousel() {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    swiper: unknown,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  //Handle View Button Click
  const handleViewBtnClick = (url: string) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    } else {
      console.error("Window object not available.");
      alert("An error occured");
    }
  };

  return (
    <div className="w-full h-96">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {eventCaroData.eventCaroData.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="relative w-full h-96">
              <Image
                src={`/event/${event.image}`}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                unoptimized
                className="absolute inset-0"
              />
              <div className="absolute right-4 top-4 bg-orange-400 bg-opacity-30 p-4 rounded-xl text-white max-w-md p-2">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p className="text-sm mt-2">{event.description}</p>
                <div className="text-black mt-4 flex flex-row items-center w-full justify-center">
                  <div className="flex items-center gap-x-2 m-2 text-white">
                    <Image
                      alt="calendar"
                      src="/calendar-icon.png"
                      width={20}
                      height={20}
                      unoptimized
                      style={{ width: "30px", height: "30px" }}
                    />
                    <p className="text-sm">{event.date}</p>
                  </div>
                  <div className="flex items-center gap-x-2 m-2 text-white">
                    <Image
                      alt="location"
                      src="/location-icon.png"
                      width={20}
                      height={20}
                      unoptimized
                      style={{ width: "20px", height: "30px" }}
                    />
                    <p className="text-sm">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <AnimatedButton
                    name="View More"
                    handleButtonClick={() =>
                      handleViewBtnClick("www.apple.com")
                    }
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
