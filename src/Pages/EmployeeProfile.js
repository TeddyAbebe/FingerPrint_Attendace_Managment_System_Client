import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeAction } from "../Actions/employeeActions";
import Heading from "../Components/Heading";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorMessage from "../Components/ErrorMessage";
import Loader from "../Components/Loader";

function EmployeeProfile() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [picture, setPicture] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateEmployee = useSelector((state) => state.updateEmployee);
  const { error } = updateEmployee;

  const { id } = useParams();

  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await axios.get(
          `https://finger-print-server.onrender.com/api/employees/${id}`
        );

        setName(data.name);
        setJobTitle(data.jobTitle);
        setEmailAddress(data.emailAddress);
        setMobileNo(data.mobileNo);
        setPicture(data.photo);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetching();
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(
      updateEmployeeAction(id, name, jobTitle, emailAddress, mobileNo, picture)
    ).then(() => {
      navigate("/employees");
    });

    if (!name || !jobTitle || !emailAddress || !mobileNo || !picture) {
      return;
    }
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
    <div>
      <Heading header="Employee Profile" />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="flex items-center bg-sky-950 border-l mx-10 rounded-2xl mt-10">
          <div className="flex flex-col justify-center py-7 pb-10 md:pb-7 p-5 w-[60%]">
            <Link
              className="flex w-fit hover:cursor-pointer"
              to="/employees"
            >
              <BsFillArrowLeftSquareFill className="h-8 w-8 rounded-full text-white hover:text-[#00FF00]" />
            </Link>

            <form
              onSubmit={handleUpdate}
              className="flex flex-col gap-2 p-4 text-black w-[70%]"
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
                className="w-1/2 hover:cursor-pointer"
              />
              <span className="flex justify-evenly items-center">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold h-12 rounded-md w-[30%]"
                >
                  {updateEmployee.loading ? <Loader /> : "Update"}
                </button>
              </span>
            </form>
          </div>
          <div className=" flex justify-center">
            <img src={picture} alt="" className="w-[230px] rounded-3xl" />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeProfile;
