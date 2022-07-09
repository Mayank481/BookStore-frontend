import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_APPROVE, API_GETALLBOOK } from "../config";

export default function Admin() {
  const [refresh, setRefresh] = useState(true);
  const toggleRefresh = () => setRefresh((p) => !p);
  const [book, setbook] = useState([]);
  useEffect(() => {
    loadbooks();
  }, [refresh]);
  const Approve = async (element) => {
    await axios.post(API_APPROVE, { uid: element._id }).then((res) => {
      toast.success("Approved");
      toggleRefresh();
    });
  };
  const loadbooks = async () => {
    await axios.get(API_GETALLBOOK).then((res) => {
      setbook(res.data);
    });
  };
  return (
    <>
      <div className="admin">
        <div className="container scrolladmin">
          <h1>Admin</h1>
          <div className="row gy-3">
            {book.map((element, index) => {
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
                          <span className="fw-bold">PRICE:- </span>
                          {element.PRICE}
                        </h5>
                        <h5 className="card-title">
                          <span className="fw-bold">NO. Of PUBLISHEDON:- </span>
                          {element.PUBLISHEDON}
                        </h5>
                        <h5 className="card-title">
                          <span className="fw-bold">Name of Author:- </span>
                          {`${element.Author.FullName}`}
                        </h5>
                        <h5 className="card-title">
                          <span className="fw-bold">Status of Book:- </span>
                          {element.Status}
                        </h5>
                        <h5 className="card-title">
                          <span className="fw-bold">View:- </span>
                          {element.View}
                        </h5>
                        <button
                          className="btn btn-primary"
                          onClick={() => Approve(element)}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
