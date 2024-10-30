import React from "react";

const Header = () => {
  return (
    <div className=" flex items-center  flex-row-reverse justify-between pb-24 lg:mt-[-95px] relative -z-10">
      <div className=" mt-20 lg:mt-0 lg:basis-[50%]">
        <h1 className=" font-medium text-[28px] sm:text-[48px] text-right px-10 lg:px-[115px]">
          {"   "}{" "}
          <span
            className="  font-medium text-[28px] sm:text-[64px]"
            style={{
              background:
                "linear-gradient(180deg, #79C6CE 0%, #B9E3D7 46.16%, #B4E0C8 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            احصل
          </span>
          {"  "}
          {"  "} على{"  "}
          <span className=" block lg:hidden"> جـسـدك الـمـثـالــي </span>
        </h1>
        <p className=" hidden lg:block font-medium text-[64px] px-4 text-right lg:px-[115px]">
          جـسـدك الـمـثـالــي{" "}
        </p>
        <p className=" px-10 text-[#5F5F5F]  text-right lg:px-[115px] mt-4 sm:mt-12 lg:pl-20">
          تُعتبر الصحة ثروة الإنسان، حيث تؤدي الرياضة دوراً مُهمّاً وحيوياً في
          بناء الأجسام، حيث لا يُوجد للممارسة الرياضة أيّ بديل للحفاظ على صحة
          الجسم البدنية ونشاطه
        </p>
        <div className=" flex items-end sm:items-center gap-4 px-10 flex-col sm:flex-row-reverse text-right lg:pr-[90px] xl:px-[115px] mt-4 rounded-xl">
          <button className=" rounded-2xl  font-medium  bg-custom-gradient py-2.5 sm:py-4 px-2 sm:px-6">
            ابدا التمرين لان
          </button>
          <div className=" flex sm:block flex-row-reverse gap-4 items-center">
            <img src="/Group 4.png" alt="" />
            <p className=" block sm:hidden font-medium  text-[#151F29] text-right">
              شاهد العرض التجريبي
            </p>
          </div>
          <p className=" hidden sm:block font-medium  text-[#151F29] text-right">
            شاهد العرض التجريبي
          </p>
        </div>
      </div>
      <div className=" hidden lg:block relative lg:bg-custom-gradient lg:h-[700px] basis-[30%] rounded-br-2xl shadow-sm  ">
        <img
          src="/removeBG.png"
          alt=""
          className=" w-[145%] h-full object-cover lg:right-[-50px]  lg:bottom-[-20px] absolute "
        />
        <img
          src="/circle.png"
          className=" hidden lg:block animate-spin-slow absolute translate-x-[50%] right-[-50%] -z-10"
          alt=""
        />
        <img
          src="/Vector.png"
          className=" absolute translate-x-[50%] right-[0%] -z-20"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
