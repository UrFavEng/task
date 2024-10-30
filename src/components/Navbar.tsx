import Image from "next/image";
import React from "react";
import Dropdown from "./DropDwon";

const Navbar = () => {
  return (
    <header className="bg-transparent py-4 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <button className="bg-[#151F29] hidden lg:block  text-[#FAF4EF]  h-10 px-8 xl:px-12 rounded-md  shadow-sm">
              تواصل معنا{" "}
            </button>
            <div className="flex lg:hidden items-center gap-4">
              <Image alt="" height={70} width={70} src={"/logo.png"} />
            </div>
          </div>

          <div className="md:flex md:items-center md:gap-7 lg:gap-10 xl:gap-12">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex text-black font-semibold items-center flex-row-reverse gap-3 lg:gap-4 xl:gap-6 text-sm">
                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    الرئيسية
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    {" "}
                    عن ليزا فراج{" "}
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    {" "}
                    الاشتراكات{" "}
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    {" "}
                    الشهادات{" "}
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    {" "}
                    لماذا ليزا فراج{" "}
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    {" "}
                    معرض الصور{" "}
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    {" "}
                    الاسئله الشائعه{" "}
                  </a>
                </li>
                <li>
                  <a className=" transition hover:text-gray-500/75" href="#">
                    {" "}
                    آراء المشتركين{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <Image
                alt=""
                height={70}
                width={70}
                src={"/logo.png"}
                className=" hidden lg:block"
              />
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
