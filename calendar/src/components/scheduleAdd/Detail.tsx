import React, { useState } from "react";
import "../../styles/scheduleAdd/Detail.scss";

//아이콘
import { TfiLayoutSidebarNone } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";

// 스티커 타입 정의
type Sticker = JSX.Element;

const Detail: React.FC = () => {
  const [selectedSticker, setSelectedSticker] = useState<Sticker>(
    <TfiLayoutSidebarNone />
  );

  // 스티커 선택 핸들러
  const handleStickerClick = (sticker: Sticker) => {
    setSelectedSticker(sticker);
  };

  return (
    <section className="detailWrap">
      <div className="article sticker">
        <span className="tit">스티커</span>
        <div className="stickerDesc">
          <div className="selectTumb">{selectedSticker}</div>
          <ul className="historySticker">
            <li
              className="sticker"
              onClick={() => handleStickerClick(<TfiLayoutSidebarNone />)}
            >
              <TfiLayoutSidebarNone />
            </li>
            <li
              className="sticker"
              onClick={() => handleStickerClick(<FaHeart />)}
            >
              <FaHeart />
            </li>
            <li
              className="sticker"
              onClick={() => handleStickerClick(<FaStar />)}
            >
              <FaStar />
            </li>
            <li
              className="sticker"
              onClick={() => handleStickerClick(<FaBirthdayCake />)}
            >
              <FaBirthdayCake />
            </li>
            <li
              className="sticker"
              onClick={() => handleStickerClick(<FaCheck />)}
            >
              <FaCheck />
            </li>
            <li
              className="sticker"
              onClick={() => handleStickerClick(<ImAirplane />)}
            >
              <ImAirplane />
            </li>
          </ul>
        </div>
      </div>
      <div className="article comment">
        <span className="tit">설명</span>
        <div className="cont">
          <textarea placeholder="일정에 필요한 설명을 남기세요." />
        </div>
      </div>
    </section>
  );
};

export default Detail;

// 스티커를 선택한다. 해당 스티커가 <div className="selectTumb"> 태그로 전환
// <li className="sticker"><TfiLayoutSidebarNone /> 를 선택할 경우 스티커 선택없음으로 진행
//
