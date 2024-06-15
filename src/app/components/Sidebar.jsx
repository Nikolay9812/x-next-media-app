import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-300" />
      </Link>
      <Link
        href="/"
        className="flex items-center p-3 gap-2 w-fit hover:bg-gray-100 rounded-full transition-all duration-300"
      >
        <HiHome className="w-7 h-7" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button className="bg-blue-400 hover:bg-blue-600 shadow-md font-semibold transition-all duration-300 text-white rounded-full w-48 h-9 hidden xl:inline">
        Sign in
      </button>
    </div>
  );
}
