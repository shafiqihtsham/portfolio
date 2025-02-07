"use client";

import React from "react";
import { useTheme } from "next-themes";
import ActivityCalendar from "./components/ActivityCalendar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main>
      <Hero />
      <div className="mx-auto px-[30px] mt-[-40px] sm:px-[50px] md:px-[150px] max-w-[1440px] ">
        <section className="grid md:grid-cols-[200px_1fr] mb-24">
          <div className="col-span-1  min-w-[200px] block flex-shrink-0">
            <h3 className="text-xl font-bold text-[#007bff] tracking-wider leading-10">
              Background
            </h3>
          </div>
          <div className="col-span-1 max-w-prose">
            <About />
          </div>
        </section>

        <section className="grid md:grid-cols-[200px_1fr] mb-24">
          <div className="col-span-1  min-w-[200px] flex-shrink-0">
            <h3 className="text-xl font-bold text-[#007bff] tracking-wider ">
              Skills
            </h3>
          </div>
          <div className="col-span-1">
            <Skills />
          </div>
        </section>

        <section className="grid lg:grid-cols-[200px_1fr] my-12 mb-40">
          <div className="col-span-1  min-w-[200px]">
            <h3 className="text-xl font-bold mb-6 text-[#007bff] tracking-wider">
              Days I Code
            </h3>
          </div>
          <div className="col-span-1 overflow-hidden">
            <ActivityCalendar theme={theme} />
          </div>
        </section>
      </div>
    </main>
  );
}
