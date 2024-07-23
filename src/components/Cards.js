import React, { useState, useEffect } from 'react';
import '../styles/App.css'
import ray from '../assets/ray.png'
import casper from '../assets/casper.png'
import { IoMdStar, IoMdStarOutline } from "react-icons/io";


/**
 * 메인 페이지 - 한정 특가 상품 카드
 * @param {item, idx} props 
 * @returns 
 */
export const HotDealCard = (props) => {

    return (
        <div className='hotDealCard' style={{ marginLeft: props.idx === 0 ? 60 : 50 }}>
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
    )
}


/**
 * 메인 페이지 - 즉시 출고 상품 카드
 * @param {item, idx} props 
 * @returns 
 */
export const QuickDealCard = (props) => {
    return (
        <div className='quickDealCard' style={{ marginLeft: props.idx === 0 ? 60 : 50 }}>
            <img src={casper} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>현대 캐스퍼</h2>
                <p>48개월</p>
                <p>선납급 30%</p>
            </span>
            <p className='hotDealCardModel'>2023년형 가솔린 터보 1.0 인스퍼레이션 (A/T)</p>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>외장</p>
                <p className='quickDealCardInfo1'>아틀라스 화이트</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>내장</p>
                <p className='quickDealCardInfo1'>라이트 그레이/블루</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>옵션</p>
                <div className='quickDealCardInfoDiv'>
                    <p className='quickDealCardInfo1'>기본가/오토</p>
                    <p className='quickDealCardInfo1'>기본가/오토</p>
                    <p className='quickDealCardInfo1'>기본가/오토</p>
                </div>
            </span>
            <div className='quickDealCardBorder' />
            <span className='hotDealCardPriceDiv'>
                <p className='hotDealCardPriceTitle'>차량가</p>
                <p className='hotDealCardPrice'>20,100,000원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>월렌탈료</p>
                <p className='hotDealCardMonthPrice'> 245,400원</p>
            </span>
        </div>
    )
}


/**
 * 메인 페이지 - 이벤트 카드
 * @param {*} props 
 * @returns 
 */
export const EventCard = (props) => {
    return (
        <div className='eventCard'>
            <p>이벤트 {props.item}</p>
        </div>
    )
}

export const ReviewCard = (props) => {
    return (
        <div className='reviewCard'>
            <div>
                <div className='reviewCardStarDiv'>
                    <IoMdStar size={25} color='yellow' />
                    <IoMdStar size={25} color='yellow' />
                    <IoMdStar size={25} color='yellow' />
                    <IoMdStar size={25} color='yellow' />
                    <IoMdStarOutline size={25} color='yellow' />
                </div>
                <h2>Jihwan***</h2>
                <p>
                    정말 친절하게 상담해주셔서 덕분에 너무 편하게 선택할 수 있었습니다! 특히
                    심민혁 상담사님께서 매우 상세하고 이해하기 쉽게 설명해주셔서 큰 도움이 되
                    었습니다. 상담 과정 내내 저의 필요한 상황을 충분히 고려해주셨고, 모든 질문
                    에 성심성의껏 답해주셔서 감사했습니다.
                </p>
            </div>
        </div>
    )
}






/**
 * 메인 페이지 - 카드 아래 현재 위치 표시
 * @param {list, num, currentIndex, cardWidth, cardMargin, setOffset(), setCurrentIndex()} props 
 * @returns 
 */
export const CardIndicator = (props) => {
    return (
        <div className='indicator'>
            {props.list.slice(0, props.list.length - props.num).map((_, index) => (
                <span
                    key={index}
                    className={`indicatorDot ${props.currentIndex === index ? 'active' : ''}`}
                    onClick={() => {
                        // 클릭 시 해당 인덱스로 이동
                        const newOffset = index * (props.cardWidth + props.cardMargin);
                        props.setOffset(newOffset);
                        props.setCurrentIndex(index);
                    }}
                ></span>
            ))}
        </div>
    )
}



/**
 * 메인 페이지 - 이벤트 카드 아래 현재 위치 표시
 * @param {list, currentIndex, setCurrentIndex()} props 
 * @returns 
 */
export const EventCardIndicator = (props) => {
    return (
        <div className='indicator'>
            {props.list.slice(0, props.list.length / 3 + 1).map((_, index) => (
                <span
                    key={index}
                    className={`indicatorDot ${props.currentIndex === index ? 'active' : ''}`}
                    onClick={() => {
                        props.setCurrentIndex(index);
                    }}
                ></span>
            ))}
        </div>
    )
}