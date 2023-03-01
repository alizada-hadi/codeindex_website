import React, { useState, useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { urlFor } from "../client";

export default function Team({ team }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  });

  return (
    <div className="pb-24 lg:pb-64 bg-[#F4F7FF] relative" id="Team">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center pt-32  space-y-4">
          <span className="text-[#3056D3] font-poppins">Our awesome Team</span>
          <h1 className=" font-bold text-4xl font-poppins">{team[0].title}</h1>
          <p className="max-w-5xl items-center mx-auto px-12 lg:px-0 text-[#637381] font-poppins">
            {team[0].description}
          </p>
        </div>
        <div className="flex pt-32 "></div>
        <Slider
          {...settings}
          className="pl-10 md:pl-16 lg:pl-0 overflow-hidden "
        >
          {team[0].member.map((item) => (
            <div
              key={item._key}
              className="flex justify-center mx-auto overflow-hidden"
            >
              {" "}
              <div className=" relative md:ml-0 px-5 rounded-lg">
                {" "}
                <div className="rounded-lg h-[330px] w-[270px] ">
                  <img
                    src={urlFor(item.profile)}
                    alt=""
                    className=" rounded-lg h-[330px] w-[270px] object-cover"
                  />
                  <div className="overflow-hidden absolute flex items-center flex-col w-[230px] z-50 h-[83px] left-[40px] bottom-5 text-[#212B36] py-2 rounded-lg bg-white shadow-md">
                    <div className="absolute object-cover">
                      <div className="w-[10rem]">
                        <h3 className="text-center py-1 text-[16px] font-bold font-poppins">
                          {item.fullname}
                        </h3>
                        <div className=" flex justify-center items-center space-x-4 text-[#3056D3] mx-auto">
                          <p className="text-gray ">{item.position}</p>
                        </div>
                      </div>

                      <div className="absolute -left-14 -bottom-5">
                        <img
                          src="images/team/Ellipse 2706.png"
                          className="h-10 "
                          alt=""
                        />
                      </div>
                      <div className="absolute -right-11 -top-2">
                        <img
                          src="images/team/Dotted Shape.png"
                          className="h-10 "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
