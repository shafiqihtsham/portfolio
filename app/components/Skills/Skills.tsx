import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10">
      <div className="">
        <h4 className="font-bold text-lg">Languages</h4>
        <ul className="list-none text-[#444452] dark:text-[#afafbf] mt-2 leading-7 font-light">
          <li>Javascript (ES6)</li>
          <li>Python</li>
          <li>Java</li>
          <li>Swift</li>
          <li>C++</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">Frameworks</h4>
        <ul className="list-none text-[#444452] dark:text-[#afafbf] mt-2 leading-7 font-light">
          <li>ReactJS</li>
          <li>ExpressJS</li>
          <li>NodeJS</li>
          <li>Tensorflow</li>
          <li>OpenCV</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg">Tools</h4>
        <ul className="list-none text-[#444452] dark:text-[#afafbf] mt-2 leading-7 font-light">
          <li>Ubuntu</li>
          <li>Bash</li>
          <li>Git & Github</li>
          <li>Postman</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
