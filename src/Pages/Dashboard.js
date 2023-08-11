import React from "react";

import DanEnergy from "../Assets/DanEnergy.gif";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-start w-[84vw] h-screen">
        <img
          src={DanEnergy}
          alt="DanEnergy"
          className="h-[50%]"
        />
      </div>
    </div>
  );
}
