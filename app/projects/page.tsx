import React from "react";
import Card from "../components/ProjectCard";

export default function Home() {
    // make the text slide animation where it says full stack development
    // add link to blog where it says blog.

    return (
        <main className="relative min-h-[100vh] my-10">
            <div className="w-fit m-auto">
                <h1 className="text-gray-900 text-[30px] md:text-[35px] dark:text-white p-10 whitespace-nowrap">
                    Personal Projects
                </h1>
            </div>

            <div className="absolute h-full w-full dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:[mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_5%,transparent_90%)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_5%,transparent_90%)] bg-[radial-gradient(black_1px,transparent_1px)]"></div>

            <div className="flex flex-col max-w-lg mx-auto">
                <Card
                    description="A site I was commissioned to make for a renewable energy startup!"
                    imageLink="/images/air2energy.png"
                    title="Air2Energy"
                    projectTags={["React", "Typescript", "Tailwind"]}
                    projectLink={
                        "https://www.air2energy.net"
                    }
                />

                <Card
                    description="A simple minecraft themed static site to visualise various sorting algorithms."
                    imageLink="/images/sortingvisualiser.png"
                    title="Sorting Algorithm Visualiser"
                    projectTags={["React", "Typescript", "Vite"]}
                    projectLink={
                        "https://shafiqihtsham.github.io/SortingVisualizer/"
                    }
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
                    projectLink={
                        "https://shafiqihtsham.github.io/JSONPlaceHolder/"
                    }
                />
            </div>
        </main>
    );
}
