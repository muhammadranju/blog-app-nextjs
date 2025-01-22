import Banner from "@/components/Banner/Banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(" https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 py-10 sm:px-6  lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-6 4xl:grid-cols-7 5xl:grid-cols-8 6xl:grid-cols-9 auto-rows-fr">
          {posts.slice(0, 8).map((post) => (
            <div
              key={post.id}
              className="flex border p-5 rounded-lg hover:shadow-md transition-shadow ease-in-out duration-300  capitalize space-y-3 flex-col items-center justify-center"
            >
              <Link href={`/blogs/${post.id}`}>
                <h1 className="text-xl font-bold">
                  {post.title.length > 20
                    ? post.title.slice(0, 25) + "..."
                    : post.title}
                </h1>
              </Link>
              <p className="text-sm text-slate-700">
                {post.body.length > 100
                  ? post.body.slice(0, 150) + "..."
                  : post.body}
              </p>

              <Link href={`/blogs/${post.id}`}>
                <Button>Read More</Button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <Link href="/blogs">
            <Button variant="">View All Blogs</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
