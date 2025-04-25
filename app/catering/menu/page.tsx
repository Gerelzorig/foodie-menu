"use client";
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { Tooltip } from "antd";
// import { MenuRestaurant as menu } from "@/src/config";

const Menu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
    const section = document.getElementById(id); // Use document.getElementById to get the target element
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      }); // Scroll to the section smoothly
    }
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let currentSection = menu[0].id;

  //     menu.forEach((section) => {
  //       const element = document.getElementById(section.id);
  //       const rect = element.getBoundingClientRect();

  //       if (
  //         rect.top <= window.innerHeight / 1.5 &&
  //         rect.bottom >= window.innerHeight / 3
  //       ) {
  //         currentSection = section.id;
  //       }
  //     });

  //     setActiveButton(currentSection);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [menu]);

  return (
    <div className="pb-24 pt-16 text-white container mx-auto grid grid-cols-12 p-2 gap-4">
      {/* Sticky Sidebar */}

      {/* <div className="animate-slide-left sticky top-32 self-start flex flex-col sm:col-span-4 col-span-4">
        {menu.map((category, i) => (
          <div
            key={i}
            onClick={() => handleClick(category.id)}
            className={`${
              activeButton === category.id
                ? "bg-stone-600 dark:bg-stone-600"
                : "bg-black dark:bg-black"
            } cursor-pointer text-sm p-2 rounded-md`}
          >
            {category.title}
          </div>
        ))}
      </div> */}

      <div className="sm:col-span-2 md:col-span-3 lg:col-span-4"></div>
      {/* Content Section */}
      <div className="sm:col-span-8 md:col-span-6 lg:col-span-4 col-span-12">
        <div className="pb-12 pt-12 container mx-auto">
          <div className="text-center text-3xl font-slogan">
            Чанар, Сэтгэл, Дурсамж
          </div>
        </div>
        <div className="text-right text-gray-100 mb-4">
          *Уг үнийн дүнд НӨАТ-ийн үнэ багтаагүй болно.
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/1.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/2.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/3.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/4.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/5.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/6.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/7.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/9.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/10.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/11.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/12.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/13.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/14.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/15.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/16.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/17.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/18.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/19.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/20.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/21.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/22.png"
            alt="swiper"
            preview={false}
          />
        </div>
        <div className="w-full aspect-[4/5] relative">
          <Image
            className="w-full"
            src="/catering/24.png"
            alt="swiper"
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
