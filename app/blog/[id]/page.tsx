import { getPostData } from "@/lib/posts";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const postData: PostData = await getPostData(id);

  return {
    title: postData.title,
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  const { id } = await params;
  const postData: PostData = await getPostData(id);

  return (
    <div className="container max-w-2xl mx-auto p-10 prose dark:prose-invert">
      <h1 className="font-extrabold text-3xl mb-10">{postData.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className="border-l-gray-300 dark:border-l-gray-700 border-l-1 pl-4 "
      />
    </div>
  );
}
