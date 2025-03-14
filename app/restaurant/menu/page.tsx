"use client";
import React, { useEffect, useState } from "react";
import { Image } from "antd";
import { Tooltip } from "antd";
import { MenuRestaurant as menu } from "@/src/config";

const Menu = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (id) => {
    setActiveButton(id);
    const section = document.getElementById(id); // Use document.getElementById to get the target element
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = menu[0].id;

      menu.forEach((section) => {
        const element = document.getElementById(section.id);
        const rect = element.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 1.5 &&
          rect.bottom >= window.innerHeight / 3
        ) {
          currentSection = section.id;
        }
      });

      setActiveButton(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);

  return (
    <div className="pb-24 pt-16 text-white container mx-auto flex flex-col gap-4">
      {/* <div className="animate-slide-right fixed z-10 w-8 right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 items-center">
        {menu.map((category, i) => (
          <Tooltip key={i} placement="topLeft" title={category.title}>
            <div
              onClick={() => handleClick(category.id)}
              className={`${
                activeButton === category.id
                  ? "bg-orange-500 dark:bg-stone-400"
                  : "bg-primary dark:bg-stone-500"
              } w-8 h-8 p-2 cursor-pointer rounded-full overflow-hidden transition-all hover:scale-125`}
            >
              <img src={category.icon} alt="" />
            </div>
          </Tooltip>
        ))}
      </div> */}
      {menu.map((category, i) => (
        <div key={i} id={category.id} className="flex flex-col gap-4 mt-8">
          <div className="font-bold text-4xl">{category.title}</div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {category.foods.map((food, i) => (
              <div
                key={i}
                className="w-full flex flex-row justify-between rounded-lg overflow-hidden group"
              >
                {/* <div className="w-full h-80 relative overflow-hidden">
                  <Image src={food.path} className="w-full" />
                </div> */}
                <div className="flex flex-col">
                  <div className="text-2xl">{food.name}</div>
                  <div className="text-xs">
                    {food.description.map((description, i) => (
                      <div className="text-extralight" key={i}>
                        {description}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="font-bold text-lg">{food.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
