import React from "react";
import Heading from "../Components/Heading";

export default function AttendanceReport() {
  return (
    <div>
      <Heading header="Attendance Report" />
      <div className="flex flex-col gap-5 p-10">
        <div className="flex flex-col gap-10 bg-sky-950 rounded-lg p-6 text-white">
          <div className="flex justify-between ">
            <div className="flex gap-4">
              <div>
                From : <input type="date" className="text-black rounded p-1" />
              </div>
              <div>
                To : <input type="date" className="text-black rounded p-1" />
              </div>

              <button className="mr-2 bg-sky-800 hover:bg-green-500 text-white font-bold text-xs px-2 rounded tracking-widest">
                View Report
              </button>
            </div>

            <div className="flex items-center gap-3 text-md font-semibold pr-10">
              Search : <input className="rounded-sm p-1 text-black" />
            </div>
          </div>

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
            <tr className="border border-gray-400 text-center w-full">
              No data available
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
