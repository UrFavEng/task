"use client";
import React, { useEffect, useState } from "react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/doc6.jpg", // قم بتغيير هذا إلى مسار الصورة الكبيرة
    "/doc10.jpg", // قم بتغيير هذا إلى مسار الصورة الصغيرة
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3500); // التبديل كل 2 ثوانٍ
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container flex-col lg:flex-row-reverse mx-auto flex items-center justify-center gap-5 md:gap-20 pt-16">
      {activeIndex == 0 && (
        <>
          {" "}
          <div className={"lg:w-[50%]"}>
            <h2 className=" px-4 md:px-0 mb-4 text-right font-medium text-[36px] text-[#172029]">
              رحلة ليزا فراج{" "}
            </h2>
            <p className=" px-4 md:px-0 text-[20px] text-right text-[#5F5F5F]">
              عملت ليزا لسنوات في البنوك، قبل أن تقرر تغيير مسارها المهني، حيث
              اتخذت قرارًا جريئًا بالانتقال من العمل المصرفي إلى العمل كمدربة
              رياضية للأطفال. وافتتحت أيضًا كوفي شوب صغير للمأكولات والمشروبات
              الصحية، إيمانًا منها بأهمية الصحة واللياقة البدنية. في عام 2021،
              انتقلت ليزا إلى الإمارات العربية المتحدة، حيث التحقت بأحد الكورسات
              الرياضية الدولية، وحصلت على شهادة دولية في الاستشارات والتدريب
              الرياضي، مما مكنها من تحسين الأداء الحركي والعضلي لجميع الفئات
              العمرية من الجنسين.
            </p>
          </div>
        </>
      )}{" "}
      {activeIndex == 1 && (
        <>
          {" "}
          <div className={"lg:w-[50%]"}>
            <h2 className="mb-4 text-right font-medium text-[36px] text-[#172029]">
              ما يميز ليزا فراج
            </h2>
            <p className=" text-[20px] text-right text-[#5F5F5F]">
              حيث اتخذت قرارًا جريئًا بالانتقال من العمل المصرفي إلى العمل
              كمدربة رياضية للأطفال. وافتتحت أيضًا كوفي شوب صغير للمأكولات
              والمشروبات الصحية، إيمانًا منها بأهمية الصحة واللياقة البدنية. في
              عام 2021، انتقلت ليزا إلى الإمارات العربية المتحدة، حيث التحقت
              بأحد الكورسات الرياضية الدولية، وحصلت على شهادة دولية في
              الاستشارات والتدريب الرياضي، مما مكنها من تحسين الأداء الحركي
              والعضلي لجميع الفئات العمرية من الجنسين.
            </p>
          </div>
        </>
      )}{" "}
      <div className="relative mx-auto w-[90%] sm:w-[80%] lg:w-[50%] h-[580px]">
        <img
          src={images[activeIndex]}
          alt="Large Image"
          className={`absolute rounded-xl border-2 top-0 left-0 w-[550px] h-[550px] object-cover object-top transition-transform duration-700 ease-in-out ${
            activeIndex === 0 ? "scale-100 blur-sm" : "scale-75 "
          }`}
        />
        <div className=" absolute top-0 left-0 w-full h-full blur-3xl bg-[#fff4]"></div>
        {/* الصورة الصغيرة */}
        <img
          src={images[activeIndex === 0 ? 1 : 0]} // استخدم الصورة الثانية عند تفعيل الصورة الكبيرة
          alt="Small Image"
          className={`absolute rounded-xl border-2 shadow-lg top-[20%] translate-y-[-50%] right-0 md:right-[-40px] w-72 h-72 object-cover transition-transform duration-700 ease-in-out ${
            activeIndex === 0 ? "scale-75 " : "scale-100 "
          }`}
          style={{
            transform: `translateX(${activeIndex === 0 ? "0" : "20px"})`, // تحريك الصورة الصغيرة نحو اليمين
          }}
        />
      </div>
    </div>
  );
};

export default About;
