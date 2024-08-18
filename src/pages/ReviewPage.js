import React, { useState, useEffect } from 'react'
import '../styles/ReviewPage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { ReviewPageCard } from '../components/Cards'
import { reviewList } from '../assets/item'
import { ReviewPagePopUp } from '../components/PopUp'
import FastFAQSticky from '../components/FastFAQSticky'


const ReviewPage = () => {
    const [index, setIndex] = useState(1)
    const [startStat, setStartStat] = useState(0)
    const [endStat, setEndStat] = useState(6)
    const [pageNum, setPageNum] = useState(0)
    const [popupStat, setPopupStat] = useState(false)

    const handlePageClick = (idx) => {
        const newStartStat = idx * 6; // 6개의 카드만큼 이동
        const newEndStat = newStartStat + 6; // 6개의 카드로 범위 설정
        setStartStat(newStartStat);
        setEndStat(newEndStat);
        setPageNum(idx);
    };


    return (
        <>
            {popupStat &&
                <ReviewPagePopUp setPopupStat={setPopupStat} />
            }
            <GNB page={'고객 리뷰'} />
            <FastFAQSticky height={650}/>
            <section className='titleSection'>
                <h1>고객 리뷰</h1>
                <p>다른 고객님들이 어떻게 느끼셨는지 확인해보세요</p>
                <span onClick={() => { setPopupStat(true); document.body.style.overflow = 'hidden'; }}>리뷰 작성하기</span>
            </section>
            <section className='reviewCardSection'>
                <span>
                    {reviewList.slice(startStat, endStat).map((item, idx) => (
                        <ReviewPageCard item={item} setIndex={setIndex} />
                    ))}
                </span>
                <div>
                    {Array.from({ length: Math.ceil(reviewList.length / 6 )}, (_, idx) => (
                        <p
                            key={idx}
                            onClick={() => handlePageClick(idx)}
                            style={{ color: idx === pageNum && 'black' }}
                        >
                            {idx + 1}
                        </p>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ReviewPage