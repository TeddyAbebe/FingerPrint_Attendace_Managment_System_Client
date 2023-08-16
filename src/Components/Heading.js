import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Heading({ header }) {
  return (
    <div className="flex justify-between items-center bg-slate-300 w-[84vw] p-5 font-serif font-bold text-lg ">
      <h1>{header}</h1>
      <Link
        to="/dashboard"
        className="flex items-center gap-1 text-black text-md font-bold pr-10"
      >
        <FaLeaf className="h-9 w-9 text-green-500 hover:text-[#00FF00]" />
      </Link>
    </div>
  );
}