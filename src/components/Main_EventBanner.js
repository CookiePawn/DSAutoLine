import React, { useState, useEffect, useRef } from 'react';
import '../styles/Main_EventBanner.css';
import { eventAxios, fastFAQAxios } from '../services/Request';
import Loading from "../components/Loading";
import { TermsofInformationPopup } from '../components/PopUp';
import useFastFAQStore from '../zustand/store';

const BannerSlider = () => {
    const { name, setName, phone, setPhone } = useFastFAQStore();

    const [eventList, setEventList] = useState(null);
    const [car, setCar] = useState('');
    const [infoSelect1, setInfoSelect1] = useState(false);
    const [infoSelect2, setInfoSelect2] = useState(false);
    const [isUsePopupVisible, setIsUsePopupVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isSliding, setIsSliding] = useState(true);
    const transitionRef = useRef(true);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await eventAxios(null, 0);
            const filteredEvents = response.filter((item) => item.type === 0);
            setEventList([filteredEvents[filteredEvents.length - 1], ...filteredEvents, filteredEvents[0]]);
        };
        fetchData();
    }, []);

    useEffect(() => {
        startSliding();
        return () => stopSliding();
    }, [currentIndex, eventList, isSliding]);

    const startSliding = () => {
        if (isSliding) {
            stopSliding();
            intervalRef.current = setInterval(() => {
                handleNext();
            }, 5000);
        }
    };

    const stopSliding = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const toggleSliding = () => {
        setIsSliding(!isSliding);
    };

    const handleNext = () => {
        if (eventList && eventList.length > 0) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (eventList && eventList.length > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    useEffect(() => {
        if (eventList) {
            if (currentIndex === 0) {
                setTimeout(() => {
                    transitionRef.current = false;
                    setCurrentIndex(eventList.length - 2);
                }, 500);
            } else if (currentIndex === eventList.length - 1) {
                setTimeout(() => {
                    transitionRef.current = false;
                    setCurrentIndex(1);
                }, 500);
            } else {
                transitionRef.current = true;
            }
        }
    }, [currentIndex, eventList]);

    const clickFunction = async () => {
        if (infoSelect1 && infoSelect2 && name !== '' && phone !== '' && car !== '') {
            await fastFAQAxios({
                name: name,
                phone: phone,
                car_name: car,
                type: '기업상담',
            });
            alert('상담 신청이 완료되었습니다.');
            setCar('');
            setName('');
            setPhone('');
        } else {
            alert('내용이 입력되지 않았습니다.');
        }
    };

    if (!eventList) {
        return <Loading />;
    }

    const actualIndex = currentIndex === 0 ? eventList.length - 2 : currentIndex === eventList.length - 1 ? 1 : currentIndex;

    return (
        <>
            {isUsePopupVisible && <TermsofInformationPopup onClose={setIsUsePopupVisible} />}
            <section className="mainPage_BannerSection">
                {/* Form Section */}
                <div>
                    <img src={require('../assets/img/dsautoline/DSAUTOLINE.png')} alt="Quick FAQ Icon" />
                    <h1>기업 전용 상담</h1>
                    <h3>기업 고객님들을 위한 전용 상담을 운영하고 있습니다.</h3>
                    <div>
                        <h4>기업명</h4>
                        <input value={car} onChange={(e) => setCar(e.target.value)} placeholder='ex) DS 오토라인' />
                    </div>
                    <div>
                        <h4>이름</h4>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='ex) 홍길동' />
                    </div>
                    <div>
                        <h4>연락처</h4>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            maxLength={11}
                            placeholder='ex) 01012345678'
                            type='number'
                        />
                    </div>
                    <span>
                        {
                            !infoSelect1
                                ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                                : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                        }
                        <p><span>(필수)</span> 개인정보 제 3자 제공 동의 <span onClick={() => { setIsUsePopupVisible(true); document.body.style.overflowY = 'hidden' }}>[보기]</span></p>
                    </span>
                    <span>
                        {
                            !infoSelect2
                                ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                                : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                        }
                        <p><span>(필수)</span> 개인정보 수집ㆍ이용ㆍ제공 동의 <span onClick={() => { setIsUsePopupVisible(true); document.body.style.overflowY = 'hidden' }}>[보기]</span></p>
                    </span>
                    <button onClick={clickFunction}>기업 전용 상담 신청하기</button>
                </div>
                <div className="banner-slider">
                    <div
                        className="banner-slider-images"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: transitionRef.current ? 'transform 0.5s ease-in-out' : 'none',
                        }}
                        ref={sliderRef}
                    >
                        {eventList.map((item, index) => (
                            <img
                                key={index}
                                src={`${process.env.REACT_APP_IMG_URL}/${item.img}.png`}
                                onClick={() => window.location.href = `/event/${item.event_num}`}
                            />
                        ))}
                    </div>
                    <button className="prev-button" onClick={handlePrev}>〈</button>
                    <button className="next-button" onClick={handleNext}>〉</button>
                    <button
                        className="stop-button"
                        onClick={toggleSliding}
                        style={isSliding ? { fontSize: 30, paddingBottom: 5 } : { fontSize: 16 }}
                    >
                        {isSliding ? '■' : '▶'}
                    </button>
                    <span>
                        <p><span>{actualIndex}</span> / {eventList.length - 2}</p>
                    </span>
                    <div className="eventBanner_indicator-container">
                        {eventList.slice(1, -1).map((_, index) => (
                            <span
                                key={index}
                                className={`indicator-dot ${index + 1 === actualIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index + 1)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSlider;
