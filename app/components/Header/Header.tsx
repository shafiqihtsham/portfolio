"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "../Theme/ThemeSwitcher";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row w-full bg-slate-200 dark:bg-gray-900 justify-between px-10 p-4 mb-10">
      <span className="invisible">Ihtsham Shafiq</span>
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
          <Link
            href="/snippets"
            className={`link ${pathname === "/blog" ? "font-bold" : ""}`}
          >
            Snippets
          </Link>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </header>
  );
};

export default Header;
