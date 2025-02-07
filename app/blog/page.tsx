import Link from "next/link";

import { getSortedPostsData } from "@/lib/posts";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
}[];

export default async function Home() {
  const allPostsData: AllPostsData = await getSortedPostsData();

  return (
    <main className="dark:prose-invert prose container mx-auto p-10 min-h-screen">
      <h1 className="text-(--brand-color) my-10 text-[30px] md:text-[35px]">
        Blog
      </h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <div className="font-medium mb-1 mt-5">
              <Link href={`/blog/${id}`}>{title}</Link>
              <p>{date}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
