"use client";
import { Rating } from "@mui/material";
import React from "react";

const Testimonial = () => {
  return (
    <div className=" py-12  text-right container mx-auto relative">
      <img
        src="/wave.svg"
        alt=""
        className=" absolute top-[-45px] right-0 w-0 md:w-full"
      />
      <div>
        <h2 className=" px-4 md:px-0 font-medium text-[28px] md:text-[36px] text-right  text-[#172029]">
          اراء المشتركين{" "}
        </h2>
        <button
          className={`relative mr-4 md:mr-0 mt-2.5 text-right z-10 px-3.5 py-3 text-[#151F29] md:p-5 rounded-lg transition-all duration-300 ${" bg-gradient-to-r from-[#79C6CE] to-[#B4E0C9]"}`}
        >
          قم بمشاركة رايك معنا{" "}
        </button>
        <div className=" gap-6 lg:gap-2.5 mt-8 flex flex-col lg:flex-row-reverse items-center lg:items-center justify-between ">
          <div className="basis-[73%] h-full py-6  bg-[#F8F8F8] rounded-lg">
            <div className=" h-full flex gap-4 md:gap-0 md:items-center flex-col md:flex-row-reverse">
              <div className=" basis-[68%]">
                <h2 className=" font-bold text-[24px] text-[#172029] text-right p-4">
                  {" "}
                  سميره نجيب@
                </h2>
                <div className=" pl-10 text-left">
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    className=" text-left"
                  />
                </div>{" "}
                <p className=" pr-8 font-light text-[18px]  md:pl-20 text-right">
                  شكرا لاعظم كوتش واجمل كوتش ليزا التمرينه كانت عظيمه جدا جدا
                  وممتازه وفعلا حسيت بتحسن في ظهري بشكل ملحوظ وكبير جدا{" "}
                </p>
              </div>
              <div className="basis-[23%] py-8 border-r-2 mr-6 h-full">
                <p className=" text-[#80C9CD] text-[20px] text-right pr-5 cursor-pointer mr-[-1px] border-r-[#80C9CD] border-r-2">
                  محمد عبد الرحمن@
                </p>
                <p className=" text-[#172029] text-[20px] text-right pr-5 cursor-pointer">
                  سميره نجيب@{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-start w-[325px] sm:w-[525px] lg::basis-[27.5%]">
            <video
              controls
              src="/video.mp4"
              className=" w-full rounded-lg"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
