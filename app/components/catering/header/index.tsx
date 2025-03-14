"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../../theme";
import { useTheme } from "@/app/context/ThemeContext";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Drawer, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const menuItems = [
  {
    key: "menu",
    path: "/menu",
    label: (
      <Link href="/menu" rel="noopener noreferrer">
        Меню
      </Link>
    ),
  },
  {
    key: "branch",
    path: "/branch",
    label: (
      <Link href="/franchise" rel="noopener noreferrer">
        Салбар
      </Link>
    ),
  },
  {
    key: "franchise",
    path: "/franchise",
    label: (
      <Link href="/franchise" rel="noopener noreferrer">
        Францайз
      </Link>
    ),
  },
  {
    key: "about",
    path: "/about",
    label: (
      <Link href="/about" rel="noopener noreferrer">
        Бидний тухай
      </Link>
    ),
  },
];

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  // const menu = (
  //   <Menu>
  //     <Menu.Item key="1">
  //       <Link href="/about">Бидний тухай</Link>
  //     </Menu.Item>
  //     <Menu.Item key="2">
  //       <Link href="/">Түүх</Link>
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="z-50 fixed bg-primary dark:bg-stone-950 text-white shadow-xl top-0 h-20 w-full flex items-center justify-between p-2 font-bold text-sm lg:flex">
      <div className="flex items-center gap-x-4 h-full">
        <div className="p-2 flex items-center h-full md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
          <Drawer
            title="Gochu"
            className="bg-yellow-100"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Menu
              mode="vertical"
              items={menuItems}
              onClick={() => setOpen(false)}
            />
          </Drawer>
        </div>
        <div className="p-2 flex items-center h-full">
          <div className="relative h-full aspect-[16/9]">
            <Link href="/">
              <Image
                src={theme === "dark" ? "/logos/group.svg" : "/logos/group.svg"}
                layout="fill"
                blurDataURL="/logos/group.svg"
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-x-8 h-full">
        <div className="md:block hidden">
          <div className="flex items-center justify-between gap-x-8 h-full">
            <Link className={`font-bold`} href="/menu">
              Меню
            </Link>
            <Link className="font-bold" href="/branch">
              Салбар
            </Link>
            <Link className="font-bold" href="/franchise">
              Франчайз
            </Link>
            <Link className="font-bold" href="/about">
              Бидний тухай
            </Link>
            {/* <Dropdown className="group" overlay={menu} trigger={["hover"]}>
              <div className="flex items-center cursor-pointer gap-1">
                <div>Компани</div>
                <DownOutlined className="group-hover:rotate-180 transition-all" />
              </div>
            </Dropdown> */}
          </div>
        </div>
        <div className="flex items-center gap-x-8 h-full">
          <div className="bg-secondary dark:bg-stone-600 border border-white p-2 rounded flex items-center justify-center md:w-40 w-20">
            <a
              className="font-bold"
              target="_blank"
              href="https://order.gochu.mn/"
            >
              Захиалга
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
