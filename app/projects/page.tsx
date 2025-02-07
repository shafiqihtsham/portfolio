import React from "react";
import Card from "../components/ProjectCard";

export default function Home() {
  // make the text slide animation where it says full stack development
  // add link to blog where it says blog.

  return (
    <main className="relative m-10">
      <div className="container mx-auto max-w-fit">
        <div className="text-[35px] md:text-[40px]">
          <h1 className="text-(--brand-color) my-10 font-extrabold">
            Personal Projects
          </h1>
        </div>
        <div className="max-w-fit flex flex-col">
          <Card
            description="A site I was commissioned to make for a renewable energy startup!"
            imageLink="/images/air2energy.png"
            title="Air2Energy"
            projectTags={["React", "Typescript", "Tailwind"]}
            projectLink={"https://www.air2energy.net"}
          />
          <Card
            description="A simple minecraft themed static site to visualise various sorting algorithms."
            imageLink="/images/sortingvisualiser.png"
            title="Sorting Algorithm Visualiser"
            projectTags={["React", "Typescript", "Vite"]}
            projectLink={"https://shafiqihtsham.github.io/SortingVisualizer/"}
          />
          <Card
            description="My first Visual Studio Code extension which adds snippets to make your CSS usable across different browsers!"
            imageLink="/images/cssrefresh.webp"
            title="CSS Refresh"
            projectTags={["VSC Extension", "Javascript"]}
            projectLink={
              "https://github.com/shafiqihtsham/VSCExtensions/tree/main/css-snippets"
            }
          />

          <Card
            description="A small site from when I first started learning React to display and fetch a list of contacts from a public API."
            imageLink="/images/react-contacts.webp"
            title="React Contact List"
            projectTags={["React", "Javascript"]}
            projectLink={"https://shafiqihtsham.github.io/JSONPlaceHolder/"}
          />
        </div>
      </div>
    </main>
  );
}
