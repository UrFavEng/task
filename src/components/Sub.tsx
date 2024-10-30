import React from "react";

const Sub = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/Vector.png')",
        backgroundSize: "contain", // or 'contain' if you want to fit the image
        backgroundPosition: "center", // center the image
      }}
      className=" flex items-center   flex-row-reverse p-8 py-20 rounded-lg shadow-md bg-[#EDFFF4] container mx-auto my-12 mt-28"
    >
      <div>
        {" "}
        <h1 className=" text-[#172029] w-[75%] ml-[25%] font-medium text-right text-[30px]">
          اشترك مع ليزا فراج لتحصل على معلومه رياضيه كل اسبوع
        </h1>
        <p className="text-[#909090] font-light text-[18px] text-right mt-2.5 w-[65%] ml-[35%]">
          في هذا لاشتراك سوف يصلك مقاطع فيديو عن الصحه بشكل عام وعن التمارين
          الرياضيه بشكل خاص المقدمه من المدربه ليزا فراج
        </p>
      </div>
      <form className=" relative">
        {" "}
        <input
          type="email"
          placeholder="ادخل لايميل الخاص بك"
          className=" w-[380px] placeholder:text-right pl-24 pr-4 h-[60px] border rounded-2xl"
        />
        <button className=" left-3 absolute rounded-lg top-[50%] translate-y-[-50%] bg-gradient-to-r from-[#79C6CE] to-[#B4E0C9] py-2.5 px-5">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default Sub;
