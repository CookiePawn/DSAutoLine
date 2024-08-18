import React, { useState } from "react";
import GNB from "../components/GNB";
import Footer from "../components/Footer";
import FastFAQSticky from '../components/FastFAQSticky'
import '../styles/ReviewAddPage.css'
import { StarIcon } from "../components/Icons";
import { ReviewAddPagePopUp } from "../components/PopUp";





const ReviewAddPage = () => {
    const [starStat, setStarStat] = useState(0)
    const [popupStat, setPopupStat] = useState(false) 

    return (
        <>
            {popupStat &&
                <ReviewAddPagePopUp />
            }
            <GNB page={'고객 리뷰'} />
            <FastFAQSticky height={450}/> 
            <section className="reviewAdd_inputSection">
                <h1>리뷰 작성</h1>
                <p>서비스가 어떠셨나요?? 리뷰로 알려주세요</p>
                <span>
                    <h3>이름</h3>
                    <input />
                </span>
                <span>
                    <h3>차량명</h3>
                    <input />
                </span>
                <span>
                    <h3>별점</h3>
                    {Array.from({ length: 5 }, (_, index) => (
                        <span onClick={() => setStarStat(index + 1)}>
                            <StarIcon
                                key={index}
                                size={31}
                                color={index < starStat ? '#FBDA03' : '#9FA5AB'}
                            />
                        </span>
                    ))}
                </span>
                <span>
                    <h3>사진</h3>
                    <img src={require('../assets/img/popup/imageUpload.png')}/>
                </span>
                <span>
                    <h3>내용</h3>
                    <textarea />
                </span>
                <button onClick={() => { setPopupStat(true); document.body.style.overflowY='hidden'}}>작성 완료</button>
            </section>
            <Footer />
        </>
    )
}


export default ReviewAddPage