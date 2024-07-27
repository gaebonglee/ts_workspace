import React from "react";
//스티커
import { TfiLayoutSidebarNone } from "react-icons/tfi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiHospitalLine } from "react-icons/ri";
import { FaCheckDouble } from "react-icons/fa6";

const ScheduleAdd = () => {
  return (
    <section className="scheduleAdd">
      <div className="saveBtn">
        <button>저장</button>
      </div>
      <div className="titleWrap">
        <a>제목</a>
        <input type="text" id="titleInput" />
        <div className="importantWrap">
          <input type="checkbox" />
          <a>중요</a>
        </div>
      </div>
      <div className="dateWrap">
        <a>일시</a>
      </div>
      <div className="stickerWrap">
        <a>
          <TfiLayoutSidebarNone />
        </a>
        <a>
          <TfiLayoutSidebarNone />
        </a>
        <a>
          <LiaBirthdayCakeSolid />
        </a>
        <a>
          <FaStar />
        </a>
        <a>
          <FaHeart />
        </a>
        <a>
          <RiHospitalLine />
        </a>
        <a>
          <FaCheckDouble />
        </a>
      </div>
      <div className="explanationWrap">
        <a>설명</a>
        <input type="text" id="explanatioInput" />
      </div>
    </section>
  );
};

export default ScheduleAdd;
