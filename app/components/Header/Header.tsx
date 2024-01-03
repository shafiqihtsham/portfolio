import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <ul className="flex flex-row gap-4">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog">Blog Post</Link>
      </li>
    </ul>
  );
};

export default Header;
