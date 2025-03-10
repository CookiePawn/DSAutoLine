import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PopupWindow() {
  const location = useLocation(); // 현재 경로 가져오기
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') { // 경로가 '/' 일 때만 팝업 표시        
      const popupLastClosed = localStorage.getItem('popupLastClosed');
      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000;

      if (!popupLastClosed || now - popupLastClosed > oneDay) {
        setIsPopupVisible(true); // 24시간이 지났으면 팝업 표시
      }
    } else {
      setIsPopupVisible(false); // 다른 페이지에서는 팝업 숨김
    }
  }, [location.pathname]);

  const handleHideForADay = () => {
    const now = new Date().getTime();
    localStorage.setItem('popupLastClosed', now); // 현재 시간을 저장
    setIsPopupVisible(false); // 팝업 닫기
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // 팝업 닫기
  };

  if (!isPopupVisible) return null;

  return (
    <>
      {/* 배경 어둡게 만드는 overlay */}
      <div className="popup-overlay" />

      {/* 팝업 창 */}
      <div className="popup">
        <a
          href="https://dsautoline.com/event/CgPiO452QGTbDersPhav"          
          rel="noopener noreferrer"
        >
          <img
            src={require('../assets/img/new_advertisement.png')} // 광고 이미지 경로
            alt="광고 팝업"
            className="advertisement-img"
          />
        </a>
        <div className="popup-button-container">
          <button className="popup-button" onClick={handleHideForADay}>
            하루 동안 보지 않기
          </button>
          <button className="popup-button" onClick={handleClosePopup}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
}

export default PopupWindow;
