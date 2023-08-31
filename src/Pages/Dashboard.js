import React from "react";
import DanEnergy from "../Assets/DanEnergy.gif";
import { FaListCheck, FaPeopleRoof } from "react-icons/fa6";
import { HiArrowCircleRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const employeeList = useSelector((state) => state.employeeList);
  const { employees } = employeeList;
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex justify-center items-start w-[84vw] h-[30rem]">
        <img src={DanEnergy} alt="DanEnergy" className="h-full" />
      </div>

      <div className="flex justify-around">
        <div className=" bg-sky-500 w-1/3 h-52 rounded-lg flex flex-col justify-between p-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-5xl font-extrabold text-gray-700">
                {employees?.length}
              </p>
              <p className="text-xl">No. of Registered Employee</p>
            </div>
            <FaListCheck className="h-24 w-24 text-gray-700" />
          </div>

          <div className="flex justify-center items-center gap-1">
            <Link to="/employees">
              <button className="flex justify-center items-center gap-1 px-2 py-1 rounded-md hover:bg-sky-700 hover:text-white">
                More Info <HiArrowCircleRight />
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-yellow-400 w-1/3 h-52 rounded-lg flex flex-col justify-between p-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-5xl font-extrabold text-gray-700">
                0
              </p>
              <p className="text-xl text-center">
                No. of Attendance
              </p>
            </div>
            <FaPeopleRoof className="h-24 w-24 text-gray-700" />
          </div>

          <div className="flex justify-center items-center gap-1">
            <Link to="/attendance">
              <button className="flex justify-center items-center gap-1 px-2 py-1 rounded-md hover:bg-yellow-600 hover:text-white">
                More Info <HiArrowCircleRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
