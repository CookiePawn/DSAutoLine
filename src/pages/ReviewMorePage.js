import React, { useState, useEffect } from "react";
import '../styles/ReviewMorePage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { StarIcon } from "../components/Icons";
import { ReviewCard } from "../components/Cards";
import { reviewList } from '../assets/item'



const ReviewMorePage = () => {
    const [reviewHovered, setReviewHovered] = useState(false);


    return (
        <>
            <GNB />
            <section className="reviewMoreSection">
                <img src={require('../assets/img/review/review1.png')} />
                <div>
                    <h1>기아 K3</h1>
                    <h4>백지환 님      <span>2024-07-20</span></h4>
                    <span>
                        <p>평점</p>
                        {Array.from({ length: 5 }, (_, index) => (
                            <span>
                                <StarIcon
                                    key={index}
                                    size={31}
                                    color={index < 4 ? '#FBDA03' : '#9FA5AB'}
                                />
                            </span>
                        ))}
                    </span>
                    <p>
                        정말 친절하게 상담해주셔서 덕분에 너무 편하게 선택할 수 있었습니다! 특히 심민혁 상담사님께서 매우 상세하고 이해하기 쉽게 설명해주셔서 큰 도움이 되었습니다. 상담 과정 내내 저의 필요와 상황을 충분히 고려해주셨고, 모든 질문에 성심성의껏 답해주셔서 감사했습니다.
                        타 서비스와 비교했을 때 훨씬 저렴한 가격에 같은 품질의 서비스를 받을 수 있어서 매우 만족합니다. 기대 이상으로 좋은 서비스를 경험할 수 있었고, 앞으로도 필요할 때마다 이용할 계획입니다. 정말 감사합니다!
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