import { useState } from "react";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function SocialIcon() {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex items-center">
      <div className="">
        <div className="flex items-center mr-1 p-1 bg-[#F5F5F5] dark:bg-gray-600 rounded-full">
          <Link className="px-2 py-1" href="">
            <BsGithub className="w-6 h-6 text-blue-700 dark:text-slate-200" />
          </Link>
          <Link className="px-2" href="">
            <BsFacebook className="w-6 h-6 text-blue-700 dark:text-slate-200" />
          </Link>
          <Link className="px-2" href="">
            <BsLinkedin className="w-6 h-6 text-blue-700 dark:text-slate-200" />
          </Link>

          <button
            onClick={changeMode}
            className="pl-4 pr-4 border-l-2 border-blue-700 dark:border-slate-200"
          >
            {theme === "dark" ? (
              <BsSun className="w-6 h-6 text-blue-700 dark:text-slate-200" />
            ) : (
              <BsMoonStars className="w-6 h-6 text-blue-700 dark:text-slate-200" />
            )}
          </button>
        </div>
      </div>
      <div className="w-[40px] h-[1.3px] bg-[#F5F5F5] dark:bg-gray-600"></div>
    </div>
  );
}
