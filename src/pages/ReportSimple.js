import React from "react";
import "./ReportSimple.scss";

const ReportSimple = () => {
  const register = () => {
    console.log("click");
  };

  return (
    <div className="simple">
      <div className="main-title">Report</div>
      <div className="place-area">
        <div className="sub-title">Location</div>
        <div className="place-btn-area">
          <div className="place-btn">
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
            placeholder="Please enter the contents of the report."
          ></textarea>
        </div>
      </div>

      <div className="btn-area">
        <button
          className="btn"
          onClick={() => {
            register();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReportSimple;
