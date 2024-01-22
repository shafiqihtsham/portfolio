"use client";
import React from "react";
import { useTheme } from "next-themes";
import ActivityCalendar from "./components/ActivityCalendar/ActivityCalendar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  const { theme } = useTheme();

  // make the text slide animation where it says full stack development
  //add link to blog where it says blog.

  return (
    <main className="m-6 p-4">
      <Hero />{" "}

      <div className="block">
      <section className="mt-6 col-span-2">
        <h3 className="text-2xl font-bold mb-6 text-[#007bff] tracking-wider col-span-2">
          Background
        </h3>
        <div className="p-4 text-lg text-[#444452] dark:text-[#afafbf] leading-8 max-w-prose m-auto col-span-2">
          I&apos;m in my{" "}
          <span className="dark:text-white text-black font-semibold">
            final year at UTS
          </span>
          , studying Software Engineering with a focus on{" "}
          <span className="dark:text-white text-black font-semibold">
            Data Analytics
          </span>
          . Passionate about experimenting with new things, I love discovering
          unique food spots and diving into fresh JavaScript frameworks.{" "}
          <span className="dark:text-white text-black font-semibold">
            Beyond programming, you&apos;ll find me enjoying{" "}
          </span>
          hobbies like Bouldering, Table Tennis, and Badminton. Check out my
          blog for more!
        </div>
      </section>
      <section className="mt-6 col-span-2">
        <h3 className="text-2xl font-bold mb-6 text-[#007bff] tracking-wider ">
          Skills
        </h3>

        <div className="flex flex-col sm:grid sm:grid-cols-3 max-w-prose m-auto">
          <div>
            <h4 className="font-bold text-lg mb-2">Languages</h4>
            <ul className="list-none list-inside text-[#444452] dark:text-[#afafbf]">
              <li>Javascript (ES6)</li>
              <li>Python</li>
              <li>Java</li>
              <li>Swift</li>
              <li>C++</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Frameworks</h4>
            <ul className="list-none list-inside text-[#444452] dark:text-[#afafbf]">
              <li>ReactJS</li>
              <li>ExpressJS</li>
              <li>NodeJS</li>
              <li>Tensorflow</li>
              <li>OpenCV</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Tools</h4>
            <ul className="list-none list-inside text-[#444452] dark:text-[#afafbf]">
              <li>Ubuntu</li>
              <li>Bash</li>
              <li>Git & Github</li>
              <li>Postman</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h3 className="text-2xl font-bold mb-6 text-[#007bff] tracking-wider">
          Days I Code
        </h3>
        <ActivityCalendar theme={theme} />
      </section>
      </div>
    </main>
  );
}
