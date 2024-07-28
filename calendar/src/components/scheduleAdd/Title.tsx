import React from "react";
import "../../styles/scheduleAdd/Title.scss";
import TimeOptions from "./TimeSelect";

const Title = () => {
  return (
    <section className="TitleWrap">
      <div className="article title">
        <span className="tit">제목</span>
        <div className="cont">
          <div className="pos_input">
            <input type="text" />
          </div>
          <div className="pos_right">
            <input type="checkbox" />
            <span>중요</span>
          </div>
        </div>
      </div>
      <div className="article place">
        <span className="tit">장소</span>
        <div className="cont">
          <div className="pos_input">
            <input type="text" />
          </div>
          <div className="pos_right">
            <button>지도첨부</button>
          </div>
        </div>
      </div>
      <div className="article date">
        <span className="tit">일시</span>
        <div className="cont">
          <div className="pos_input">
            <input type="date" id="start_date" />
            <div className="timeSelectWrap">
              <select className="selectBox">
                <TimeOptions />
              </select>
            </div>
            <a>~</a>
            <input type="date" id="end_date" />
            <div className="timeSelectWrap">
              <select className="selectBox">
                <TimeOptions />
              </select>
            </div>
          </div>
          <div className="pos_right">
            <input type="checkbox" />
            <span>종일</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
