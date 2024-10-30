import React from "react";

const Video = () => {
  return (
    <div className=" container pt-12 px-4 lg:px-0  mx-auto flex flex-col lg:flex-row items-end lg:items-center gap-8 lg:justify-center">
      <p className=" lg:w-[50%] text-right text-[20px] md:text-[32px] lg:text-[32px] xl:text-[36px] font-medium">
        خلال رحلتكم الرياضيه ولان كل شخص منا بيطمح لاشي مختلف بوعدكم انه راح
        توصلو جميعا للنتيجه الى بدكن اياها !
      </p>
      <video
        src="/video.mp4"
        controls
        className=" rounded-2xl shadow-md  w-full lg:w-[50%]"
      ></video>
    </div>
  );
};

export default Video;
