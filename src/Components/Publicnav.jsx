import React from "react";
import { Link } from "react-router-dom";

export default function Publicnav() {
  return (
    <div>
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
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/" class="nav-link active" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/register" class="nav-link">
                      SignUp
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/login" class="nav-link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
