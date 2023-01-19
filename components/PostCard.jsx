import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="w-[20rem] border-2 rounded-md mt-7">
      <div>
        <img
          src={urlFor(post.image)}
          className="w-full rounded-md object-cover h-[12rem] shadow-md mb-2"
          alt=""
        />
        <div className="px-3 ">
          <Link
            className="text-lg text-justify font-semibold underline font-inter text-blue-900"
            href={`${post.link}`}
          >
            {post.title}
          </Link>
        </div>
        <p className="mt-2 px-3 indent-4 text-justify mb-3 text-md font-inter">
          {post.description}
        </p>

        <div className="mb-4">
          <span className="my-4 font-inter font-semibold text-blue-500 ml-3 border-l-4 border-gray-500">
            {" "}
            &nbsp; {post.date}
          </span>
        </div>
      </div>
    </div>
  );
}
