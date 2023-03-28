import React from "react";
import "./ReportSimple.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const ReportSimple = () => {
  // const [location, setLocation] = useState("");
  // const [picture, setPicture] = useState("");
  // const [text, setText] = useState("");
  const [values, setValues] = useState({
    content: "",
    id: "",
    image: "",
    location: "",
  });

  const inputText = (event) => {
    setValues({
      ...values,
      content: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const placeSearch = () => {};

  const register = () => {
    console.log(values);
    axios.post(
      "https://dot-connect-374203.du.r.appspot.com/reports/upload",
      values
    );
  };

  return (
    <form className="simple" onSubmit={handleSubmit}>
      <div className="main-title">Report</div>
      <div className="place-area">
        <div className="sub-title">Location</div>
        <div className="place-btn-area">
          <div
            className="place-btn"
            onClick={() => {
              placeSearch();
            }}
          >
            <div className="place-text">Find Location</div>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
        <div className="place-input-area">
          <input
            type="text"
            className="place-input"
            placeholder="Please enter detail of location."
          />
        </div>
      </div>

      <div className="text-area">
        <div className="sub-title">Report Detail</div>
        <div className="text-box-area">
          <textarea
            className="text-box"
            cols="30"
            rows="10"
            placeholder="Please enter contents of report."
            onChange={(event) => inputText(event)}
          ></textarea>
        </div>
      </div>

      <div className="btn-area">
        <button
          type="submit"
          className="btn"
          onClick={() => {
            register();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReportSimple;
