import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className=" md:h-[35rem] lg:px-32  w-full pb-6 "  id="blog">
      <section className="pt-[5rem] md:grid md:grid-cols-2 ">
        <div className="col-span-1 w-full md">
          <Image
            width={700}
            height={100}
            src="/images/blog.jpg"
            alt="Blog"
            className="w-full"
          />
        </div>
        <div>
          <p className="md:mt-32 px-3 mb-10 text-xl font-inter font-semibold text-gray-700 tracking-wider text-justify">
            Embrace every opportunity to learn and enhance your knowledge, for
            it is the foundation of personal and professional growth.
          </p>
          <Link
            href="/blogs"
            className="px-5 mx-2 py-3 rounded-lg border-2 font-inter text-xl font-bold text-slate-200 tracking-normal bg-gradient-to-r from-blue-700 to-blue-500 "
          >
            Explore Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
