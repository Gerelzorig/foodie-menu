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
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      }); // Scroll to the section smoothly
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
    <div className="pb-24 pt-16 text-white container mx-auto grid grid-cols-12 p-2 gap-4">
      {/* Sticky Sidebar */}
      <div className="animate-slide-left sticky top-32 self-start flex flex-col sm:col-span-4 col-span-4">
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
      </div>

      {/* Content Section */}
      <div className="sm:col-span-8 col-span-8">
        <div>
          <div className="text-right text-gray-100 mb-4">
            *Уг үнийн дүнд НӨАТ-ийн үнэ багтаагүй болно.
          </div>
        </div>
        {menu.map((category, i) => (
          <div key={i} id={category.id} className="flex flex-col gap-4 mb-8">
            <div className="font-bold text-4xl">{category.title}</div>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
              {category.foods.map((food, i) => (
                <div
                  key={i}
                  className={`${
                    food.path ? "col-span-1" : "col-span-1 sm:col-span-2"
                  } w-full flex flex-row justify-between rounded-lg overflow-hidden group`}
                >
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center">
                      <div className="text-2xl">{food.name}</div>
                      <div className="font-bold text-lg">{food.price}</div>
                    </div>
                    <div className="text-xs">
                      {food.description.map((description, i) => (
                        <div className="text-extralight" key={i}>
                          {description}
                        </div>
                      ))}
                    </div>
                    {food.path && (
                      <div
                        style={{
                          backgroundImage: `url(${food.path})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="w-full sm:h-80 h-64 relative overflow-hidden mt-4"
                      ></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
