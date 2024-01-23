"use client";
import React from "react";
import { useTheme } from "next-themes";
import ActivityCalendar from "./components/ActivityCalendar/ActivityCalendar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

export default function Home() {
  const { theme } = useTheme();

  // make the text slide animation where it says full stack development
  //add link to blog where it says blog.

  return (
    <main>
      <Hero />
      <div className="mx-auto px-[30px] mt-[-40px] sm:px-[150px] ">

        <section className="grid sm:grid-cols-4 my-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-[#007bff] tracking-wider ">
              Background
            </h3>
          </div>
          <div className="col-span-3">
            <About />
          </div>
        </section>

        <section className="grid sm:grid-cols-4 my-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-[#007bff] tracking-wider ">
              Skills
            </h3>
          </div>
          <div className="col-span-3">
            <Skills />
          </div>
        </section>
        

        <section className="grid sm:grid-cols-4 my-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 text-[#007bff] tracking-wider">
              Days I Code
            </h3>
          </div>
          <div className="col-span-3 overflow-scroll">
            <ActivityCalendar theme={theme} />
          </div>
        </section>
      </div>
    </main>
  );
}
