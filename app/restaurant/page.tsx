"use client";
import React from "react";
import FoodSwiper from "../components/restaurant/swiper";

const RestaurantPage: React.FC = () => {
  return (
    <div>
      <FoodSwiper />
      <div className="pb-32 pt-12 container mx-auto">
        <div className="text-center text-3xl font-slogan">
          Чанар, Сэтгэл, Дурсамж
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
