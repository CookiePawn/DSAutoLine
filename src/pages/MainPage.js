import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import '../styles/App.css';
import GNB from '../components/GNB';
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


    //카드 이동
    const [translateX1, setTranslateX1] = useState(0);
    const [translateX2, setTranslateX2] = useState(0);

    useEffect(() => {
        let animationFrameId;
        const animate = () => {
            setTranslateX1(prevTranslateX => (prevTranslateX + 1) % (615*list.length)); // 1px씩 이동, 100에 도달하면 0으로 리셋
            setTranslateX2(prevTranslateX => (prevTranslateX + 2) % (615*list.length)); // 2px씩 이동, 100에 도달하면 0으로 리셋
            animationFrameId = requestAnimationFrame(animate);
        };
        animationFrameId = requestAnimationFrame(animate); 
        return () => cancelAnimationFrame(animationFrameId);
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
                <a className='moreBtn'>더보기 〉</a>
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
                    num={3}
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
                <a className='moreBtn'>더보기 〉</a> 
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
                    num={3}
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
                        setEventCurrentIndex(eventCurrentIndex - 1)
                    }
                }} className="moveButton" style={{ top: 270 }}>〈</button>
                <button onClick={() => {
                    if (evnetEnd <= list.length) {
                        setEventStart(eventStart + 3);
                        setEventEnd(evnetEnd + 3);
                        setEventCurrentIndex(eventCurrentIndex + 1)
                    }
                }} className="moveButton right" style={{ top: 270 }}>〉</button>
                <h1>이벤트/프로모션</h1>
                <p>이벤트 서브 문구 생각해주세요</p>
                <div className='eventListDiv' style={{ width: containerWidth - 120 }}>
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
            <footer className='footerSection'>
                <h1>FOOTER</h1>
            </footer>
        </>

    );
}


export default MainPage