"use client";
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { Tooltip } from "antd";

const Menu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
    const section = document.getElementById(id); // Use document.getElementById to get the target element
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
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
    <div className="pb-24 pt-16 text-white container mx-auto flex flex-col gap-4"></div>
  );
};

export default Menu;
