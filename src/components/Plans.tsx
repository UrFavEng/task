"use client";
import React, { useState } from "react";

const Plans = () => {
  const [activeButton, setActiveButton] = useState<"annual" | "threeMonths">(
    "annual"
  );

  const handleClick = (button: "annual" | "threeMonths") => {
    setActiveButton(button);
  };

  return (
    <div className=" py-24">
      <h2 className=" text-center font-medium text-[#172029] text-[36px]">
        اختر الخطة المناسبة{" "}
      </h2>
      <p className=" text-[#929292] text-center">
        تُعتبر الصحة ثروة الإنسان، حيث تؤدي الرياضة دوراً مُهمّاً وحيوياً في
        بناء الأجسام، حيث لا يُوجد{" "}
      </p>
      <div className="relative text-center w-fit mx-auto mt-8 flex flex-row-reverse justify-center items-center">
        <button
          className={`relative z-10 px-6 p-4 rounded-lg transition-all duration-300 ${
            activeButton === "annual"
              ? " bg-gradient-to-r from-[#79C6CE] to-[#B4E0C9]"
              : "text-gray-600"
          }`}
          onClick={() => handleClick("annual")}
        >
          الخطه السنويه
        </button>
        <button
          className={`relative z-10 px-6 p-4 rounded-lg transition-all duration-300 ${
            activeButton === "threeMonths"
              ? " bg-gradient-to-r from-[#79C6CE] to-[#B4E0C9]"
              : "text-gray-600"
          }`}
          onClick={() => handleClick("threeMonths")}
        >
          ثلاثة اشهر
        </button>
      </div>
      <div className="container px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-12 lg:mt-28">
        <div className="border-[#b3e0c5] h-[524px] bg-[#b3e0c513] border-2   p-4 rounded-2xl">
          <div>
            {" "}
            <h3 className=" font-medium text-right  text-[#4D6782]">
              مجموعة اللياقه البدنيه
            </h3>
            <div className=" flex items-end gap-2.5 flex-row-reverse">
              {" "}
              <p className=" gap-1 flex items-center flex-row-reverse text-right">
                <span className=" font-bold text-[40px] text-[#172029]">
                  267
                </span>
                <span className=" text-[24px] mt-3.5">د.ا</span>{" "}
              </p>
              <p className=" mb-2 gap-1 flex items-center flex-row-reverse text-right">
                <del className="  underline-offset-2 font-bold text-[19px] text-[#7C7C7C]">
                  267
                </del>
                <span className="mt-1 text-[#7C7C7C]">د.ا</span>{" "}
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className=" flex items-end gap-7 flex-col mt-10">
              <p className=" text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                فيديوهات رياضه
              </p>
              <p className=" text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول غذائي بناء على اهدافك{" "}
              </p>
              <p className=" text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول تمارين لاحماء{" "}
              </p>
              <p className=" text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                متابعه{" "}
              </p>
            </div>
          </div>
          <div className=" w-[95%] mx-auto mt-32  text-center">
            {" "}
            <button className="  w-full rounded-lg text-[#182029] font-medium h-[48px]   border-[#b3e0c5] border-2">
              اكتشف الخطه
            </button>{" "}
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('/Vector.png')",
            backgroundSize: "cover", // or 'contain' if you want to fit the image
            backgroundPosition: "center", // center the image
          }}
          className="border-[#b3e0c5] lg:translate-y-[-48px]  h-[524px] bg-white border-2   p-4 rounded-2xl   "
        >
          <div>
            {" "}
            <h3 className=" font-medium text-right  text-[#4D6782]">
              مجموعة اللياقه المكثفه عن بعد{" "}
            </h3>
            <div className=" flex items-end gap-2.5 flex-row-reverse">
              {" "}
              <p className=" gap-1 flex items-center flex-row-reverse text-right">
                <span className=" font-bold text-[40px] text-[#172029]">
                  896
                </span>
                <span className=" text-[24px] mt-3.5">د.ا</span>{" "}
              </p>
              <p className=" mb-2 gap-1 flex items-center flex-row-reverse text-right">
                <del className="  underline-offset-2 font-bold text-[19px] text-[#7C7C7C]">
                  1079
                </del>
                <span className="mt-1 text-[#7C7C7C]">د.ا</span>{" "}
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className=" flex items-end gap-2 sm:gap-3 lg:gap-5 flex-col mt-10">
              <p className=" text-[#5F5F5F] text-right flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                مقاطع فيديو للتمارين تترواح بين 3 الى 6 ايام{" "}
              </p>
              <p className=" text-[#5F5F5F] text-right flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول غذائي بناء على اهدافك{" "}
              </p>
              <p className=" text-[#5F5F5F] text-right flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول مكملات غذائيه بناء على اهدافك{" "}
              </p>
              <p className=" text-[#5F5F5F] text-right flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول بناء التضخيم بناء على اهدافك{" "}
              </p>
              <p className=" text-[#5F5F5F] text-right flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول تمارين لاحماء بناء على لايام التي يمكنك ممارسة الرايضه فيها{" "}
              </p>
              <p className=" text-[#5F5F5F] text-right flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                المتابعه كل 15 يوم{" "}
              </p>
            </div>
          </div>
          <div className="  w-[95%] mx-auto mt-[80px] lg:mt-5 xl:mt-8  text-center">
            {" "}
            <button className="text-[#182029] bg-gradient-to-r from-[#79C6CE] to-[#B4E0C9]  w-full rounded-lg  text-[20px] font-medium h-[48px]   border-[#b3e0c5] border-2">
              اكتشف الخطه
            </button>{" "}
          </div>
        </div>
        <div className="border-[#79C6CE]  md:col-span-2  lg:col-span-1   md:justify-self-center xl:justify-self-auto h-[524px] bg-[#79C6CE13] border-2 p-4 rounded-2xl">
          <div>
            {" "}
            <h3 className=" font-medium text-right  text-[#4D6782]">
              مجموعة اللياقه عن بعد{" "}
            </h3>
            <div className=" flex items-end gap-2.5 flex-row-reverse">
              {" "}
              <p className=" gap-1 flex items-center flex-row-reverse text-right">
                <span className=" font-bold text-[40px] text-[#172029]">
                  596
                </span>
                <span className=" text-[24px] mt-3.5">د.ا</span>{" "}
              </p>
              <p className=" mb-2 gap-1 flex items-center flex-row-reverse text-right">
                <del className="  underline-offset-2 font-bold text-[19px] text-[#7C7C7C]">
                  749
                </del>
                <span className="mt-1 text-[#7C7C7C]">د.ا</span>{" "}
              </p>
            </div>
          </div>
          <div>
            {" "}
            <div className=" flex items-end gap-6 sm:gap-7 flex-col mt-10">
              <p className=" text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                فيديوهات رياضه
              </p>
              <p className=" text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول غذائي بناء على اهدافك{" "}
              </p>
              <p className=" text-right text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول مكملات غذائيه بناء على اهدافك
              </p>
              <p className=" text-[#5F5F5F] flex items-center gap-2 flex-row-reverse">
                <img src="/true.png" alt="" className=" mt-1.5" />
                جدول تمارين لاحماء
              </p>
            </div>
          </div>
          <div className=" w-[95%] mx-auto mt-32  text-center">
            {" "}
            <button className="  w-full rounded-lg text-[#182029] font-medium h-[48px]   border-[#b3e0c5] border-2">
              اكتشف الخطه
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
