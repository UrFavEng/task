import React from "react";

const Video = () => {
  return (
    <div className=" container py-12  mx-auto flex items-center gap-8 justify-center">
      <p className=" w-[50%] text-right text-[36px] font-medium">
        خلال رحلتكم الرياضيه ولان كل شخص منا بيطمح لاشي مختلف بوعدكم انه راح
        توصلو جميعا للنتيجه الى بدكن اياها !
      </p>
      <video
        src="/video.mp4"
        controls
        className=" rounded-2xl shadow-md w-[50%]"
      ></video>
    </div>
  );
};

export default Video;
