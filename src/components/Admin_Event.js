import React, { useState } from "react";
import '../styles/Admin_Content.css';
import picture from '../assets/picture.png'

const imageError = (img) => {
    let imageSrc;

    try {
        imageSrc = require(`../assets/img/${img}.png`);  // 동적으로 이미지 로드
    } catch (error) {
        imageSrc = require('../assets/img/dsautoline/DSAUTOLINE_car.png');  // 이미지가 없을 경우 대체 이미지 사용
    }

    return imageSrc;
};

export const Admin_EventAdd = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [startDate, setStartDate] = useState({ year: "", month: "", day: "" });
    const [endDate, setEndDate] = useState({ year: "", month: "", day: "" });

    const years = Array.from({ length: 20 }, (_, i) => (new Date().getFullYear() + i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
    const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    const handleEventClick = (eventType, eventSize) => {
        setSelectedEvent(eventType);
        setSelectedSize(eventSize);
    };

    const handleStartDateChange = (e) => {
        const { name, value } = e.target;
        setStartDate({ ...startDate, [name]: value });
    };

    const handleEndDateChange = (e) => {
        const { name, value } = e.target;
        setEndDate({ ...endDate, [name]: value });
    };

    const CloseEventClick = () => {
        setSelectedEvent(null);
    }

    return (
        <div className="admin_content">
            <h2>이벤트 관리 <span>- 이벤트 추가</span></h2>
            <div className="admin_content_event_buttons">
                <button
                    className={`admin_content_event_button ${selectedEvent === "메인" ? "active" : ""}`}
                    onClick={() => handleEventClick("메인", "1280 x 700")}
                >
                    메인 추가(1280px x 700px)
                </button>
                <button
                    className={`admin_content_event_button ${selectedEvent === "빠른 간편 문의" ? "active" : ""}`}
                    onClick={() => handleEventClick("빠른 간편 문의", "1920 x 700")}
                >
                    빠른 간편 문의 추가(1920px x 700px)
                </button>
                <button
                    className={`admin_content_event_button ${selectedEvent === "한정 특가" ? "active" : ""}`}
                    onClick={() => handleEventClick("한정 특가", "1920 x 700")}
                >
                    한정 특가 추가(1920px x 700px)
                </button>
                <button
                    className={`admin_content_event_button ${selectedEvent === "즉시 출고" ? "active" : ""}`}
                    onClick={() => handleEventClick("즉시 출고", "1920 x 700")}
                >
                    즉시 출고 추가(1920px x 700px)
                </button>
                <button
                    className={`admin_content_event_button ${selectedEvent === "메인 띠 배너" ? "active" : ""}`}
                    onClick={() => handleEventClick("메인 띠 배너", "1280 x 100")}
                >
                    메인 띠 배너 추가(1280px x 100px)
                </button>
            </div>

            {selectedEvent && (
                <div className="admin_content_event_addSection">
                    <div className="admin_content_event_addSection_body">
                        <div className="admin_content_event_nameSection">
                            <h1>이벤트명</h1>
                            <input
                                placeholder="이벤트 이름을 입력하세요"
                            />
                        </div>
                        <div className="admin_content_event_dateSection">
                            <h1>기간</h1>
                            <div className="date-picker">
                                <select name="year" value={startDate.year} onChange={handleStartDateChange}>
                                    <option value="">년</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                                <p>년</p>
                                <select name="month" value={startDate.month} onChange={handleStartDateChange}>
                                    <option value="">월</option>
                                    {months.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                                <p>월</p>
                                <select name="day" value={startDate.day} onChange={handleStartDateChange}>
                                    <option value="">일</option>
                                    {days.map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                                <span> ~ </span>
                                <select name="year" value={endDate.year} onChange={handleEndDateChange}>
                                    <option value="">년</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                                <p>년</p>
                                <select name="month" value={endDate.month} onChange={handleEndDateChange}>
                                    <option value="">월</option>
                                    {months.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                                <p>월</p>
                                <select name="day" value={endDate.day} onChange={handleEndDateChange}>
                                    <option value="">일</option>
                                    {days.map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                                <p>일</p>
                            </div>
                        </div>
                        <div className="admin_content_event_bannerSection">
                            <h3>배너 사진 첨부하기</h3>
                            <span>! {selectedSize} 사이즈 이미지를 넣어주세요!</span>
                            <img src={picture} alt="배너 미리보기" />
                            <div className="admin_content_event_banner_img"></div>
                        </div>
                        <div className="admin_content_event_mainSection">
                            <h3>메인 사진 첨부하기</h3>
                            <img src={picture} alt="사진 미리보기" />
                            <div className="admin_content_event_main_img"></div>
                            <div className="admin_content_event_add_buttonSection">
                                <button className="admin_content_save_button" >추가</button>
                                <button className="admin_content_close_button" onClick={CloseEventClick}>취소</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export const Admin_EventEdit = () => {
    const [EventList, setEventList] = useState([
        { id: 1, name: '이벤트 1', date: '2023.11 ~ 2023.12 '},
        { id: 2, name: '이벤트 2', date: '2023.12 ~ 2024.01 '},
        { id: 3, name: '이벤트 3', date: '2024.01 ~ 2024.02 '},
    ]);


    return (
        <div className="admin_content">
            <h2>이벤트 <span>- 이벤트 수정 및 삭제</span></h2>
            <div className="header-row">
                {/* <input type="checkbox" /> */}
            </div>
            <div className="admin_content_HotdealList">
                {EventList.length === 0 ? (
                    <p>차량이 없습니다.</p>
                ) : (
                    EventList.map((item) => (
                        <div className="admin_content_HotdealItem" key={item.id}>
                            <img src={imageError(`car/${item.img}`)} alt="item" className="admin_content_hotdeal-image" />
                            <div className="admin_content_hotdeal-info">
                                <h1>{item.name}</h1>
                                <div className='admin_content_event_infosub'>

                                </div>
                                <div className='admin_content_event_infosub'>
                                    <p>{item.date}</p>
                                </div>
                                <div className="admin_content_hotdeal_buttonSection">
                                    <button className="admin_content_edit-button">수정</button>
                                    <button className="admin_content_delete-button">삭제</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
