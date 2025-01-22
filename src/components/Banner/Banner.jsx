import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-slate-950 text-white font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto  px-4 py-20 lg:flex lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            <span className="block">Boost Your Productivity</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
            Boost your productivity with our Latest Blogs and Articles. Discover
            the latest trends and insights in the industry.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/blogs">
              <Button variant="secondary">Explore Blogs</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
