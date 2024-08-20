import React, { useState, useEffect, useRef } from 'react'
import '../styles/App.css';
import GNB from '../components/GNB';
import Footer from '../components/Footer';
import partner1 from '../assets/img/partner/partner1.png'
import partner2 from '../assets/img/partner/partner2.png'
import { carmentoList, quickFAQList } from '../assets/item';
import {
    HotDealCard,
    QuickDealCard,
    EventCard,
    ReviewCard,
    PopularCarCard,
} from '../components/Cards';
import { CarmentoPopUp, OptionPagePopUp } from '../components/PopUp';
import { hotDealAxios, quickDealAxios, reviewAxios } from '../services/Request';
import Slider from "react-slick";
import '../styles/slick.css'
import '../styles/slick-theme.css'
import { handleNext, handlePrev, hotDealSlicerSettings, reviewSlicerSettings } from '../utils/SliderMove';
import FastFAQSticky from '../components/FastFAQSticky';



const MainPage = (props) => {
    //한정 특가 변수
    const [hotHovered, setHotHovered] = useState(false);

    //즉시 출고 변수
    const [quickHovered, setQuickHovered] = useState(false);

    //우수카멘토 변수
    const [carmentPopup, setCarmentoPopup] = useState(false);
    const [checkPopup, setCheckPopup] = useState(false);

    //리뷰 변수
    const [reviewHovered, setReviewHovered] = useState(false);

    //인기 차량 리스트
    const [popularEntryStat, setPopularEntryStat] = useState(0);
    const [popularList, setPopularList] = useState(quickFAQList.filter(item => item.entry === '국산'))

    useEffect(() => {
        const popularFunction = () => {
            popularEntryStat === 0
                ? setPopularList(quickFAQList.filter(item => item.entry === '국산'))
                : setPopularList(quickFAQList.filter(item => item.entry === '수입'))
        }
        popularFunction()
    }, [popularEntryStat])


    //슬라이더
    const hotDealSliderRef = useRef(null);
    const quickDealSliderRef = useRef(null);
    const reviewSliderRef = useRef(null);


    //DB 리스트 로드
    const [hotDealList, setHotDealList] = useState([])
    const [quickDealList, setQuickDealList] = useState([])
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await hotDealAxios()
            setHotDealList(response1)
            const response2 = await quickDealAxios(null, null, null)
            setQuickDealList(response2)
            const response3 = await reviewAxios()
            setReviewList(response3)
        }
        fetchData()
    }, [])




    return (
        <div className='mainPage_container'>
            <GNB stat={false} />
            <section className="mainPage_BannerSection">
                <div style={{ marginLeft: (document.body.clientWidth - 1280) / 2 }}>
                    <img className='mainPage_BannerImage' src={require('../assets/img/banner/eventBanner2.png')} />
                    <img className='mainPage_BannerImage' src={require('../assets/img/banner/eventBanner1.png')} />
                    <img className='mainPage_BannerImage' src={require('../assets/img/banner/eventBanner2.png')} />
                </div>
            </section>
            <FastFAQSticky height={1300} />
            <section
                className='hotDealSection'
                onMouseEnter={() => setHotHovered(true)}
                onMouseLeave={() => setHotHovered(false)}
            >
                {hotHovered && (
                    <>
                        <button
                            style={{ top: 300 }}
                            onMouseEnter={() => setHotHovered(true)}
                            onClick={() => handlePrev(hotDealSliderRef)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 300 }}
                            onMouseEnter={() => setHotHovered(true)}
                            onClick={() => handleNext(hotDealSliderRef)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>한정 <span>특가</span></h1>
                <Slider {...hotDealSlicerSettings} ref={hotDealSliderRef}>
                    {hotDealList.map((item, idx) => (
                        <HotDealCard item={item} idx={idx} />
                    ))}
                </Slider>
                <a className='moreBtnA' href='/HotDeal'>
                    <span>
                        <p>자세히 보기</p>
                    </span>
                </a>
            </section>
            <section className='quickDealSection'
                onMouseEnter={() => setQuickHovered(true)}
                onMouseLeave={() => setQuickHovered(false)}
            >
                {quickHovered && (
                    <>
                        <button
                            style={{ top: 300 }}
                            onMouseEnter={() => setQuickHovered(true)}
                            onClick={() => handlePrev(quickDealSliderRef)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 300 }}
                            onMouseEnter={() => setQuickHovered(true)}
                            onClick={() => handleNext(quickDealSliderRef)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>즉시 <span>출고</span></h1>
                <div
                    className='hotDealListDiv'
                >
                    <Slider {...hotDealSlicerSettings} ref={quickDealSliderRef}>
                        {quickDealList.map((item, idx) => (
                            <QuickDealCard item={item} idx={idx} />
                        ))}
                    </Slider>
                </div>
                <a className='moreBtnA' href='QuickDeal'>
                    <span>
                        <p>자세히 보기</p>
                    </span>
                </a>
            </section>
            <div className='eventBannerImage'>
                <img src={require('../assets/img/banner/lineBanner1.png')} />
            </div>

            <section className='popularSection'>
                <h1>가장 <span>인기 많은 차량</span></h1>
                <span>
                    <p className={popularEntryStat === 0 && 'selected'} onClick={() => setPopularEntryStat(0)}>국산 차</p>
                    <p className={popularEntryStat === 1 && 'selected'} onClick={() => setPopularEntryStat(1)}>수입 차</p>
                </span>
                <div>
                    {popularList.length >= 4
                        ? popularList.slice(0, 4).map((item, idx) => (
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
            <section
                className='reviewSection'
                onMouseEnter={() => setReviewHovered(true)}
                onMouseLeave={() => setReviewHovered(false)}
            >
                {reviewHovered && (
                    <>
                        <button
                            style={{ top: 220 }}
                            onMouseEnter={() => setReviewHovered(true)}
                            onClick={() => handlePrev(reviewSliderRef)}
                            className="moveButton">〈</button>
                        <button
                            style={{ top: 220 }}
                            onMouseEnter={() => setReviewHovered(true)}
                            onClick={() => handleNext(reviewSliderRef)}
                            className="moveButton right">〉</button>
                    </>
                )}
                <h1>많은 고객님들이 <span>만족하신 후기</span></h1>
                <div className='reviewCardDiv'>
                    <Slider {...reviewSlicerSettings} ref={reviewSliderRef}>
                        {reviewList.map((item, idx) => (
                            <ReviewCard item={item} />
                        ))}
                    </Slider>
                </div>
                <a className='moreBtnA' href='/Review'>
                    <span>
                        <p>더 많은 리뷰 보기</p>
                    </span>
                </a>
            </section>
            {carmentPopup &&
                <CarmentoPopUp setCarmentoPopup={setCarmentoPopup} setCheckPopup={setCheckPopup} />
            }
            {checkPopup &&
                <OptionPagePopUp />
            }
            <section
                className='eventSection'
            >
                <h1>가장 좋은<br /><span>후기를 받은 우수카멘토</span></h1>
                <div className='eventListDiv'>
                    {carmentoList.slice(0, 4).map((item, idx) => (
                        <EventCard item={item} setCarmentoPopup={setCarmentoPopup} />
                    ))}
                </div>
            </section>
            <section className='partnerSection'>
                <h1>제휴 <span>파트너사</span></h1>
                <img src={partner1} style={{ width: '100%' }} />
                <img src={partner2} style={{ width: '100%' }} />
            </section>
            <Footer />
        </div>

    );
}


export default MainPage