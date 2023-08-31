import React from "react";
import Heading from "../Components/Heading";

export default function AttendanceList() {
  return (
    <div>
      <Heading header="Attendance List" />
      <div className="flex flex-col gap-5 p-10">
        <div className="flex justify-between bg-sky-950 rounded-lg p-6 text-white">
          <div className="flex gap-4">
            <div>
              Show :{" "}
              <select className="text-black rounded-sm w-12 text-center">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>{" "}
              entries
            </div>
          </div>

          <div className="flex items-center gap-3 text-md font-semibold pr-10">
            Search :{" "}
            <input
              className="rounded-sm p-1"
              // onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <table className="w-full table-auto ">
          <thead>
            <tr>
              <th className="border border-gray-400">No.</th>
              <th className="border border-gray-400">Name</th>
              <th className="border border-gray-400">Job Title</th>
              <th className="border border-gray-400">Date</th>
              <th className="border border-gray-400">Day</th>
              <th className="border border-gray-400">Time-In</th>
              <th className="border border-gray-400">Time-Out</th>
              <th className="border border-gray-400">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-4"></td>
              <td className="border border-gray-400 px-4 py-4"></td>
              <td className="border border-gray-400 px-4 py-4"></td>
              <td className="border border-gray-400 px-4 py-4"></td>
              <td className="border border-gray-400 px-4 py-4"></td>
              <td className="border border-gray-400 px-4 py-4"></td>
              <td className="border border-gray-400 px-4 py-4"></td>
              <td className="border border-gray-400 px-4 py-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
