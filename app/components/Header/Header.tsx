"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "../Theme/ThemeSwitcher";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row w-full bg-gray-200 dark:bg-slate-800 justify-between px-10 p-4">
      <span>Ihtsham Shafiq</span>
      <ul className="flex flex-wrap gap-5 items-center justify-center text-gray-900 dark:text-white">
        <li>
          <Link
            href="/"
            className={`link ${pathname === "/" ? "font-bold" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`link ${pathname === "/projects" ? "font-bold" : ""}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`link ${pathname === "/blog" ? "font-bold" : ""}`}
          >
            Blog
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Header;
