import React from 'react';
import "../../styles/scheduleAdd/Title.scss"

const Title = () => {
  return (
    <section className="TitleWrap">
      <div className="titleSection">
        <div className="article title">
          <span>제목</span>
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
          <span>장소</span>
          <div className="cont">
            <div className="pos_input">
              <input />
            </div>
            <div className="pos_right">
              <button>지도첨부</button>
            </div>
          </div>
        </div>
        <div className="article date">
          <span>일시</span>
          <div className="cont">
            <div className="pos_input">
              <input />
            </div>
            <div className="pos_right">
              <input type="checkbox" />
              <span>종일</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;