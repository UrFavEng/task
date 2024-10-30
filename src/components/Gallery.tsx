"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function TransparentSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" py-20">
      <div className=" py-8 text-[#172029] font-medium text-[36px] container mx-auto text-right">
        معرض الصور
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          1280: { slidesPerView: 5 },
          1024: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="mySwiper"
      >
        {[
          "/doc10.jpg",
          "/doc9.jpg",
          "/doc8.jpg",
          "/doc7.jpg",
          "/doc6.jpg",
          "/doc5.jpg",
        ].map((src, index) => (
          <SwiperSlide key={index} className="relative group">
            {/* صورة خلفية */}
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className={`w-full h-96 object-cover transition-transform duration-300 ${
                activeIndex === index ? "scale-110 " : "scale-90"
              }`}
            />
            {/* تدرج شفاف، يظهر فقط عندما لا تكون الصورة في المنتصف */}
            {activeIndex !== index && (
              <div className="absolute inset-0 bg-white bg-opacity-70 transition-opacity duration-300"></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
