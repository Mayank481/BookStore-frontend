import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_LOGINUSER } from "../config";

export default function Login({ loadUser }) {
  const navigate = useNavigate();
  // const [data, setdata] = useState(null);
  const [inputs, setInputs] = useState({
    userEmail: "",
    userPassword: "",
  });

  const OnInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    await axios
      .post(API_LOGINUSER, {
        username: inputs.userEmail,
        password: inputs.userPassword,
      })
      .then((res) => {        
        loadUser();
        navigate("/");
      })
      .catch((err) => {
        toast.error("Worng Credential");
        setInputs({
          userEmail: "",
          userPassword: "",
        });
      });
  };
  return (
    <>
      <div
        className="d-flex align-items-center position-relative"
        style={{ height: "90vh" }}
      >
        <div
          className="container bg-white p-5"
          style={{ height: "fit-content" }}
        >
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
              placeholder = "Enter Your Email Address"
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
              placeholder = "Enter your Password"
              name="userPassword"
              value={inputs.userPassword}
            />
          </div>
          <div className="d-flex ms-3">
            <Link
              to="/register"
              className="nav-link text-white btn btn-danger me-2"
            >
              SignUp
            </Link>
            <button
              type="submit"
              className="btn btn-success"
              onClick={onSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <ToastContainer theme="colored" />
    </>
  );
}
