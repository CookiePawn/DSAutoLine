import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import '../styles/App.css';
import GNB from '../components/GNB';
import Footer from '../components/Footer';
import {
    HotDealCard,
    QuickDealCard,
    EventCard,
    ReviewCard,
    CardIndicator,
    EventCardIndicator,
} from '../components/Cards';
import { sliderMove } from '../utils/SliderMove';



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
    const [evnetEnd, setEventEnd] = useState(3)
    const [eventCurrentIndex, setEventCurrentIndex] = useState(0);
    const [eventHovered, setEventHovered] = useState(false);

    //카드 이동
    const [translateX1, setTranslateX1] = useState(0);
    const [translateX2, setTranslateX2] = useState(0);

    //고객 리뷰 애니메이션
    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            setTranslateX1(prevTranslateX => (prevTranslateX + 1) % (615 * list.length)); // 1px씩 이동, 100에 도달하면 0으로 리셋
            setTranslateX2(prevTranslateX => (prevTranslateX + 2) % (615 * list.length)); // 2px씩 이동, 100에 도달하면 0으로 리셋
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);



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
                            onMouseEnter={() => setHotHovered(true)}
                            onClick={() => sliderMove('left', list, hotNum, hotDealOffset, hotDealCurrentIndex, setHotDealOffset, setHotDealCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            onMouseEnter={() => setHotHovered(true)}
                            onClick={() => sliderMove('right', list, hotNum, hotDealOffset, hotDealCurrentIndex, setHotDealOffset, setHotDealCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <a className='moreBtn' href='/HotDeal'>더보기 〉</a>
                <h1>한정 특가</h1>
                <p>한정 특가 서브 문구 생각해주세요</p>
                <div
                    className='hotDealListDiv'
                    style={{ transform: `translateX(-${hotDealOffset}px)` }}
                >
                    {list.map((item, idx) => (
                        <HotDealCard item={item} idx={idx} setIndex={setHotNum} />
                    ))}
                </div>
                {/* 슬라이드 인디케이터 */}
                <CardIndicator
                    list={list}
                    num={hotNum}
                    currentIndex={hotDealCurrentIndex}
                    cardWidth={452}
                    cardMargin={10}
                    setOffset={setHotDealOffset}
                    setCurrentIndex={setHotDealCurrentIndex}
                />
            </div>
            <div className='quickDealSection'
                onMouseEnter={() => setQuickHovered(true)}
                onMouseLeave={() => setQuickHovered(false)}
            >
                {quickHovered && (
                    <>
                        <button
                            onMouseEnter={() => setQuickHovered(true)}
                            onClick={() => sliderMove('left', list, quickNum, quickDealOffset, quickDealCurrentIndex, setQuickDealOffset, setQuickDealCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            onMouseEnter={() => setQuickHovered(true)}
                            onClick={() => sliderMove('right', list, quickNum, quickDealOffset, quickDealCurrentIndex, setQuickDealOffset, setQuickDealCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}

                <a className='moreBtn' href='/QuickDeal'>더보기 〉</a>
                <h1>즉시 출고</h1>
                <p>즉시 출고 서브 문구 생각해주세요</p>
                <div
                    className='hotDealListDiv'
                    style={{ transform: `translateX(-${quickDealOffset}px)` }}
                >
                    {list.map((item, idx) => (
                        <QuickDealCard item={item} idx={idx} setIndex={setQuickNum} />
                    ))}
                </div>
                {/* 슬라이드 인디케이터 */}
                <CardIndicator
                    list={list}
                    num={quickNum}
                    currentIndex={quickDealCurrentIndex}
                    cardWidth={452}
                    cardMargin={10}
                    setOffset={setQuickDealOffset}
                    setCurrentIndex={setQuickDealCurrentIndex}
                />
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
                                    setEventStart(eventStart - 3);
                                    setEventEnd(evnetEnd - 3)
                                    setEventCurrentIndex(eventCurrentIndex - 1)
                                }
                            }} className="moveButton" style={{ top: 270 }}>〈</button>
                        <button
                            onMouseEnter={() => setEventHovered(true)}
                            onClick={() => {
                                if (evnetEnd <= list.length) {
                                    setEventStart(eventStart + 3);
                                    setEventEnd(evnetEnd + 3);
                                    setEventCurrentIndex(eventCurrentIndex + 1)
                                }
                            }} className="moveButton right" style={{ top: 270 }}>〉</button>
                    </>
                )}
                <h1>이벤트/프로모션</h1>
                <p>이벤트 서브 문구 생각해주세요</p>
                <div className='eventListDiv'>
                    {list.slice(eventStart, evnetEnd).map((item, idx) => (
                        <EventCard item={item} />
                    ))}
                </div>
                <EventCardIndicator
                    list={list}
                    currentIndex={eventCurrentIndex}
                    setCurrentIndex={setEventCurrentIndex}
                />
            </div>
            <div className='reviewSection'>
                <h1>많은 고객님들이 만족하신 후기</h1>
                <p>다른 고객님들이 어떻게 느끼셨는지 확인해보세요</p>
                <div className='reviewCardDiv1' style={{ transform: `translateX(-${translateX1}px)` }}>
                    {Array.from({ length: 100 }, (_, index) => (
                        <ReviewCard />
                    ))}
                </div>
                <div className='reviewCardDiv2' style={{ transform: `translateX(-${translateX2}px)` }}>
                    {Array.from({ length: 100 }, (_, index) => (
                        <ReviewCard />
                    ))}
                </div>
                <a>더 많은 리뷰 보기 〉</a>
            </div>
            <div className='partnerSection'>
                <h1>제휴 파트너사</h1>

            </div>
            <Footer />
        </div>

    );
}


export default MainPage