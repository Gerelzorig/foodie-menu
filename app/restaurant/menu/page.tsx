"use client";
import React, { useEffect, useState } from "react";
import { MenuRestaurant as menu } from "@/src/config";
import { Button, Modal } from "antd";

const Menu = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

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

      <Button
        type="primary"
        className="bg-black dark:bg-black"
        onClick={showModal}
        style={{
          position: "fixed",
          top: 150,
          right: 20,
          zIndex: 1000,
          backgroundColor: "#000",
        }}
      >
        НЭМЭЛТ БҮТЭЭГДЭХҮҮН
      </Button>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="border border-white rounded-lg"
        styles={{
          content: { background: "#000" },
          header: { background: "#000" },
          body: { color: "#fff" },
          footer: { background: "#000" },
        }}
      >
        <p className="text-2xl mb-4">НЭМЭЛТ БҮТЭЭГДЭХҮҮН</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="text-lg">Cheese</div>
            <div className="text-sm">Бяслаг</div>
          </div>
          <div className="text-lg text-right">6000₮</div>
          <div className="flex flex-col">
            <div className="text-lg">Bacon</div>
            <div className="text-sm">Бяслаг</div>
          </div>
          <div className="text-lg text-right">6000₮</div>
          <div className="flex flex-col">
            <div className="text-lg">Pickling cucumber</div>
            <div className="text-sm">Дарсан өргөст хэмх</div>
          </div>
          <div className="text-lg text-right">3000₮</div>
          <div className="flex flex-col">
            <div className="text-lg">Tomato</div>
            <div className="text-sm">Улаан лооль</div>
          </div>
          <div className="text-lg text-right">3000₮</div>
          <div className="flex flex-col">
            <div className="text-lg">Egg</div>
            <div className="text-sm">Шарсан өндөг</div>
          </div>
          <div className="text-lg text-right">3000₮</div>
        </div>
      </Modal>

      {/* Content Section */}
      <div className="sm:col-span-8 col-span-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex flex-col w-full justify-center items-start">
            <div className="text-4xl w-full text-center font-bold mb-4">
              AUTUMN SPECIAL
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url("/main_dish/tommy_burger.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full aspect-[4/5] relative overflow-hidden mt-4"
          ></div>
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
