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
                  Хаяг: ЧД 4-р хороо, Чингис хааны музейн баруун талд Prime
                  restaurant{" "}
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
              {/* <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.725992071224!2d106.91160207652699!3d47.92233907122054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969324e74a927d%3A0xd6ced6df34012ee1!2sPrime%20Restaurant%20and%20Bar!5e0!3m2!1smn!2smn!4v1743855113264!5m2!1smn!2smn"
                  width="600"
                  height="450"
                  loading="lazy"
                  allowFullScreen
                  className="w-full h-full relative rounded-lg"
                  style={{ border: 0 }}
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
            <div className="md:col-span-5 col-span-12 flex flex-col gap-3 text-left"></div>
            <div className="md:col-span-3 col-span-12 bg-stone-900 rounded-xl p-3">
              <div className="relative aspect-square">
                <Image
                  src="/logos/foodbar.svg"
                  alt="logo"
                  blurDataURL="/logos/foodbar.svg"
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
