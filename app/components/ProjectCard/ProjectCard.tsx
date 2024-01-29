import Image from "next/image";
import Pill from "../Pill";
import Link from "next/link";

interface CardProps {
  title: string;
  image: string;
  description: string;
  projectTypes: string[];
  projectLink: string;
}

const ProjectCard = (props: CardProps) => {
  return (
    <div className="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10">
      <Image
        className="aspect-video sm:aspect-auto object-cover rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-s-lg "
        src={props.image}
        width={500}
        height={500}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex flex-row justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <div className="z-50">
            <Link href={props.projectLink}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-slate-900 dark:fill-slate-100 hover:cursor-pointer"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 [text-wrap:balance]">
          {props.description}
        </p>
        <div className="flex flex-row flex-nowrap">
          {props.projectTypes.map((type, index) => (
            <Pill key={index} text={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
