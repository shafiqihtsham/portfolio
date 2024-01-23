import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col m-0 justify-around px-[30px] gap-6 pb-[50px] pt-[20px] md:p-8 max-w-prose leading-[24px] box-border h-screen">
      <span className="text-[40px] font-light">
        Hi! <span>👋</span>
      </span>
      <div className="text-[26px] md:text-[40px] font-light tracking-wide md:leading-[60px] leading-[42px] text-[#444452] dark:text-[#afafbf] min-w-[30px]">
        I&apos;m <b className="dark:text-white text-black">Ihtsham Shafiq</b>. A
        current final-year UTS student and aspiring Software Engineer
        experienced in <br></br>
        <span className="text-[#007bff] "> full-stack development</span>.
      </div>
      <div className="text-[20px] mb-20 flex flex-wrap">
        Contact me at&nbsp;
        <a href="mailto:ihtsham123@outlook.com" className=" text-[#007bff]">
          Ihtsham123@outlook.com
        </a>
      </div>
    </div>
  );
};

export default Hero;
