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
    const [infoSelect1, setInfoSelect1] = useState(true);
    const [infoSelect2, setInfoSelect2] = useState(true);
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

            const namePattern = /^[가-힣]{2,}$/; // 한글 2자 이상
            const phonePattern = /^010\d{8}$/; // '010'으로 시작하고 총 11자리
            const isRepeatingNumbers = (number) => {
                // 동일한 숫자가 8자리 반복되는 경우
                return /^(\d)\1{7}$/.test(number);
            };

            if (car.trim() === '') {
                alert('기업명을 입력해주세요.');
                return;
            }

            if (name.trim() === '') {
                alert('이름을 입력해주세요.');
                return;
            }

            if (!namePattern.test(name.trim())) {
                alert('이름은 한글 2자 이상으로 입력해주세요.');
                return;
            }

            if (phone.trim() === '') {
                alert('전화번호를 입력해주세요.');
                return;
            }

            if (!phonePattern.test(phone.trim())) {
                alert('전화번호는 "010"으로 시작하며 총 11자리여야 합니다.');
                return;
            }

            if (isRepeatingNumbers(phone.trim().slice(3))) {
                alert('전화번호는 동일한 숫자를 반복할 수 없습니다.');
                return;
            }

            try {
                await fastFAQAxios({
                    name: name,
                    phone: phone,
                    car_name: car,
                    type: '기업상담',
                });
                if (window.wcs) {
                    if (!window.wcs_add) window.wcs_add = {};
                    window.wcs_add['wa'] = 's_54bd969202cb'; // 기업전용상담신청
    
                    const _conv = {
                        value: '100', // 원하는 전환 값
                        type: 'lead', // 전환 타입 설정
                    };
                    window.wcs.trans(_conv);
                    console.log('Naver conversion script executed');
                }

                // Google Ads conversion script
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'conversion', {
                        'send_to': 'AW-16793145665/JOZVCIm3-IUaEMGizMc-',
                        'value': 1.0,
                        'currency': 'KRW',
                    });
                    console.log('Google Ads conversion script executed');
                } else {
                    console.warn('Google Ads gtag function is not available');
                }

                alert('상담 신청이 완료되었습니다.');
                setCar('');
                setName('');
                setPhone('');
            } catch (error) {
                console.error('Data submission failed:', error);
                alert('서버에 문제가 발생했습니다. 다시 시도해주세요.');
            }
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
                    <div className="slider-controls">
                        <button
                            className="toggle-button"
                            onClick={toggleSliding}
                            style={isSliding ? { fontSize: 20 } : { fontSize: 20 }}
                        >
                            {isSliding ? '⏸' : '▶'}
                        </button>
                        <div className="slider-button">
                            <button className="prev-button" onClick={handlePrev}>〈</button>
                            <span className="slider-info">
                                <p>{actualIndex} / {eventList.length - 2}</p>
                            </span>
                            <button className="next-button" onClick={handleNext}>〉</button>
                        </div>
                    </div>
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
