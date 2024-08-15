import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';
import '../styles/App.css';
import GNB from '../components/GNB';
import Footer from '../components/Footer';
import eventBanner1 from '../assets/img/banner/eventBanner1.png'
import partner1 from '../assets/img/partner/partner1.png'
import partner2 from '../assets/img/partner/partner2.png'
import { reviewList, carmentoList, quickFAQList } from '../assets/item';
import {
    HotDealCard,
    QuickDealCard,
    EventCard,
    ReviewCard,
    PopularCarCard,
} from '../components/Cards';
import { popularResize } from '../utils/ResizeCard';
import { sliderMove } from '../utils/SliderMove';
import { CarmentoPopUp, OptionPagePopUp } from '../components/PopUp';
import { hotDealAxios, quickDealAxios } from '../services/Request';



const MainPage = (props) => {
    //한정 특가 변수
    const [hotDealOffset, setHotDealOffset] = useState(0);
    const [hotDealCurrentIndex, setHotDealCurrentIndex] = useState(0);
    const [hotHovered, setHotHovered] = useState(false);

    //즉시 출고 변수
    const [quickDealOffset, setQuickDealOffset] = useState(0);
    const [quickDealCurrentIndex, setQuickDealCurrentIndex] = useState(0);
    const [quickHovered, setQuickHovered] = useState(false);

    //우수카멘토 변수
    const [eventHovered, setEventHovered] = useState(false);
    const [carmentPopup, setCarmentoPopup] = useState(false);
    const [checkPopup, setCheckPopup] = useState(false);

    //리뷰 변수
    const [reviewOffset, setReviewOffset] = useState(0);
    const [reviewCurrentIndex, setReviewCurrentIndex] = useState(0);
    const [reviewHovered, setReviewHovered] = useState(false);

    //인기 차량 리스트
    const [popularStat, setPopularStat] = useState(popularResize());
    const [popularEntryStat, setPopularEntryStat] = useState(0);
    const [popularList, setPopularList] = useState(quickFAQList.filter(item => item.entry === '국산'))

    useEffect(() => {
        const handleResize = () => {
            setPopularStat(popularResize());
            console.log(popularResize())
        };
        handleResize()

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const popularFunction = () => {
            popularEntryStat === 0 
                ? setPopularList(quickFAQList.filter(item => item.entry === '국산'))
                : setPopularList(quickFAQList.filter(item => item.entry === '수입'))
        }
        popularFunction()
    }, [popularEntryStat])


    const [hotDealList, setHotDealList] = useState([])
    const [quickDealList, setQuickDealList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await hotDealAxios()
            setHotDealList(response1)
            const response2 = await quickDealAxios(null, null, null)
            setQuickDealList(response2)
        }
        fetchData()
    }, [])


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
                            onClick={() => sliderMove('left', hotDealOffset, hotDealCurrentIndex, setHotDealOffset, setHotDealCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 330 }}
                            onMouseEnter={() => setHotHovered(true)}
                            onClick={() => sliderMove('right', hotDealOffset, hotDealCurrentIndex, setHotDealOffset, setHotDealCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>한정 <span>특가</span></h1>
                <div
                    className='hotDealListDiv'
                    style={{ transform: `translateX(-${hotDealOffset}px)` }}
                >
                    {hotDealList.map((item, idx) => (
                        <HotDealCard item={item} idx={idx} />
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
                            onClick={() => sliderMove('left', quickDealOffset, quickDealCurrentIndex, setQuickDealOffset, setQuickDealCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 400 }}
                            onMouseEnter={() => setQuickHovered(true)}
                            onClick={() => sliderMove('right', quickDealOffset, quickDealCurrentIndex, setQuickDealOffset, setQuickDealCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>즉시 <span>출고</span></h1>
                <div
                    className='hotDealListDiv'
                    style={{ transform: `translateX(-${quickDealOffset}px)` }}
                >
                    {quickDealList.map((item, idx) => (
                        <QuickDealCard item={item} idx={idx} />
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
                    </span>
                </a>
            </div>
            <div className='eventBannerImage'>
                <img src={eventBanner1} />
            </div>

            <section className='popularSection'>
                <h1>가장 <span>인기 많은 차량</span></h1>
                <span>
                    <p className={popularEntryStat === 0 && 'selected'} onClick={() => setPopularEntryStat(0)}>국산 차</p>
                    <p className={popularEntryStat === 1 && 'selected'} onClick={() => setPopularEntryStat(1)}>수입 차</p>
                </span>
                <div>
                    {popularList.length >= 5
                        ? popularList.slice(0, popularStat).map((item, idx) => (
                            <PopularCarCard
                                item={item}
                                index={idx}
                                carStat={null}
                                setCarStat={() => window.location.href = "/Option"}
                            />
                        ))
                        : popularList.map((item, idx) => (
                            <PopularCarCard
                                item={item}
                                index={idx}
                                carStat={null}
                                setCarStat={() => window.location.href = "/Option"}
                            />
                        ))}
                </div>
            </section>

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
                            onClick={() => sliderMove('left', reviewOffset, reviewCurrentIndex, setReviewOffset, setReviewCurrentIndex)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 432 }}
                            onMouseEnter={() => setReviewHovered(true)}
                            onClick={() => sliderMove('right', reviewOffset, reviewCurrentIndex, setReviewOffset, setReviewCurrentIndex)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>많은 고객님들이 <span>만족하신 후기</span></h1>
                <div className='reviewCardDiv' style={{ transform: `translateX(-${reviewOffset}px)` }}>
                    {reviewList.map((item, idx) => (
                        <ReviewCard item={item} />
                    ))}
                </div>
                <a className='moreBtnA' href='/Review'>
                    <span>
                        <p>더 많은 리뷰 보기</p>
                    </span>
                </a>
            </div>
            {carmentPopup &&
                <CarmentoPopUp setCarmentoPopup={setCarmentoPopup} setCheckPopup={setCheckPopup} />
            }
            {checkPopup &&
                <OptionPagePopUp />
            }
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

                            }} className="moveButton" style={{ top: 370 }}>〈</button>
                        <button
                            onMouseEnter={() => setEventHovered(true)}
                            onClick={() => {

                            }} className="moveButton right" style={{ top: 370 }}>〉</button>
                    </>
                )}
                <h1>가장 좋은<br /><span>후기를 받은 우수카멘토</span></h1>
                <div className='eventListDiv'>
                    {carmentoList.map((item, idx) => (
                        <EventCard item={item} setCarmentoPopup={setCarmentoPopup} />
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
                <img src={partner1} style={{ width: '100%' }} />
                <img src={partner2} style={{ width: '100%' }} />
            </div>
            <Footer />
        </div>

    );
}


export default MainPage