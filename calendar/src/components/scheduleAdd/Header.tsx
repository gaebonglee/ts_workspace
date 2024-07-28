import React from "react";
import "../../styles/scheduleAdd/Header.scss";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
const Header = () => {
  return (
    <section className="headerSection">
      <div className="subTitle">
        <button>
          <MdOutlineKeyboardDoubleArrowLeft className="blindBtn" />
        </button>
        <div className="enterPage">
          <a className="addSchedule">일정 등록</a>
          <a className="backBtn">이전으로 돌아가기</a>
        </div>
      </div>
      <button className="saveBtn">
        <FaCheck className="icon" />
        저장
      </button>
    </section>
  );
};

export default Header;
