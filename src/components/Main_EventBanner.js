import React, { useState, useEffect, useRef } from 'react';
import '../styles/Main_EventBanner.css';
import { eventAxios } from '../services/Request';
import Loading from "../components/Loading";
import { TermsofInformationPopup } from '../components/PopUp';
import { fastFAQAxios } from '../services/Request';

const BannerSlider = () => {
    const [eventList, setEventList] = useState(null);

    // 입력 상태
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [car, setCar] = useState('');

    // 간편 문의 상태
    const [infoSelect1, setInfoSelect1] = useState(false);
    const [infoSelect2, setInfoSelect2] = useState(false);
    const [isUsePopupVisible, setIsUsePopupVisible] = useState(false);

    // 슬라이드 상태
    const [currentIndex, setCurrentIndex] = useState(1); // 첫 슬라이드는 복제된 슬라이드를 보여줌
    const transitionRef = useRef(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await eventAxios(null, 0);
            const filteredEvents = response.filter((item) => item.type === 0);
            // 복제된 첫 번째, 마지막 슬라이드를 추가합니다.
            setEventList([filteredEvents[filteredEvents.length - 1], ...filteredEvents, filteredEvents[0]]);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, eventList]);

    // 다음 슬라이드로 이동
    const handleNext = () => {
        if (eventList && eventList.length > 0) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // 이전 슬라이드로 이동
    const handlePrev = () => {
        if (eventList && eventList.length > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    useEffect(() => {
        if (eventList) {
            // 애니메이션이 끝난 후, 복제된 첫 슬라이드나 마지막 슬라이드로 이동할 때 처리
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

    return (
        <>
            {isUsePopupVisible && <TermsofInformationPopup onClose={setIsUsePopupVisible} />}
            <section className="mainPage_BannerSection">
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
                    <button onClick={clickFunction}>
                        기업 전용 상담 신청하기
                    </button>
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
                </div>
            </section>
        </>
    );
};

export default BannerSlider;
