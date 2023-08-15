import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DanEnergy from "../Assets/DanEnergy.gif";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";

export default function LandingPage({ setIsAuthenticated }) {
  const [isRegistered, setIsRegistered] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [picMessage, setPicMessage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const adminInfo = localStorage.getItem("adminInfo");

    if (adminInfo) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);

      localStorage.setItem("adminInfo", JSON.stringify(data));
      setLoading(false);
      setError(false);
      setIsAuthenticated(true);

      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  const registerHandler = (event) => {
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
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex">
      <div className="w-[40%] flex justify-center items-center">
        <img src={DanEnergy} alt="DanEnergy" className="" />
      </div>

      <div className="flex flex-col justify-center items-center w-[50%]">
        <div className="w-[60%] mb-10">
          <form>
            {error && <ErrorMessage message={error} />}
            {loading && <Loader />}
            {isRegistered ? (
              <span className="flex flex-col gap-5 mt-5">
                {/* Login Fields */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-black p-3 rounded-md hover:cursor-pointer hover:border-[#00FF00]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    className="w-full border border-black p-3 rounded-md hover:cursor-pointer hover:border-[#00FF00]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    onClick={loginHandler}
                    className="border border-black w-24 p-1 rounded text-base font-bold font-serif hover:bg-[#0E7490] hover:text-white hover:tracking-widest"
                  >
                    Login
                  </button>
                </div>
              </span>
            ) : (
              <div className="space-y-5">
                {/* Registration Fields */}
                <input
                  type="name"
                  placeholder="Name"
                  required
                  className="w-full border border-black hover:cursor-pointer hover:border-[#00FF00] p-3 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full border border-black hover:cursor-pointer hover:border-[#00FF00] p-3 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    className="w-full border border-black hover:cursor-pointer hover:border-[#00FF00] p-3 rounded-md"
                    value={[password]}
                    onChange={(e) => setPassword(e.target.value)}
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
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    required
                    className="w-full border border-black p-3 rounded-md hover:cursor-pointer hover:border-[#00FF00]"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={handleToggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <AiFillEye />
                    ) : (
                      <AiFillEyeInvisible />
                    )}
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  label="Upload Profile Picture"
                  className="border rounded-md p-1 hover:cursor-pointer hover:border-[#00FF00]"
                  // onChange={(e) => setAvatar(e.target.files[0])}
                />

                <div className="flex justify-center">
                  <button
                    onClick={registerHandler}
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
              className="font-serif font-bold hover:text-[#00FF00]"
            >
              {isRegistered ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
