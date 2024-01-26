import React from "react";
import { useTheme } from "next-themes";
import Card from "../components/Card/Card";
import Image from "next/image";

export default function Home() {
  // make the text slide animation where it says full stack development
  // add link to blog where it says blog.

  return (
    <main className="">
      <div className="contianer w-screen m-auto flex justify-center">
        <div className="grid grid-cols-[50%_50%] gap-10">
          <Card />
          <div className="invisible"><Card /></div>
        </div>
      </div>
    </main>
  );
}
