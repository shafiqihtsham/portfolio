import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col m-auto justify-evenly md:justify-around py-[20px] px-[50px] sm:py-[70px] gap-[0px] md:gap-6 pb-[50px] md:px-[100px] md:py-[120px] max-w-[1440px] leading-[24px] h-screen">
      <h1 className="text-[35px] md:text-[40px]">
        Hi!{" "}
        <span className="inline-block hover:animate-wave max-w-[30px] animate-firstwave">
          👋
        </span>
      </h1>

      <div className="text-xl md:text-4xl font-light tracking-wide md:leading-[60px] md:[text-balance] leading-[42px] text-[#444452] dark:text-[#afafbf] min-w-[30px]">
        I&apos;m <b className="dark:text-white text-black">Ihtsham Shafiq</b>. A
        current final-year UTS student and aspiring Software Engineer
        experienced in <br></br>
        <div className="mt-2 text-xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
          <span className="inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="text-[#007bff] animate-textslide list-none bg-clip-text block text-left leading-tight [&_li]:block ">
              <li>Full-Stack Development</li>
              <li>Mobile App Development</li>
              <li>Machine Learning</li>
              <li>Data Analytics</li>
              <li aria-hidden="true">Full-Stack Development</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="text-[18px] md:text-[20px] mb-20 flex flex-wrap">
        Contact me at&nbsp;
        <a href="mailto:ihtsham123@outlook.com" className=" text-[#007bff]">
          Ihtsham123@outlook.com
        </a>
      </div>
    </div>
  );
};

export default Hero;
