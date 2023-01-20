import React, { useEffect, useState, useLayoutEffect } from "react";
import { TeamCard } from "../components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Team({ team }) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  });

  console.log(width);

  return (
    <div className="min-h-screen overflow-x-hidden pb-10" id="team">
      <div className="lg:px-32 overflow-hidden w-full mt-32">
        <h1 className="font-inter text-5xl font-semibold dark:text-slate-200 px-4 text-gray-800">
          {team[0].title}
        </h1>
        <p className="text-lg lg:w-[40rem] font-inter mt-6 dark:text-slate-200 text-gray-800 px-4 indent-8 text-justify font-medium">
          {team[0].description}
        </p>

        <Carousel
          centerMode={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          centerSlidePercentage={width > 1400 ? 50 : 100}
          swipeable={true}
          showStatus={false}
          showIndicators={false}
          emulateTouch={true}
          showThumbs={false}
        >
          {team[0].member.map((item) => (
            <TeamCard
              key={item._key}
              image={item.profile}
              name={item.fullname}
              position={item.position}
              socialAccounts={item.links}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
