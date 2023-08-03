import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Heading({ header }) {
  return (
    <div className="flex justify-between items-center bg-slate-300 w-[84vw] p-5 font-serif font-bold text-lg ">
      <h1>{header}</h1>
      <Link
        to="/"
        className="flex items-center gap-1 text-black text-sm font-medium pr-10"
      >
        <AiFillHome className="h-5 w-5" /> Home
      </Link>
    </div>
  );
}