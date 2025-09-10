"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewsData } from "@/Data/Data";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[459px] md:h-[359px] w-[99%] h-[389px]"
      >
        {reviewsData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl block p-6">
            <div className="w-[80%] mx-auto mt-16">
              {/* Review text */}
              <p className="text-xs sm:text-sm md:text-base font-semibold">
                {data.reviews}
              </p>
              {/* Icons */}
              <div className="flex items-center mt-4 space-x-1">
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
              </div>
              <div className="">
                <div className="flex items-center space-x-4">
                  <Image
                    src={data.image}
                    width={60}
                    height={60}
                    alt="client"
                    className="rounded-full"
                  />
                </div>
                <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
                <p className="text-gray-600 text-xs sm:text-base">
                  Web Developer
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
