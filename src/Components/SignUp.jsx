import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_REGUSER } from "../config";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    userFullName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
    userDateOfBirth: "",
  });

  const OnInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    if (
      inputs.userFullName === "" &&
      inputs.userAge === "" &&
      inputs.userEmail === "" &&
      inputs.userPassword === "" &&
      inputs.userDateOfBirth === ""
    ) {
      toast.warning("Please Enter Require Field");
    } else if (
      inputs.userFullName === "" ||
      inputs.userAge === "" ||
      inputs.userEmail === "" ||
      inputs.userPassword === "" ||
      inputs.userDateOfBirth === ""
    ) {
      toast.warning("Specific feild left please provide");
    } else {
      await axios.post(API_REGUSER, inputs).then((res) => {
        toast.success("Registration Successfully");
      });
      setInputs({
        userFullName: "",
        userAge: "",
        userEmail: "",
        userPassword: "",
        userDateOfBirth: "",
      });
    }
  };
  return (
    <>
      <div
        className="d-flex align-items-center position-relative"
        style={{ height: "90vh" }}
      >
        <div className="container bg-white mt-5 p-5 shadow-lg bg-body rounded">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              FullName
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => OnInputChange(e)}
              name="userFullName"
              value={inputs.userFullName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => OnInputChange(e)}
              name="userAge"
              value={inputs.userAge}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => OnInputChange(e)}
              name="userEmail"
              value={inputs.userEmail}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => OnInputChange(e)}
              name="userPassword"
              value={inputs.userPassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              DateOfBirth
            </label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => OnInputChange(e)}
              name="userDateOfBirth"
              value={inputs.userDateOfBirth}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>

      <ToastContainer theme="colored" />
    </>
  );
}
