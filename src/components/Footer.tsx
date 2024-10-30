import React from "react";

const Footer = () => {
  return (
    <div className="  bg-[#79C6CE13] py-12">
      <div className=" flex items-start justify-between container mx-auto flex-row-reverse py-12 mb-12">
        <div className=" basis-[38%] flex items-start gap-2 flex-row-reverse">
          <img src="/logo.png" alt="" className=" min-w-[180px]" />
          <div>
            {" "}
            <h4 className="text-[20px] flex items-end gap-2 flex-row-reverse font-medium text-[#151F29] text-right">
              ليزا
              <span className=" text-[#79C6CE] font-medium">فراج</span>
            </h4>
            <p className=" text-[#5F5F5F]  text-right">
              ليزا فراج هي مدربة رياضية متخصصة في اللياقة البدنية والصحة العامة،
              تشتهر بتقديم برامج تدريبية متكاملة تهدف إلى تحسين اللياقة البدنية
              وزيادة القوة والمرونة.
            </p>
          </div>
        </div>
        <div>
          {" "}
          <h4 className="text-[20px] font-medium text-[#151F29] text-right">
            وصول سريع{" "}
          </h4>{" "}
          <div className=" mt-1.5">
            <p className=" text-right font-light text-[#5F5F5F]">الاشتراكات </p>
            <p className=" text-right font-light text-[#5F5F5F]">
              الاسئله الشائعه{" "}
            </p>
          </div>
        </div>
        <div>
          {" "}
          <h4 className="text-[20px] font-medium text-[#151F29] text-right">
            روابط مهمه
          </h4>
          <div className=" mt-1.5">
            <p className=" text-right font-light text-[#5F5F5F]">
              سياسة الخصوصية
            </p>
            <p className=" text-right font-light text-[#5F5F5F]">
              الشروط والاحكام
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[20px] font-medium text-[#151F29] text-right">
            تواصل معنا{" "}
          </h4>
          <div className=" mt-5 flex items-center flex-row-reverse gap-3.5">
            <img src="/Vector5.png" alt="" />
            <img src="/Vector(3).png" alt="" />
            <img src="/Vector(2).png" alt="" />
            <img src="/Vector(1).png" alt="" />
          </div>
        </div>
      </div>
      <div className=" font-medium bg-gradient-to-r text-center py-2.5 from-[#79C6CE] to-[#B4E0C9]">
        &copy; 2024 All Rught Reserved
      </div>
    </div>
  );
};

export default Footer;
