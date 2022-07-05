import React from "react";
import { Link } from "react-router-dom";
import { API_LOGOUTUSER } from "../config";

export default function Navbar({ refresh, userdata }) {
  const onsumbit = async () => {
    window.open(API_LOGOUTUSER, "_self");
    refresh();
  };
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              BookStore
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <div className="d-flex align-items-center me-3">
                <div className="logo me-3">
                  <i className="fa-solid fa-user fa-2x"></i>
                </div>
                <div className="text-white">
                  {userdata.FirstName + " " + userdata.LastName}
                </div>
              </div>
              <div class="d-flex">
                <button
                  class="btn btn-outline-success"
                  type="submit"
                  onClick={onsumbit}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
