import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DanEnergy from "../Assets/DanEnergy.gif";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../Actions/adminActions";

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
  const [message, setMessage] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;

  useEffect(() => {
    if (adminInfo) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    }
  }, [navigate, adminInfo, setIsAuthenticated]);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password, picture));
      setIsRegistered(true);
    }
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

  const adminPicture = (pictures) => {
    if (!pictures) {
      return;
    }

    if (
      pictures.type === "image/jpeg" ||
      pictures.type === "image/png" ||
      pictures.type === "image/jpg"
    ) {
      const data = new FormData();

      data.append("file", pictures);
      data.append("upload_preset", "attendance");
      data.append("cloud_name", "teddyabebe");
      fetch("https://api.cloudinary.com/v1_1/teddyabebe/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url);
          setPicture(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return console.error("Please Select an Image");
    }
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
            {message && <ErrorMessage message={message} />}
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={loginHandler}
                    className="border border-black w-24 p-1 rounded text-base font-bold  hover:bg-[#0E7490] hover:text-white hover:tracking-widest 3xl:text-3xl 3xl:w-36"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
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
                  onChange={(e) => adminPicture(e.target.files[0])}
                />

                <div className="flex justify-center">
                  <button
                    onClick={registerHandler}
                    className="border border-black w-24 p-1 rounded text-base font-bold  hover:bg-[#0E7490] hover:text-white 3xl:text-3xl 3xl:w-36"
                  >
                    Register
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="3xl:text-3xl">
          <p>
            {isRegistered
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              to="/"
              onClick={handleToggleRegistration}
              className=" font-bold hover:text-[#00FF00] "
            >
              {isRegistered ? "Register" : "Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
