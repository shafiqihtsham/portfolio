import React from "react";
import { useTheme } from "next-themes";
import Card from "../components/Card/Card";
import Image from "next/image";

export default function Home() {
  // make the text slide animation where it says full stack development
  // add link to blog where it says blog.

  return (
    <main className="">
      <div className="w-screen flex justify-center">
        <div className="mx-auto px-[30px] sm:p-10">
          <ul>
            <li>
              <Card />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
