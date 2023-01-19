import React from "react";
import { Navbar } from "../components";
import Head from "next/head";
import { Contact } from "../containers";
import { client } from "../client";
import { groq } from "next-sanity";
import { PostCard } from "../components";

const getBlogData = groq`*[_type == "blog"]`;
const getPosts = groq`*[_type == "posts"]`;

export default function blogs({ blog, posts }) {
  console.log(blog, posts);
  return (
    <div>
      <Head>
        <title>CodeIndex | Blogs</title>
      </Head>
      <Navbar />
      <section className="xl:max-w-7xl mx-auto min-h-screen">
        <h1 className="ml-10 text-5xl font-bold font-inter mt-10 text-gray-800">
          {blog[0].heading}
        </h1>
        <p className="text-lg ml-10 mt-4 font-medium max-w-[4xl] font-inter text-gray-700 ">
          {blog[0].description}
        </p>

        <div className="grid grid-cols-3 gap-10 mx-10">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>

      <Contact />
    </div>
  );
}

export async function getStaticProps() {
  const blog = await client.fetch(getBlogData);
  const posts = await client.fetch(getPosts);

  return {
    props: {
      blog,
      posts,
    },
  };
}
