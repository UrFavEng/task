import React from "react";

const Header = () => {
  return (
    <div className=" flex items-center  flex-row-reverse justify-between pb-24 mt-[-95px] relative -z-10">
      <div className=" basis-[50%]">
        <h1 className=" font-medium text-[48px] text-right px-[115px]">
          {"   "}{" "}
          <span
            className="  font-medium text-[64px]"
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
        </h1>
        <p className=" font-medium text-[64px] text-right px-[115px]">
          جـسـدك الـمـثـالــي{" "}
        </p>
        <p className=" text-[#5F5F5F]  text-right px-[115px] mt-12 pl-20">
          تُعتبر الصحة ثروة الإنسان، حيث تؤدي الرياضة دوراً مُهمّاً وحيوياً في
          بناء الأجسام، حيث لا يُوجد للممارسة الرياضة أيّ بديل للحفاظ على صحة
          الجسم البدنية ونشاطه
        </p>
        <div className=" flex items-center gap-4 flex-row-reverse text-right px-[115px] mt-4 rounded-xl">
          <button className=" rounded-2xl font-medium  bg-custom-gradient py-4 px-6">
            ابدا التمرين لان
          </button>
          <div>
            <img src="/Group 4.png" alt="" />
          </div>
          <p className=" font-medium  text-[#151F29] text-right">
            شاهد العرض التجريبي
          </p>
        </div>
      </div>
      <div className=" relative bg-custom-gradient h-[700px] basis-[30%] rounded-br-2xl shadow-sm  ">
        <img
          src="/removeBG.png"
          alt=""
          className=" w-[145%] h-full object-cover right-[-50px]  bottom-[-20px] absolute "
        />
        <img
          src="/circle.png"
          className=" animate-spin-slow absolute translate-x-[50%] right-[-50%] -z-10"
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
