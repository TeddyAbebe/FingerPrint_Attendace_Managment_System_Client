import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFingerprint } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logout } from "../Actions/adminActions";

export default function Header({ isAuthenticated, setIsAuthenticated }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  const handleLogout = () => {
    dispatch(logout());
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className=" flex justify-between gap-24 p-5 w-full bg-cyan-700 text-white text-xl font-bold font-serif">
      <p>Attendance</p>
      <div className="flex items-center gap-1 text-base font-medium font-mono">
        <BsFingerprint /> DAN Energy Biometric Fingerprint Employee Attendance
        System
      </div>

      {isAuthenticated && (
        <div className="relative flex justify-center items-center gap-2 mr-10">
          <p>{adminInfo?.name}</p>
          {/* <img src={adminInfo?.picture} alt="HR" className="w-10 h-10 rounded-full" /> */}
          <button
            className="hover:text-red-800 text-red-600 rounded-full"
            onClick={handleLogout}
          >
            <FaPowerOff />
          </button>
        </div>
      )}
    </div>
  );
}
