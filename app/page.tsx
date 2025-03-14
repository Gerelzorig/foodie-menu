"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import FoodSwiper from "./components/swiper";

export default function Home() {
  // const [activeButton, setActiveButton] = useState(menu[0].id);

  // const handleClick = (id) => {
  //   setActiveButton(id);
  //   const section = document.getElementById(id); // Use document.getElementById to get the target element
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     menu.forEach((section) => {
  //       const element = document.getElementById(section.id);
  //       const rect = element.getBoundingClientRect();

  //       if (
  //         rect.top <= window.innerHeight / 1.5 &&
  //         rect.bottom >= window.innerHeight / 3
  //       ) {
  //         setActiveButton(section.id);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  // }, [menu]);

  return (
    <div className="z-50 fixed h-screen w-screen min-h-screen min-w-screen flex flex-col md:flex-row">
      <div className="relative animate-slide-top w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-8 md:p-32 bg-catering">
        <div className="relative w-full h-full">
          <Link href="/catering">
            <Image
              src="/logos/catering.svg"
              layout="fill"
              objectFit="contain"
              blurDataURL="/logos/group.svg"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="relative animate-slide-bottom w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center p-8 md:p-32 bg-restaurant">
        <div className="relative w-full h-full">
          <Link href="/restaurant">
            <Image
              src="/logos/restaurant.svg"
              layout="fill"
              objectFit="contain"
              blurDataURL="/logos/group.svg"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      {/* <FoodSwiper /> */}
    </div>
  );
}
