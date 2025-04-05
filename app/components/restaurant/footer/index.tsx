import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "@/app/widgets/icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-restaurant dark:bg-restaurant text-white p-4">
      <div className="container flex flex-col gap-4 mx-auto">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="flex md:col-span-4 col-span-12 flex-col gap-1">
              <div className="flex gap-3">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61571815915151"
                >
                  <div className="p-2 rounded-lg flex items-center justify-between hover:bg-stone-900 dark:hover:bg-stone-800">
                    <Facebook className="w-8 h-8" />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/primerestaurant.ub/"
                >
                  <div className="p-2 rounded-lg flex items-center justify-between hover:bg-stone-900 dark:hover:bg-stone-800">
                    <Instagram className="w-8 h-8" />
                  </div>
                </a>
              </div>

              <div className="text-sm">
                <a href="https://maps.app.goo.gl/bSuf45tqgX5ZLaiQ9">
                  ЧД 4-р хороо, Чингис хааны музейн баруун талд Prime restaurant{" "}
                </a>
              </div>
              <div className="text-sm">
                <a href="tel:80565908">Утас: +976 8056-5908</a>
              </div>
              <div className="text-sm">
                <a href="mailto:admin@primegroup.mn">
                  И-мейл: admin@primegroup.mn
                </a>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 flex flex-col gap-3 text-left"></div>
            <div className="md:col-span-3 col-span-12 bg-stone-900 rounded-xl p-3">
              <div className="relative aspect-square">
                <Image
                  src="/logos/restaurant.svg"
                  alt="logo"
                  blurDataURL="/logos/restaurant.svg"
                  placeholder="blur"
                  layout="fill"
                  className="transition"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Prime Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
