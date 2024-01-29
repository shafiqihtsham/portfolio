import React from "react";
import Card from "../components/ProjectCard";

export default function Home() {
  // make the text slide animation where it says full stack development
  // add link to blog where it says blog.

  return (
    <main className="">
      <div className="w-screen flex justify-center">
        <div className="mx-auto px-[30px] sm:p-10">
          <ul>
            <li>
              <Card
                description="My first Visual Studio Code extension which adds snippets to make your CSS usable across different browsers!"
                image="/images/cssrefresh.webp"
                title="CSS Refresh"
                projectTypes={["VSC Extension", "Javascript"]}
                projectLink={
                  "https://github.com/shafiqihtsham/VSCExtensions/tree/main/css-snippets"
                }
              />
                 <Card
                description="A small site from when I first started learning React to display and fetch a list of contacts from a public API."
                image="/images/react-contacts.webp"
                title="React Contact List"
                projectTypes={["React", "Javascript"]}
                projectLink={
                  "https://shafiqihtsham.github.io/JSONPlaceHolder/"
                }
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
