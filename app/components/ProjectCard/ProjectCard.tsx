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
      <div className="group h-full max-w-[600px] dark:bg-gray-600/20 bg-gray-400/20 rounded-md backdrop-filter backdrop-blur-[2px] dark:bg-opacity-20 bg-opacity-20 p-4 my-2 hover:drop-shadow-2xl shadow-black cursor-pointer border-t-[1px] border-t-transparent dark:border-t-slate-600 ">
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="order-2 sm:order-1 w-fit h-fit">
            <Image
              className="aspect-video object-cover rounded-lg border-2 solid border-transparent group-hover:border-gray-400 group-hover:dark:border-slate-500 min-w-[200px]"
              src={props.imageLink}
              alt=""
              width={200}
              height={100}
            ></Image>
          </div>

          <div className="order-1 sm:order-2">
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
