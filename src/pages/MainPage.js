import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import ray from '../assets/ray.png'
import '../styles/App.css';
import GNB from '../components/GNB';


const MainPage = (props) => {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])

    const [offset, setOffset] = useState(0);
    const [containerWidth, setContainerWidth] = useState(window.innerWidth); // 창의 너비 초기화
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 슬라이드 인덱스
    const cardWidth = 452; // 카드의 너비
    const cardMargin = 10; // 카드 사이의 마진
    const visibleCards = 4;
    const paddingRight = 33; // 마지막 카드가 오른쪽에서 떨어질 거리

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth); // 창 크기 변경 시 업데이트
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sliderMove = (direction) => {
        setOffset((prevOffset) => {
            const totalWidth = (list.length * (cardWidth + cardMargin)) - cardMargin;
            const maxOffset = totalWidth - (containerWidth + paddingRight); // 최대로 이동할 수 있는 오프셋

            // 새 오프셋 계산
            let newOffset = direction === 'left'
                ? prevOffset - (cardWidth + cardMargin)
                : prevOffset + (cardWidth + cardMargin);

            // 새로운 오프셋이 0보다 작으면 0으로 설정
            if (newOffset < 0) newOffset = 0;

            // 새로운 오프셋이 최대 오프셋보다 크면 최대 오프셋으로 설정
            if (newOffset > maxOffset) newOffset = maxOffset;

            // 현재 인덱스 업데이트
            const newIndex = Math.min(
                Math.floor(newOffset / (cardWidth + cardMargin)),
                list.length - visibleCards
            );
            setCurrentIndex(newIndex);

            return newOffset;
        });
    };


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
                <button onClick={() => sliderMove('left', list, cardWidth, cardMargin, paddingRight, containerWidth)} className="moveButton">〈</button>
                <button onClick={() => sliderMove('right', list, cardWidth, cardMargin, paddingRight, containerWidth)} className="moveButton right">〉</button>
                <h1>한정 특가</h1>
                <p>한정 특가 서브 문구 생각해주세요</p>
                <div className='hotDealListDiv' style={{ transform: `translateX(-${offset}px)` }}>
                    {list.map((item, idx) => (
                        <div className='hotDealCard' style={{ marginLeft: idx == 0 ? 60 : 50 }}>
                            <img src={ray} className='hotDealCardImg' />
                            <span className='hotDealCardTitleDiv'>
                                <h2>레이</h2>
                                <p>48개월</p>
                                <p>선납급 30%</p>
                            </span>
                            <p className='hotDealCardModel'>2024년형 가솔린 1.0 트랜디 (A/T)</p>
                            <span className='hotDealCardPriceDiv'>
                                <p className='hotDealCardPriceTitle'>차량가</p>
                                <p className='hotDealCardPrice'>13,900,000원</p>
                            </span>
                            <span className='hotDealCardMonthPriceDiv'>
                                <p className='hotDealCardMonthPriceTitle'>월렌탈료</p>
                                <p className='hotDealCardMonthPricePercent'><span>26%</span> · </p>
                                <p className='hotDealCardMonthPrice'> 205,150원</p>
                            </span>
                        </div>
                    ))}
                </div>
                {/* 슬라이드 인디케이터 */}
                <div className='indicator'>
                    {list.slice(0, list.length - 4).map((_, index) => (
                        <span
                            key={index}
                            className={`indicatorDot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => {
                                // 클릭 시 해당 인덱스로 이동
                                const newOffset = index * (cardWidth + cardMargin);
                                setOffset(newOffset);
                                setCurrentIndex(index);
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        </>

    );
}


export default MainPage