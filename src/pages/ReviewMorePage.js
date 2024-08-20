import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import '../styles/ReviewMorePage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { StarIcon } from "../components/Icons";
import { ReviewCard } from "../components/Cards";
import { reviewInfoAxios, reviewAxios } from "../services/Request";
import Slider from "react-slick";
import '../styles/slick.css'
import '../styles/slick-theme.css'
import { handleNext, handlePrev, reviewSlicerSettings } from '../utils/SliderMove';
import FastFAQSticky from '../components/FastFAQSticky';



const ReviewMorePage = () => {
    const { id } = useParams();
    const [reviewHovered, setReviewHovered] = useState(false);
    const [reviewInfo, setReviewInfo] = useState([])
    const [reviewList, setReviewList] = useState([])

    //슬라이더
    const reviewSliderRef = useRef(null);


    useEffect(() => {
        const fetchData = async () => {
            const response1 = await reviewInfoAxios(id)
            setReviewInfo(response1)
            const response2 = await reviewAxios()
            setReviewList(response2)
        }
        fetchData()
    }, [])


    let imageSrc;

    try {
        imageSrc = require(`../assets/img/review/${reviewInfo.img}.png`);  // 동적으로 이미지 로드
    } catch (error) {
        imageSrc = require('../assets/img/dsautoline/DSAUTOLINE_car.png');  // 이미지가 없을 경우 대체 이미지 사용
    }

    
    if (reviewInfo.length === 0 || reviewList.length === 0) {
        return null
    }
    return (
        <>
            <GNB />
            <FastFAQSticky height={450}/>
            <section className="reviewMoreSection">
                <img src={imageSrc} alt="리뷰 이미지"/>
                <div>
                    <h1>{reviewInfo.enter} {reviewInfo.car_name}</h1>
                    <h4>{reviewInfo.name} 님      <span>{reviewInfo.created_at && reviewInfo.created_at.split('T')[0]}</span></h4>
                    <span>
                        <p>평점</p>
                        {Array.from({ length: reviewInfo.star }, (_, index) => (
                            <span>
                                <StarIcon
                                    key={index}
                                    size={31}
                                    color={index < reviewInfo.star ? '#FBDA03' : '#9FA5AB'}
                                />
                            </span>
                        ))}
                    </span>
                    <p>
                        {reviewInfo.comment}
                    </p>
                </div>
            </section>
            <section className="reviewMoreListSection">
                <h1>관련 리뷰</h1>
                <div
                    className='reviewMoreListDiv'
                    onMouseEnter={() => setReviewHovered(true)}
                    onMouseLeave={() => setReviewHovered(false)}
                >
                    {reviewHovered && (
                        <>
                            <button
                                style={{ top: 140 }}
                                onMouseEnter={() => setReviewHovered(true)}
                                onClick={() => handlePrev(reviewSliderRef)}
                                className="moveButton">〈</button>
                            <button
                                style={{ top: 140 }}
                                onMouseEnter={() => setReviewHovered(true)}
                                onClick={() => handleNext(reviewSliderRef)}
                                className="moveButton right">〉</button>
                        </>
                    )}
                    <Slider {...reviewSlicerSettings} ref={reviewSliderRef}>
                        {reviewList.map((item, idx) => (
                            <ReviewCard item={item} />
                        ))}
                    </Slider>
                </div>
                <a className='moreBtnA' href='/Review' style={{marginBottom: 200}}>
                    <span>
                        <p>목록으로</p>
                    </span>
                </a>
            </section>
            <Footer />
        </>
    )
}


export default ReviewMorePage