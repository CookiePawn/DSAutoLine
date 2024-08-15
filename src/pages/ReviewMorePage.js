import React, { useState, useEffect } from "react";
import '../styles/ReviewMorePage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { StarIcon } from "../components/Icons";
import { ReviewCard } from "../components/Cards";
import { reviewList } from '../assets/item'
import { reviewInfoAxios } from "../services/Request";



const ReviewMorePage = () => {
    const [reviewHovered, setReviewHovered] = useState(false);

    const [reviewInfo, setReviewInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const tmp = await reviewInfoAxios(1)
            setReviewInfo(tmp)
        }
        fetchData()
    }, [])


    let imageSrc;

    try {
        imageSrc = require(`../assets/img/review/${reviewInfo.img}.png`);  // 동적으로 이미지 로드
    } catch (error) {
        imageSrc = require('../assets/img/dsautoline/DSAUTOLINE_car.png');  // 이미지가 없을 경우 대체 이미지 사용
    }



    return (
        <>
            <GNB />
            <section className="reviewMoreSection">
                <img src={imageSrc} />
                <div>
                    <h1>{reviewInfo.enter} {reviewInfo.car_name}</h1>
                    <h4>{reviewInfo.name} 님      <span>{reviewInfo.created_at}</span></h4>
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
                                style={{ top: 332 }}
                                onMouseEnter={() => setReviewHovered(true)}
                                className="moveButton">〈</button>
                            <button
                                style={{ top: 332 }}
                                onMouseEnter={() => setReviewHovered(true)}
                                className="moveButton right">〉</button>
                        </>
                    )}
                    {reviewList.map((item, idx) => (
                        <ReviewCard item={item} />
                    ))}
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