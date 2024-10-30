"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

const Certification = () => {
  const swiperRef = useRef<SwiperRef>(null); // مرجع للسلايدر
  const [activeIndex, setActiveIndex] = useState(0); // حالة لتتبع الزر النشط

  // مصفوفة الصور
  const images: string[] = ["/doc10.jpg", "/doc9.jpg", "/doc8.jpg"];

  // وظيفة تغيير الشريحة وتحديث الفهرس النشط
  const handleSlideChange = (index: number) => {
    swiperRef?.current?.swiper?.slideTo(index);
    setActiveIndex(index); // تحديث الفهرس النشط
  };

  return (
    <div className=" relative rounded-lg shadow-md bg-custom-gradient  container mx-auto px-6">
      <div
        className=" absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('/Vectorwhite.png')",
          backgroundSize: "contain", // or 'contain' if you want to fit the image
          backgroundPosition: "center", // center the image
        }}
      ></div>
      <div className=" flex justify-between py-8  items-center flex-col gap-8 lg:gap-0 lg:flex-row-reverse">
        <div>
          <h1 className=" text-right font-medium text-[24px] md:text-[36px] text-black">
            الشهادات
          </h1>
          <p className="  font-light text-[18px] md:text-[20px] text-right">
            نقدم لك مجموعة من الشهادات التي تعكس التزامنا بالاحترافية والجودة في
            مجال التدريب الرياضي.{" "}
          </p>
          <h4 className=" text-[20px] md:text-[28px] text-right mt-4">
            شهادة مدرب معتمد من الاتحاد الدولي للياقة البدنية (IFPA)
          </h4>
          <p className=" font-light text-[16px] md:text-[24px] text-right">
            هذه الشهادة تؤهل المدرب لتقديم برامج تدريبية متخصصة وآمنة.
          </p>
        </div>
        <div className="flex items-end justify-between flex-row-reverse gap-6">
          <Swiper
            ref={swiperRef}
            direction="vertical" // الاتجاه الرأسي
            slidesPerView={1} // عرض صورة واحدة في المرة
            spaceBetween={30} // المسافة بين الشرائح
            loop={true} // تكرار الشرائح
            modules={[Autoplay]} // استخدام الـ Autoplay
            className="mySwiper"
            style={{ height: "400px", overflow: "hidden" }} // ارتفاع مخصص لـ Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // تحديث الفهرس النشط عند تغيير الشريحة
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-[calc(100%+30px)] object-cover" // ملاءمة الصورة مع زيادة الارتفاع قليلاً لرؤية الأجزاء
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col space-y-2 ml-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)} // الانتقال إلى الصورة المحددة
                className={`p-2 cursor-pointer relative z-50 px-4 rounded transition duration-200 ${
                  index === activeIndex ? "bg-white" : "bg-transparent"
                }`}
              >
                {index + 1} {/* الرقم التسلسلي للصورة */}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
