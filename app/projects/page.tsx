import React from "react";
import Card from "../components/ProjectCard";

export default function Home() {
  // make the text slide animation where it says full stack development
  // add link to blog where it says blog.

  return (
    <main className="relative min-h-screen m-10">
      <div className="flex flex-col m-auto justify-evenly md:justify-around py-[20px] px-[50px] sm:py-[70px] gap-[0px] md:gap-6 pb-[50px] md:px-[100px] md:py-[120px] max-w-[1440px] leading-[24px]">
        <h1 className="text-[35px] md:text-[40px] text-[#007bff]">
          Personal Projects
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center">
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
