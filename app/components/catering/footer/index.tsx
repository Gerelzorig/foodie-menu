import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "@/app/widgets/icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-fourth dark:bg-stone-950 text-white p-4">
      <div className="container flex flex-col gap-4 mx-auto">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="flex md:col-span-4 col-span-12 flex-col gap-1">
              <div className="flex gap-3">
                <a
                  target="_blank"
                  href="https://www.facebook.com/GochuKoreanChicken"
                >
                  <div className="p-2 rounded-lg flex items-center justify-between hover:bg-primary dark:hover:bg-stone-800">
                    <Facebook className="w-8 h-8" />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/gochu.korean.chicken/"
                >
                  <div className="p-2 rounded-lg flex items-center justify-between hover:bg-primary dark:hover:bg-stone-800">
                    <Instagram className="w-8 h-8" />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@GochuKoreanChicken-i6x/"
                >
                  <div className="p-2 rounded-lg flex items-center justify-between hover:bg-primary dark:hover:bg-stone-800">
                    <Youtube className="w-8 h-8" />
                  </div>
                </a>
              </div>

              <div className="text-sm">
                СБД 3-р хороо, Усны гудамж Royal Tower 12 давхар, 1202 тоот
              </div>
              <div className="text-sm">
                <a href="tel:72223355">Утас: +976 7222-3355</a>
              </div>
              <div className="text-sm">
                <a href="mailto:info@gochuchicken.mn">
                  И-мейл: info@gochuchicken.mn
                </a>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 flex flex-col gap-3 text-left">
              <div className="text-base font-bold">БИДЭНТЭЙ НЭГДЭХ</div>
              <div className="text-sm text-gray-300">
                <a href="https://shorturl.at/oEOx5">АЖЛЫН АНКЕТ</a>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12 bg-primary rounded-xl p-3">
              <div className="relative aspect-video">
                <Image
                  src="/logo/chicken_black.png"
                  alt="logo"
                  blurDataURL="/logo/chicken_black.png"
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
            &copy; {new Date().getFullYear()} Gochu Korean Chicken. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
