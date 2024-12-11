import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PopupWindow() {
  const location = useLocation(); // 현재 경로 가져오기
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // 페이지 로드 시 팝업 표시 조건 확인
  useEffect(() => {
    // '/' 경로에서만 팝업 표시
    if (location.pathname === '/') { 
      const popupLastClosed = localStorage.getItem('popupLastClosed');
      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000;

      if (!popupLastClosed || now - popupLastClosed > oneDay) {
        setIsPopupVisible(true); // 24시간이 지났으면 팝업 표시
      }
    } else {
      setIsPopupVisible(false); // 다른 경로에서는 팝업 숨김
    }
  }, [location.pathname]); // 경로가 변경될 때마다 확인

  // "하루 동안 보지 않기" 버튼 핸들러
  const handleHideForADay = () => {
    const now = new Date().getTime();
    localStorage.setItem('popupLastClosed', now); // 현재 시간을 저장
    setIsPopupVisible(false); // 팝업 닫기
  };

  // "닫기" 버튼 핸들러
  const handleClosePopup = () => {
    setIsPopupVisible(false); // 팝업 닫기
  };

  if (!isPopupVisible) return null;

  return (
    <div className="popup">
      <a
        href="https://dsautoline.com/event/CgPiO452QGTbDersPhav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require('../assets/img/advertisement.png')} // 광고 이미지 경로
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
  );
}

export default PopupWindow;
