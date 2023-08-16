import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFingerprint } from "react-icons/bs";
import { MdArrowDropDownCircle } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Header({ isAuthenticated, setIsAuthenticated }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("isAuthenticated:", isAuthenticated);

  const [showOptions, setShowOptions] = useState(false);

  // const userLogin = useSelector((state) => state.userLogin);

  // const { adminInfo } = userLogin;

  useEffect(() => {
    if (isAuthenticated) {
      setShowOptions(false);
    }
  }, [isAuthenticated]);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminInfo");
    setIsAuthenticated(false); // Update the authentication state
    navigate("/");
  };

  return (
    <div className=" flex justify-between gap-24 p-5 w-full bg-cyan-700 text-white text-xl font-bold font-serif">
      <p>Employees Attendance</p>
      <div className="flex items-center gap-1 text-base font-medium font-mono">
        <BsFingerprint /> DAN Energy Biometric Fingerprint Employee Attendance
        System
      </div>

      {isAuthenticated && (
        <div className="relative flex justify-center items-center gap-2 mr-10">
          <p>DanEnergy HR</p>
          <button
            className="hover:border hover:border-white border border-cyan-700 hover:text-[#00FF00] rounded-full"
            onClick={toggleOptions}
          >
            <MdArrowDropDownCircle />
          </button>

          {showOptions && (
            <div className="absolute flex flex-col z-10 bg-cyan-700 -right-10 top-10 py-4 px-4 gap-3 rounded-3xl shadow-md ">
              <div className="flex justify-between items-center hover:bg-gray-300  rounded-xl  px-1 py-1 gap-1 hover:text-gray-700">
                <CgProfile className="" />
                <button
                  className=" text-xs font-serif font-semibold tracking-wider"
                  // onClick={() => setTheme("default")}
                >
                  Admin Profile
                </button>
              </div>

              <div className="flex items-center hover:bg-gray-300 rounded-lg px-1 py-1 gap-1 hover:text-gray-700">
                <TbLogout2 className="" />
                <button
                  className="text-xs font-serif font-semibold tracking-wider"
                  onClick={handleLogout}
                >
                  LogOut
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
