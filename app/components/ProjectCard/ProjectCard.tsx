import Image from "next/image";
import Pill from "../Pill";

interface CardProps {
    title: string;
    imageLink: string;
    description: string;
    projectTags: string[];
    projectLink: string;
}

const ProjectCard = (props: CardProps) => {
    return (
        <a href={props.projectLink} target="_blank">
            <div className="group h-full w-full dark:hover:bg-gray-600 hover:bg-gray-400 rounded-md backdrop-filter backdrop-blur-[1px] bg-opacity-0 dark:hover:bg-opacity-20 hover:bg-opacity-20 p-4 my-2 hover:shadow-2xl shadow-black cursor-pointer border-t-[1px] border-t-transparent dark:hover:border-t-slate-600 hover:border-t-slate-50">
                <div className="grid grid-flow-row sm:grid-flow-col">
                    <div className="order-2 sm:order-1 w-fit h-fit">
                        <Image
                            className="ml-4 sm:ml-0 aspect-video object-cover rounded-lg border-2 solid border-transparent group-hover:border-gray-400 group-hover:dark:border-slate-500 min-w-[200px]"
                            src={props.imageLink}
                            alt=""
                            width={200}
                            height={100}
                        ></Image>
                    </div>

                    <div className="order-1 sm:order-2 ml-4">
                        <div className="flex flex-row items-center space-x-1">
                            <h2 className="text-left font-medium group-hover:text-blue-500">
                                {props.title}
                            </h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                className="size-3 group-hover:stroke-blue-500 group-hover:animate-moveToTopRight stroke-black dark:stroke-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </div>
                        <span className="text-xs text-[#444452] dark:text-[#afafbf]  text-balance">
                            {props.description}
                        </span>
                        <div className="flex flex-row whitespace-nowrap py-2">
                            {props.projectTags.map((tag) => (
                                <Pill key={tag} text={tag}></Pill>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
