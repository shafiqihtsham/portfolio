import { getPostData, getAllPostIds } from "@/lib/posts";

type Params = Promise<{
  id: string;
}>;

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

export async function generateStaticParams() {
  const postData = getAllPostIds();
  return postData;
}

// -< Post >-
export default async function Post(props: { params: Params }) {
  const { id } = await props.params;
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
