// components/MySwiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const FoodSwiper = () => {
  return (
    <div>
      <div className="w-full aspect-[21/9] relative sm:block hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <div className="w-full h-full relative">
              <Link href="https://order.gochu.mn/">
                <img
                  className="w-full"
                  src="/swiper/1_desktop.png"
                  alt="swiper"
                />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>

        <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 w-12 h-12 rounded-full z-30">
          <LeftOutlined className="text-xl" />
        </button>
        <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 w-12 h-12 rounded-full z-30">
          <RightOutlined className="text-xl" />
        </button>
      </div>

      <div className="w-full aspect-[3/4] relative sm:hidden block">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          loop
        >
          <SwiperSlide>
            <div className="w-full h-full relative">
              <Link href="https://order.gochu.mn/">
                <img
                  className="w-full"
                  src="/swiper/1_mobile.png"
                  alt="swiper"
                />
              </Link>
            </div>
          </SwiperSlide>
          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 w-12 h-12 rounded-full z-30">
            <LeftOutlined className="text-xl" />
          </button>
          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 w-12 h-12 rounded-full z-30">
            <RightOutlined className="text-xl" />
          </button>
        </Swiper>
      </div>
    </div>
  );
};

export default FoodSwiper;
