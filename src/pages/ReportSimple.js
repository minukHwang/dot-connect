import React from "react";
import "./ReportSimple.scss";

const ReportSimple = () => {
  return (
    <div>
      <div className="main-title">신고</div>
      <div className="place-area">
        <div className="sub-title">위치</div>
        <div className="place-btn-area">
          <div className="place-btn">
            <div className="place-text">서울특별시 서대문구 연세로5가길 16</div>
            <span class="material-symbols-outlined">arrow_forward_ios</span>
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

export default ReportSimple;
