import React from 'react';
import '../styles/App.css'
import '../styles/QuickFAQPage.css'
import '../styles/EventPage.css';
import eventImg1 from '../assets/img/banner/eventBanner1.png'
import eventImg2 from '../assets/img/banner/eventBanner2.png'
import { IoMdStar } from "react-icons/io";
import { RightIcon } from './Icons';




const carImageError = (img) => {
    let imageSrc;

    try {
        imageSrc = require(`../assets/img/car/${img}.png`);  // 동적으로 이미지 로드
    } catch (error) {
        imageSrc = require('../assets/img/dsautoline/DSAUTOLINE_car.png');  // 이미지가 없을 경우 대체 이미지 사용
    }

    return imageSrc
}




/**
 * 메인 페이지 - 한정 특가 상품 카드
 * @param {item, idx} props 
 * @returns 
 */
export const HotDealCard = (props) => {
    return (
        <div className='hotDealCard' onClick={() => window.location.href = `/Option/${props.item.car_code}`}>
            <img src={carImageError(props.item.img)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.lease_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.lease_price.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.rental_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.rental_price.toLocaleString()}</span>원</p>
            </span>
            <div className='infoPaddingDiv'>
                <span>
                    <p>48개월</p>
                    <p>선납금 30%</p>
                </span>
            </div>
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
        <div className='quickDealCard'>
            <img src={carImageError(props.item.img)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.enter} {props.item.name}</h2>
            </span>
            <p className='hotDealCardModel' style={{ marginBottom: 20 }}>{props.item.info}adfsvsvsdavsdvsdvsdvasdasdasdasdasdsa</p>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>외장</p>
                <p className='quickDealCardInfo1'>{props.item.out_color}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>내장</p>
                <p className='quickDealCardInfo1'>{props.item.in_color}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>옵션</p>
                <div className='quickDealCardInfoDiv'>
                    {props.item.option.length === 1
                        ? <>
                            <p className='quickDealCardInfo2'>{props.item.option[0].name}</p>
                        </>
                        : <>
                            <p className='quickDealCardInfo1'>{props.item.option[0] && props.item.option[0].name}, {props.item.option[1] && props.item.option[1].name}</p>
                            <p>외 {props.item.option.length}건</p>
                        </>
                    }

                </div>
            </span>
            <div className='quickDealCardBorder' />
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.lease_price.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.rental_price.toLocaleString()}</span>원</p>
            </span>
            <div className='infoPaddingDiv'>
                <span>
                    <p>48개월</p>
                    <p>선납금 30%</p>
                </span>
            </div>
        </div>
    )
}


/**
 * 메인 페이지 - 우수 카멘토
 * @param {*} props 
 * @returns 
 */
export const EventCard = (props) => {
    return (
        <div className='eventCard' onClick={() => { props.setCarmentoPopup(true); document.body.style.overflow = 'hidden' }}>
            <img src={require(`../assets/img/carmento/${props.item.img}.jpg`)} />
            <div>
                <span>
                    <p>{props.item.name} {props.item.position}에게 상담받기</p>
                    <RightIcon size={23} color={'white'} />
                </span>
            </div>
        </div>
    )
}




/**
 * 이벤트 페이지 - 이벤트 카드
 * @param {*} props 
 * @returns 
 */
export const EventCardlist = (props) => {
    const eventId = props.item.seq;

    return (
        <div
            className="eventCardlist"
            onClick={() => window.location.href = `/Event/${eventId}`}
        >
            <div className={`cardImgSection ${props.isEnded ? 'dimmed' : ''}`}>
                <img
                    src={carImageError(props.item.img)}
                    className="eventCardImg"
                    alt="이미지 로딩이 실패하였습니다"
                />
                {props.isEnded && (
                    <div className="overlayText">종료된 이벤트입니다</div>
                )}
            </div>
            <div className='eventCardTitle'>
                <h2>{props.item.title}</h2>
                <p>{props.item.start_date} ~ {props.item.end_date}</p>
            </div>
        </div>
    );
};


/**
 * 메인 페이지 - 리뷰 카드
 * @param {*} props 
 * @returns 
 */
export const ReviewCard = (props) => {
    return (
        <div className='reviewCard' onClick={() => window.location.href = `/ReviewMore/${props.item.seq}`}>
            <span><img src={carImageError(props.item.img)} /></span>
            <div>
                <h2>{props.item.enter} {props.item.car_name}</h2>
                <span>
                    <p>{props.item.comment}</p>
                </span>
                <span></span>
                <span>
                    <p>{props.item.name[0]}*{props.item.name[2]} 님</p>
                    <p>{props.item.created_at.split('T')[0]}</p>
                </span>
                <span>
                    <p>평점</p>
                    <div className='reviewCardStarDiv'>
                        {Array.from({ length: props.item.star }, (_, index) => (
                            <IoMdStar size={33} color='#FBDA03' />
                        ))}
                        {/* <IoMdStarOutline size={25} color='#FBDA03' /> */}
                    </div>
                </span>
            </div>
        </div>
    )
}


/**
 * 메인 페이지 - 인기 차량 리스트 카드
 * @param {*} props 
 * @returns 
 */
export const PopularCarCard = (props) => {
    return (
        <div
            className={`carCard ${props.carStat === props.index ? 'selected' : ''}`}
            onClick={() => props.setCarStat(props.index)}
        >
            <img src={require(`../assets/img/car/${props.item.img}.png`)} alt='2024 Ray' />
            <h2>{props.item.name}</h2>
            <p>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.leasePrice.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv' style={{ marginBottom: 40 }}>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.rentalPrice.toLocaleString()}</span>원</p>
            </span>
        </div>
    )
}





/**
 * 빠른 간편 문의 - 차량 리스트 카드
 * @param {*} props 
 * @returns 
 */
export const QuickCarCard = (props) => {
    return (
        <div
            className={`carCard ${props.carStat === props.index ? 'selected' : ''}`}
            onClick={() => props.setCarStat(props.index)}
        >
            <img src={carImageError(props.item.img)} alt='2024 Ray' />
            <h2>{props.item.name}</h2>
            <p>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.lease_price.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv' style={{ marginBottom: 40 }}>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.rental_price.toLocaleString()}</span>원</p>
            </span>
        </div>
    )
}





/**
 * 한정 특가 - 차량 리스트 카드
 * @param {*} props 
 * @returns 
 */
export const HotDealCarCard = (props) => {
    return (
        <div className='hotDealCard' onClick={() => window.location.href = `/Option/${props.item.car_code}`}>
            <img src={carImageError(props.item.img)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.lease_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.lease_price.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.rental_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.rental_price.toLocaleString()}</span>원</p>
            </span>
            <div className='infoPaddingDiv'>
                <span>
                    <p>48개월</p>
                    <p>선납금 30%</p>
                </span>
            </div>
        </div>
    )
}


/**
 * 즉시 출고 - 차량 리스트 카드
 * @param {*} props 
 * @returns 
 */
export const QuickDealCarCard = (props) => {
    return (
        <div className='quickDealCard' onClick={() => window.location.href = `/Estimated/${props.item.car_code}`}>
            <img src={carImageError(props.item.img)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.enter} {props.item.name}</h2>
            </span>
            <p className='hotDealCardModel' style={{ marginBottom: 20 }}>{props.item.info}</p>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>외장</p>
                <p className='quickDealCardInfo1'>{props.item.out_color}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>내장</p>
                <p className='quickDealCardInfo1'>{props.item.in_color}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>옵션</p>
                <div className='quickDealCardInfoDiv'>
                    {props.item.option.length === 1
                        ? <>
                            <p className='quickDealCardInfo2'>{props.item.option[0].name}</p>
                        </>
                        : <>
                            <p className='quickDealCardInfo1'>{props.item.option[0] && props.item.option[0].name}, {props.item.option[1] && props.item.option[1].name}</p>
                            <p>외 {props.item.option.length}건</p>
                        </>
                    }

                </div>
            </span>
            <div className='quickDealCardBorder' />
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.lease_price.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.rental_price.toLocaleString()}</span>원</p>
            </span>
            <div className='infoPaddingDiv'>
                <span>
                    <p>48개월</p>
                    <p>선납금 30%</p>
                </span>
            </div>
        </div>
    )
}




/**
 * 리뷰 페이지 - 리뷰 카드
 * @param {*} props 
 * @returns 
 */
export const ReviewPageCard = (props) => {
    return (
        <div className='reviewCard' onClick={() => window.location.href = `/ReviewMore/${props.item.seq}`}>
            <span><img src={carImageError(props.item.img)} /></span>
            <div>
                <h2>{props.item.enter} {props.item.car_name}</h2>
                <span>
                    <p>{props.item.comment}</p>
                </span>
                <span></span>
                <span>
                    <p>{props.item.name[0]}*{props.item.name[2]} 님</p>
                    <p>{props.item.created_at.split('T')[0]}</p>
                </span>
                <span>
                    <p>평점</p>
                    <div className='reviewCardStarDiv'>
                        {Array.from({ length: props.item.star }, (_, index) => (
                            <IoMdStar size={33} color='#FBDA03' />
                        ))}
                        {/* <IoMdStarOutline size={25} color='#FBDA03' /> */}
                    </div>
                </span>
            </div>
        </div>
    )
}

