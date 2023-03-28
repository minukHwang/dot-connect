import React from "react";
import "./ReportDetail.scss";

const ReportDetail = () => {
  return (
    <div className="detail">
      <div className="title-box">
        <div className="title-text">Write Report</div>
        <div className="sub-text">
          Lorem ipsum dolor sit amet consectetur. At vestibulum vulputate vitae
          gravida aenean sem ac.
        </div>
      </div>

      <div className="picture-area">
        <div className="sub-title">Picture</div>
        <div className="picture-btn-area">
          <div className="picture-add">
            <span className="material-symbols-outlined">photo_camera</span>
          </div>
        </div>
      </div>

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
            placeholder="Please enter contents of report."
          ></textarea>
        </div>
      </div>

      <div className="btn-area">
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default ReportDetail;
