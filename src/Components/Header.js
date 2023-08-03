import React from "react";
import { BsFingerprint } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex gap-10 p-5 w-[98.9vw] bg-cyan-700 text-white text-xl font-bold font-serif">
      Attendance System
      <div className="flex items-center gap-1 text-base font-medium font-mono">
        <BsFingerprint /> DAN Energy Biometric Fingerprint Employee Attendance
        System
      </div>
    </div>
  );
}
