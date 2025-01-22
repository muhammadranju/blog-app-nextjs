import Image from "next/image";

const BlogDetail = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const post = await res.json();
  return (
    <div className="container mx-auto capitalize px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <title>Blogs Details | Blogs</title>
      <div className="flex flex-col items-center space-y-5 justify-center shadow-md rounded-lg p-20">
        <h1 className="text-3xl  max-w-5xl text-center font-bold">
          {post.title}
        </h1>
        <p className=" text-slate-700 max-w-3xl text-center">{post.body}</p>
        <Image
          width={1200}
          height={400}
          className="rounded-lg"
          src="https://picsum.photos/id/1009/1200/300"
          alt="blog-image"
        />
      </div>
    </div>
  );
};

export default BlogDetail;
