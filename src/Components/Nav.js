import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex flex-col justify-center gap-28 items-center text-white bg-sky-950 min-h-screen w-[16%]">
      <Link
        to="/dashboard"
        className="flex justify-start pl-10 items-center gap-2 w-full"
      >
        <LuLayoutDashboard className="h-5 w-5" /> Dashboard
      </Link>
      <Link
        to="/employee"
        className="flex justify-start pl-10 items-center gap-2 w-full"
      >
        <FaPeopleGroup className="h-5 w-5" /> Employee List
      </Link>
      <Link
        to="/attendance"
        className="flex justify-start pl-10 items-center gap-2 w-full"
      >
        <BsFillPeopleFill className="h-5 w-5" /> Attendance List
      </Link>
      <Link
        to="/report"
        className="flex justify-start pl-10 items-center gap-2 w-full"
      >
        <TbReportAnalytics className="h-5 w-5" /> Attendance Report
      </Link>
    </div>
  );
}
