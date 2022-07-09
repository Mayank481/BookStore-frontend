import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_GETALLBOOK } from "../config";

export default function Home() {
  const [book, setbook] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const toggleRefresh = () => setRefresh((p) => !p);
  useEffect(() => {
    loadbooks();
  }, [refresh]);
  const loadbooks = async () => {
    await axios.get(API_GETALLBOOK).then((res) => {
      setbook(
        res.data.filter((element) => {
          return element.Status === "approve" && element.View === "Public";
        })
      );
      toggleRefresh();
    });
  };
  return (
    <>
      <div className="photo">
        <div className="container mt-3 scrollhome">
          <div className="row gy-3">
            {book.map((element, index) => {
              return (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="card">
                      <img
                        src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        class="img-fluid photo"
                        style={{ height: "300px" }}
                        alt="ReactBook"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <span className="fw-bold">Title of Book:- </span>
                          {element.Title}
                        </h5>
                        <h5 className="card-title">
                          <span className="fw-bold">Name of Author:- </span>
                          {`${element.Author.FullName}`}
                        </h5>
                        <h5 className="card-title">
                          <span className="fw-bold">Price:- </span>
                          {`${element.PRICE}`}
                        </h5>
                        <h5 className="card-title">
                          <span className="fw-bold">Public ON:- </span>
                          {`${element.PUBLISHEDON}`}
                        </h5>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
