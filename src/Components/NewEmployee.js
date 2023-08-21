import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeAction } from "../Actions/employeeActions";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const EmployeeForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [photo, setPhoto] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  const dispatch = useDispatch();

  const addEmployee = useSelector((state) => state.addEmployee);

  const { loading, error } = addEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !jobTitle || !emailAddress || !mobileNo || !photo) return;
    dispatch(addEmployeeAction(name, jobTitle, emailAddress, mobileNo, photo));

    setName("");
    setJobTitle("");
    setEmailAddress("");
    setMobileNo("");
    setPhoto(
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    );

    onClose();
  };

  const employeePicture = (pictures) => {
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
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Upload failed with status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log(data.url);
          setPhoto(data.url.toString());
        })
        .catch((err) => {
          console.error("Error uploading image:", err);
        });
    } else {
      return console.error("Please Select a Valid Image (JPEG/PNG/JPG)");
    }
  };

  return (
    <div className="fixed w-[79vw] mx-10 py-10 flex justify-end md:justify-center items-center text-white bg-[#00000060] rounded-xl">
      <div className="flex flex-col bg-cyan-500 py-7 pb-10 md:pb-7 shadow-xl rounded-2xl p-5 gap- w-full md:w-[50%]">
        <div
          className="flex w-fit border rounded-full hover:cursor-pointer hover:border-black"
          onClick={onClose}
        >
          <IoIosCloseCircle className="h-8 w-8 hover:text-red-700" />
        </div>

        {error && <ErrorMessage message={error} />}
        {loading && <Loader />}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 p-4 text-black"
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="rounded-md p-2"
            required
          />

          <input
            type="text"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Job Title"
            className="rounded-md p-2"
            required
          />

          <input
            type="email"
            name="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Email Address"
            className="rounded-md p-2"
            required
          />

          <input
            type="tel"
            name="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            placeholder="Mobile No"
            className="rounded-md p-2"
            required
          />
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => employeePicture(e.target.files[0])}
            className="w-1/2 hover:cursor-pointer p-1 border border-cyan-500 hover:border-[#00FF00] rounded"
          />
          <span className="flex justify-evenly items-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md w-[50%]"
            >
              Add Employee
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
