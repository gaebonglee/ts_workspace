import React from "react";
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
          <a>일정 등록</a>
          <a className="backBtn">이전 페이지</a>
        </div>
      </div>
      <button>
        <FaCheck className="saveBtn" />
        저장
      </button>
    </section>
  );
};

export default Header;
