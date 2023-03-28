import React from "react";
import "./ReportDetail.scss";

const ReportDetail = () => {
  return (
    <div className="detail">
      <div className="title-box">
        <div className="title-text">민원을 작성해주세요.</div>
        <div className="sub-text">
          Lorem ipsum dolor sit amet consectetur. At vestibulum vulputate vitae
          gravida aenean sem ac.
        </div>
      </div>

      <div className="picture-area">
        <div className="sub-title">사진</div>
        <div className="picture-btn-area">
          <div className="picture-add">
            <span class="material-symbols-outlined">photo_camera</span>
          </div>
        </div>
      </div>

      <div className="place-area">
        <div className="sub-title">위치</div>
        <div className="place-btn-area">
          <div className="place-btn">
            <div className="place-text">서울특별시 서대문구 연세로5가길 16</div>
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </div>
        <div className="place-input-area">
          <input
            type="text"
            className="place-input"
            placeholder="상세 정보를 입력하세요."
          />
        </div>
      </div>

      <div className="text-area">
        <div className="sub-title">민원내용</div>
        <div className="text-box-area">
          <textarea
            className="text-box"
            cols="30"
            rows="10"
            placeholder="민원 내용을 입력해주세요."
          ></textarea>
        </div>
      </div>

      <div className="btn-area">
        <button className="btn">등록하기</button>
      </div>
    </div>
  );
};

export default ReportDetail;
