import React from "react";

const About = () => {
  return (
    <div className="text-[16px] sm:text-lg text-[#444452] dark:text-[#afafbf] leading-8 m-auto font-light">
      {"I'm in my "}
      <span className="dark:text-white text-black font-semibold">
        final year at UTS
      </span>
      , studying Software Engineering with a focus on
      <span className="dark:text-white text-black font-semibold">
        {" Data Analytics"}
      </span>
      . Passionate about experimenting with new things, I love discovering
      unique food spots and diving into fresh JavaScript frameworks.
      <span className="dark:text-white text-black font-semibold">
        {" Beyond programming, you'll find me enjoying "}
      </span>
      hobbies like Bouldering, Table Tennis, and Badminton. Check out my blog
      for more!
    </div>
  );
};

export default About;
