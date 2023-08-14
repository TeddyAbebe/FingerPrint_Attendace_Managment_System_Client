import React, { useState } from "react";
import { Link } from "react-router-dom";
import DanEnergy from "../Assets/DanEnergy.gif";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function LandingPage() {
  const [isRegistered, setIsRegistered] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    // Perform registration logic
    // Once registration is successful, set isRegistered to true
    setIsRegistered(true);
  };

  const handleToggleRegistration = () => {
    setIsRegistered(!isRegistered);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex">
      <div className="w-[40%] flex justify-center items-center">
        <img src={DanEnergy} alt="DanEnergy" className="" />
      </div>

      <div className="flex flex-col justify-center items-center w-[50%]">
        <div className="w-[60%] mb-10">
          <form className="flex flex-col gap-5">
            {isRegistered ? (
              <>
                {/* Login Fields */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-black p-3 rounded-md"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    className="w-full border border-black p-3 rounded-md"
                  />

                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="border border-black w-24 p-1 rounded text-base font-bold font-serif hover:bg-[#0E7490] hover:text-white hover:tracking-widest">
                    Login
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-5">
                {/* Registration Fields */}
                <input
                  type="name"
                  placeholder="Name"
                  required
                  className="w-full border border-black p-3 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-black p-3 rounded-md"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    className="w-full border border-black p-3 rounded-md"
                  />

                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                    className="w-full border border-black p-3 rounded-md"
                  />

                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleRegister}
                    className="border border-black w-24 p-1 rounded text-base font-bold font-serif hover:bg-[#0E7490] hover:text-white"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div>
          <p>
            {isRegistered
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              to="/"
              onClick={handleToggleRegistration}
              className="font-serif font-bold"
            >
              {isRegistered ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
