import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import '../styles/App.css';
import GNB from '../components/GNB';
import {
    HotDealCard,
    QuickDealCard,
    EventCard,
    CardIndicator,
    EventCardIndicator,
} from '../components/Cards';
import { sliderMove } from '../utils/SliderMove';


const MainPage = (props) => {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])


    //한정 특가 변수
    const [hotDealOffset, setHotDealOffset] = useState(0);
    const [hotDealCurrentIndex, setHotDealCurrentIndex] = useState(0);

    //즉시 출고 변수
    const [quickDealOffset, setQuickDealOffset] = useState(0);
    const [quickDealCurrentIndex, setQuickDealCurrentIndex] = useState(0);

    //이벤트 변수
    const [eventStart, setEventStart] = useState(0)
    const [evnetEnd, setEventEnd] = useState(3)
    const [eventCurrentIndex, setEventCurrentIndex] = useState(0);

    const [containerWidth, setContainerWidth] = useState(window.innerWidth); // 창의 너비 초기화


    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth); // 창 크기 변경 시 업데이트
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <>
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
            <div className='hotDealSection'>
                <button onClick={() => sliderMove('left', list, 442, 10, -96, 4, containerWidth, setHotDealOffset, setHotDealCurrentIndex)} className="moveButton">〈</button>
                <button onClick={() => sliderMove('right', list, 442, 10, -96, 4, containerWidth, setHotDealOffset, setHotDealCurrentIndex)} className="moveButton right">〉</button>
                <h1>한정 특가</h1>
                <p>한정 특가 서브 문구 생각해주세요</p>
                <div className='hotDealListDiv' style={{ transform: `translateX(-${hotDealOffset}px)` }}>
                    {list.map((item, idx) => (
                        <HotDealCard item={item} idx={idx} />
                    ))}
                </div>
                {/* 슬라이드 인디케이터 */}
                <CardIndicator
                    list={list}
                    num={4}
                    currentIndex={hotDealCurrentIndex}
                    cardWidth={452}
                    cardMargin={10}
                    setOffset={setHotDealOffset}
                    setCurrentIndex={setHotDealCurrentIndex}
                />
            </div>
            <div className='quickDealSection'>
                <button onClick={() => sliderMove('left', list, 442, 10, -96, 4, containerWidth, setQuickDealOffset, setQuickDealCurrentIndex)} className="moveButton">〈</button>
                <button onClick={() => sliderMove('right', list, 442, 10, -96, 4, containerWidth, setQuickDealOffset, setQuickDealCurrentIndex)} className="moveButton right">〉</button>
                <h1>즉시 출고</h1>
                <p>즉시 출고 서브 문구 생각해주세요</p>
                <div className='hotDealListDiv' style={{ transform: `translateX(-${quickDealOffset}px)` }}>
                    {list.map((item, idx) => (
                        <QuickDealCard item={item} idx={idx} />
                    ))}
                </div>
                {/* 슬라이드 인디케이터 */}
                <CardIndicator
                    list={list}
                    num={4}
                    currentIndex={quickDealCurrentIndex}
                    cardWidth={452}
                    cardMargin={10}
                    setOffset={setQuickDealOffset}
                    setCurrentIndex={setQuickDealCurrentIndex}
                />
            </div>
            <div className='eventSection'>
                <button onClick={() => {
                    if (eventStart > 0) {
                        setEventStart(eventStart - 3);
                        setEventEnd(evnetEnd - 3)
                        setEventCurrentIndex(eventCurrentIndex-1)
                    }
                }} className="moveButton" style={{top: 270}}>〈</button>
                <button onClick={() => {
                    if (evnetEnd <= list.length) {
                        setEventStart(eventStart + 3);
                        setEventEnd(evnetEnd + 3);
                        setEventCurrentIndex(eventCurrentIndex+1)
                    }
                }} className="moveButton right" style={{top: 270}}>〉</button>
                <h1>이벤트/프로모션</h1>
                <p>이벤트 서브 문구 생각해주세요</p>
                <div className='eventListDiv' style={{ width: containerWidth - 120 }}>
                    {list.slice(eventStart, evnetEnd).map((item, idx) => (
                        <EventCard item={item}/>
                    ))}
                </div>
                <EventCardIndicator
                    list={list}
                    currentIndex={eventCurrentIndex}
                    setCurrentIndex={setEventCurrentIndex}
                />
            </div>
        </>

    );
}


export default MainPage