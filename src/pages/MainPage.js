import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import '../styles/App.css';
import GNB from '../components/GNB';
import Footer from '../components/Footer';
import eventBanner1 from '../assets/img/banner/eventBanner1.png'
import {
    HotDealCard,
    QuickDealCard,
    EventCard,
    ReviewCard,
    CardIndicator,
    EventCardIndicator,
} from '../components/Cards';
import { sliderMove } from '../utils/SliderMove';
import { RightIcon } from '../components/Icons';



const MainPage = (props) => {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])

    //한정 특가 변수
    const [hotDealOffset, setHotDealOffset] = useState(0);
    const [hotDealCurrentIndex, setHotDealCurrentIndex] = useState(0);
    const [hotNum, setHotNum] = useState(0)
    const [hotHovered, setHotHovered] = useState(false);

    //즉시 출고 변수
    const [quickDealOffset, setQuickDealOffset] = useState(0);
    const [quickDealCurrentIndex, setQuickDealCurrentIndex] = useState(0);
    const [quickNum, setQuickNum] = useState(0)
    const [quickHovered, setQuickHovered] = useState(false);

    //이벤트 변수
    const [eventStart, setEventStart] = useState(0)
    const [evnetEnd, setEventEnd] = useState(5)
    const [eventCurrentIndex, setEventCurrentIndex] = useState(0);
    const [eventHovered, setEventHovered] = useState(false);

    //리뷰 변수
    const [reviewOffset, setReviewOffset] = useState(0);
    const [reviewCurrentIndex, setReviewCurrentIndex] = useState(0);
    const [reviewNum, setReviewNum] = useState(0);
    const [reviewHovered, setReviewHovered] = useState(false);



    //console.log('hot: ' + hotNum)
    //console.log('quick: ' + quickNum)

    return (
        <div className='container'>
            <GNB stat={false} />
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        DS AUTO LINE WEB DEV.
                    </p>
                    <a
                        className="App-link"
                        href="https://halved-writer-29b.notion.site/DS-AUTO-LINE-WEB-DEV-d7523b1774bc410fbccbb8243b2efcc4"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Notion
                    </a>
                </header>
            </div>
            <div
                className='hotDealSection'
                onMouseEnter={() => setHotHovered(true)}
                onMouseLeave={() => setHotHovered(false)}
            >
                {hotHovered && (
                    <>
                        <button
                            style={{ top: 330 }}
                            onMouseEnter={() => setHotHovered(true)}
                            onClick={() => sliderMove('left', list, hotNum, hotDealOffset, hotDealCurrentIndex, setHotDealOffset, setHotDealCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 330 }}
                            onMouseEnter={() => setHotHovered(true)}
                            onClick={() => sliderMove('right', list, hotNum, hotDealOffset, hotDealCurrentIndex, setHotDealOffset, setHotDealCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>한정 <span>특가</span></h1>
                <div
                    className='hotDealListDiv'
                    style={{ transform: `translateX(-${hotDealOffset}px)` }}
                >
                    {list.map((item, idx) => (
                        <HotDealCard item={item} idx={idx} setIndex={setHotNum} />
                    ))}
                </div>
                {/* 슬라이드 인디케이터
                <CardIndicator
                    list={list}
                    num={hotNum}
                    currentIndex={hotDealCurrentIndex}
                    cardWidth={452}
                    cardMargin={10}
                    setOffset={setHotDealOffset}
                    setCurrentIndex={setHotDealCurrentIndex}
                /> */}
                <a className='moreBtnA' href='/HotDeal'>
                    <span>
                        <p>자세히 보기</p>
                        <RightIcon size={23} color={'#767676'} />
                    </span>
                </a>
            </div>
            <div className='quickDealSection'
                onMouseEnter={() => setQuickHovered(true)}
                onMouseLeave={() => setQuickHovered(false)}
            >
                {quickHovered && (
                    <>
                        <button
                            style={{ top: 400 }}
                            onMouseEnter={() => setQuickHovered(true)}
                            onClick={() => sliderMove('left', list, quickNum, quickDealOffset, quickDealCurrentIndex, setQuickDealOffset, setQuickDealCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 400 }}
                            onMouseEnter={() => setQuickHovered(true)}
                            onClick={() => sliderMove('right', list, quickNum, quickDealOffset, quickDealCurrentIndex, setQuickDealOffset, setQuickDealCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>즉시 <span>출고</span></h1>
                <div
                    className='hotDealListDiv'
                    style={{ transform: `translateX(-${quickDealOffset}px)` }}
                >
                    {list.map((item, idx) => (
                        <QuickDealCard item={item} idx={idx} setIndex={setQuickNum} />
                    ))}
                </div>
                {/* 슬라이드 인디케이터
                <CardIndicator
                    list={list}
                    num={quickNum}
                    currentIndex={quickDealCurrentIndex}
                    cardWidth={452}
                    cardMargin={10}
                    setOffset={setQuickDealOffset}
                    setCurrentIndex={setQuickDealCurrentIndex}
                /> */}
                <a className='moreBtnA' href='QuickDeal'>
                    <span>
                        <p>자세히 보기</p>
                        <RightIcon size={23} color={'#767676'} />
                    </span>
                </a>
            </div>
            <div className='eventBannerImage'>
                <img src={eventBanner1} />
            </div>

            <div
                className='reviewSection'
                onMouseEnter={() => setReviewHovered(true)}
                onMouseLeave={() => setReviewHovered(false)}
            >
                {reviewHovered && (
                    <>
                        <button
                            style={{ top: 432 }}
                            onMouseEnter={() => setReviewHovered(true)}
                            onClick={() => sliderMove('left', list, reviewNum, reviewOffset, reviewCurrentIndex, setReviewOffset, setReviewCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 432 }}
                            onMouseEnter={() => setReviewHovered(true)}
                            onClick={() => sliderMove('right', list, reviewNum, reviewOffset, reviewCurrentIndex, setReviewOffset, setReviewCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>많은 고객님들이 <span>만족하신 후기</span></h1>
                <div className='reviewCardDiv' style={{ transform: `translateX(-${reviewOffset}px)` }}>
                    {list.map((item, idx) => (
                        <ReviewCard />
                    ))}
                </div>
                <a className='moreBtnA'>
                    <span>
                        <p>더 많은 리뷰 보기</p>
                        <RightIcon size={23} color={'#767676'} />
                    </span>
                </a>
            </div>
            <div
                className='eventSection'
                onMouseEnter={() => setEventHovered(true)}
                onMouseLeave={() => setEventHovered(false)}
            >
                {eventHovered && (
                    <>
                        <button
                            onMouseEnter={() => setEventHovered(true)}
                            onClick={() => {
                                if (eventStart > 0) {
                                    setEventStart(eventStart - 5);
                                    setEventEnd(evnetEnd - 5)
                                    setEventCurrentIndex(eventCurrentIndex - 1)
                                }
                            }} className="moveButton" style={{ top: 370 }}>〈</button>
                        <button
                            onMouseEnter={() => setEventHovered(true)}
                            onClick={() => {
                                if (evnetEnd <= list.length) {
                                    setEventStart(eventStart + 5);
                                    setEventEnd(evnetEnd + 5);
                                    setEventCurrentIndex(eventCurrentIndex + 1)
                                }
                            }} className="moveButton right" style={{ top: 370 }}>〉</button>
                    </>
                )}
                <h1>가장 좋은<br /><span>후기를 받은 우수카멘토</span></h1>
                <div className='eventListDiv'>
                    {list.slice(eventStart, evnetEnd).map((item, idx) => (
                        <EventCard item={item} />
                    ))}
                </div>
                {/* <EventCardIndicator
                    list={list}
                    currentIndex={eventCurrentIndex}
                    setCurrentIndex={setEventCurrentIndex}
                /> */}
            </div>
            <div className='partnerSection'>
                <h1>제휴 <span>파트너사</span></h1>

            </div>
            <Footer />
        </div>

    );
}


export default MainPage