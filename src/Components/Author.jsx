import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_PUBLISHBOOK, API_SINGLEBOOK, API_VIEWPRIVECY } from "../config";

export default function Author({ userdata }) {
  const [refresh, setRefresh] = useState(true);
  const toggleRefresh = () => setRefresh((p) => !p);
  const [bookrecord, setbookrecord] = useState([]);
  useEffect(() => {
    singlerecord();
  }, [refresh]);
  const [inputs, setInputs] = useState({
    booktittle: "",
    isbn: "",
    nop: "",
  });

  const OnInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const onsubmit = async () => {
    if (inputs.booktittle === "" && inputs.isbn === "" && inputs.nop === "") {
      toast.warning("Please Enter require feild");
    } else if (
      inputs.booktittle === "" ||
      inputs.isbn === "" ||
      inputs.nop === ""
    ) {
      toast.warning("Specific feild require");
    } else {
      await axios
        .post(API_PUBLISHBOOK, {
          info: inputs,
          userid: userdata._id,
        })
        .then((res) => {
          toast.success("Your Book is Publish");
          setInputs({
            booktittle: "",
            isbn: "",
            nop: "",
          });
          toggleRefresh();
        });
    }
  };
  const singlerecord = async () => {
    await axios
      .post(API_SINGLEBOOK, {
        uid: userdata._id,
      })
      .then((res) => {
        setbookrecord(res.data);
      });
  };
  const View = async (element) => {
    const privacy = document.getElementById("privacy");
    const value = privacy.options[privacy.selectedIndex].value;
    await axios
      .post(API_VIEWPRIVECY, {
        privacy: value,
        data: element._id,
      })
      .then((res) => {
        alert("Your Privacy is Changed");
      });
  };
  return (
    <>
      <div className="container position-relative bg-white p-5 mt-5">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            BOOK TITTLE
          </label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => OnInputChange(e)}
            name="booktittle"
            value={inputs.booktittle}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            ISBN
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => OnInputChange(e)}
            name="isbn"
            value={inputs.isbn}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Number of Pages
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => OnInputChange(e)}
            name="nop"
            value={inputs.nop}
          />
        </div>
        <button type="submit" class="btn btn-success" onClick={onsubmit}>
          Publish
        </button>
      </div>
      <div className="container mt-3 position-relative">
        <h1 className="text-white">Your Publish Book</h1>
        <div className="row gy-3 scroll mt-2">
          {bookrecord.map((element, index) => {
            return (
              <>
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="fw-bold">Title of Book:- </span>
                        {element.Title}
                      </h5>
                      <h5 className="card-title">
                        <span className="fw-bold">ISBN:- </span>
                        {element.ISBN}
                      </h5>
                      <h5 className="card-title">
                        <span className="fw-bold">NO. Of pages:- </span>
                        {element.Pages}
                      </h5>
                      <h5 className="card-title">
                        <span className="fw-bold">Status of Book:- </span>
                        {element.Status}
                      </h5>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={() => View(element)}
                        id="privacy"
                      >
                        <option disabled={true}>---Select---</option>
                        <option value="Public">Public</option>
                        <option
                          selected={element.View === "Private" ? true : false}
                          value="Private"
                        >
                          Private
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}