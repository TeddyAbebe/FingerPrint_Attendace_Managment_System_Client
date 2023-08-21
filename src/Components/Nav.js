import React from "react";
import { FaLeaf } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex flex-col justify-center items-center gap-32 text-white bg-sky-950 min-h-screen w-[16%] ">
      <Link
        to="/dashboard"
        className="flex justify-start pl-10 items-center gap-2 w-full 3xl:text-4xl 3xl:gap-4"
      >
        <FaLeaf className="h-5 w-5 text-[#00FF00] 3xl:h-10 3xl:w-10" />
        Dashboard
      </Link>

      <Link
        to="/employees"
        className="flex justify-start pl-10 items-center gap-2 w-full 3xl:text-4xl 3xl:gap-4"
      >
        <FaPeopleGroup className="h-5 w-5 text-[#00FF00] 3xl:h-10 3xl:w-10" />
        Employee List
      </Link>

      <Link
        to="/attendance"
        className="flex justify-start pl-10 items-center gap-2 w-full 3xl:text-4xl 3xl:gap-4"
      >
        <BsFillPeopleFill className="h-5 w-5 text-[#00FF00] 3xl:h-10 3xl:w-10" />{" "}
        Attendance List
      </Link>

      <Link
        to="/report"
        className="flex justify-start pl-10 items-center gap-2 w-full 3xl:text-4xl 3xl:gap-4"
      >
        <TbReportAnalytics className="h-5 w-5 text-[#00FF00] 3xl:h-10 3xl:w-10" />{" "}
        Attendance Report
      </Link>
    </div>
  );
}
