import React from "react";

const Detail = () => {
  return (
    <section className="detailWrap">
      <div className="article sticker">
        <span>스티커</span>
        <div className="stickerDesc">
          <div className="selectTumb"></div>
          <ul className="historySticker">
            <li className="sticker"></li>
            <li className="sticker"></li>
            <li className="sticker"></li>
            <li className="sticker"></li>
            <li className="sticker"></li>
            <li className="sticker"></li>
          </ul>
        </div>
      </div>
      <div className="article comment">
        <span>설명</span>
        <div className="cont">
          <textarea></textarea>
        </div>
      </div>
    </section>
  );
};

export default Detail;
