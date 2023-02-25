import React from "react";

export default function Blog() {
  return (
    <div
      className="py-14 flex flex-col space-y-10 bg-[#F2F3FF] items-center "
      id="Blog"
    >
      <h1 className="text-[48px] font-poppins text-center font-bold">
        Explore our Blog
      </h1>
      <p className="text-center font-poppins text-[16px] max-w-2xl text-gray">
        Embrace every opportunity to learn and enhance your knowledge, for it is
        the foundation of personal and professional growth.
      </p>
      <button className="py-3 px-8 border border-gray-200  text-white bg-blue hover:bg-blue-800 rounded-md hover: mt-4">
        Explore Blog
      </button>
    </div>
  );
}
