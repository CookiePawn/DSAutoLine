import React, { useState } from 'react';
import '../styles/App.css'
import '../styles/QuickFAQPage.css'
import '../styles/EventPage.css';
import { IoMdStar } from "react-icons/io";
import { RightIcon } from './Icons';
import { QuickDealCarCard_Popup } from '../components/PopUp';




/**
 * 메인 페이지 - 한정 특가 상품 카드
 * @param {item, idx} props 
 * @returns 
 */
export const HotDealCard = (props) => {
    return (
        <div className='hotDealCard' onClick={() => window.location.href = `/Option/${props.item.car_code}`}>
            <img
                className='hotDealCardImg'
                src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                alt="한정 특가 상품 이미지"
                onError={(e) => {
                    e.target.onerror = null; // 무한 루프 방지
                    e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                }}
            />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌트 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.rental_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.rental_price && props.item.rental_price.toLocaleString()}</span> 원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.lease_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.lease_price && props.item.lease_price.toLocaleString()}</span> 원</p>
            </span>
            <div className='infoPaddingDiv'>
                <span>
                    <p>{props.item.payment}</p>
                    <p>{props.item.deposit} 30%</p>
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
        <>
            <div className='quickDealCard' onClick={() => { props.setPopup(props.item.car_code); document.body.style.overflowY = 'hidden' }}>
                <img
                    className='hotDealCardImg'
                    src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                    alt="즉시 출고 상품 이미지"
                    onError={(e) => {
                        e.target.onerror = null; // 무한 루프 방지
                        e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                    }}
                />
                <span className='hotDealCardTitleDiv'>
                    <h2>{props.item.enter} {props.item.name}</h2>
                </span>
                <p className='quickDealCardModel' style={{ marginBottom: 20 }}>{props.item.info}</p>
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
                        {props.item.option.length <= 2
                            ? <>
                                {props.item.option.map((item, idx) => (
                                    <p className='quickDealCardInfo2'>{item.name}{idx === 0 && props.item.option.length === 2 && ', '}</p>
                                ))}
                            </>
                            : <>
                                <p className='quickDealCardInfo1'>{props.item.option[0] && props.item.option[0].name}, {props.item.option[1] && props.item.option[1].name}</p>
                                <p className='quickDealCardInfoMore'>외 {props.item.option.length - 2}건</p>
                            </>
                        }
                    </div>
                </span>
                <div className='quickDealCardBorder' />
                <span className='hotDealCardMonthPriceDiv'>
                    <p className='hotDealCardMonthPriceTitle'>차량가</p>
                    <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.price && props.item.price.toLocaleString()}</span> 원</p>
                </span>
                <span className='hotDealCardMonthPriceDiv'>
                    <p className='hotDealCardMonthPriceTitle'>렌트 (월)</p>
                    <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.month_price && props.item.month_price.toLocaleString()}</span> 원</p>
                </span>
                <div className='infoPaddingDiv'>
                    <span>
                        <p>{props.item.payment}</p>
                        <p>{props.item.deposit} 30%</p>
                    </span>
                </div>
            </div>
        </>
    )
}


/**
 * 메인 페이지 - 우수 카멘토
 * @param {*} props 
 * @returns 
 */
export const EventCard = (props) => {
    return (
        <div className='eventCard' onClick={() => { props.setCarmentoPopup(true); props.setMento(`${props.item.name} ${props.item.position}`); document.body.style.overflow = 'hidden' }}>
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
    return (
        <div
            className="eventCardlist"
            onClick={() => window.location.href = `/Event/${props.item.event_num}`}
        >
            <div className={`cardImgSection ${props.isEnded ? 'dimmed' : ''}`}>
                <img
                    className="eventCardImg"
                    src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                    alt="이벤트 카드 이미지"
                    onError={(e) => {
                        e.target.onerror = null; // 무한 루프 방지
                        e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                    }}
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
            <span>
                <img
                    src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                    alt="리뷰 이미지"
                    onError={(e) => {
                        e.target.onerror = null; // 무한 루프 방지
                        e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                    }}
                />
            </span>
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
        <div className='carCard' onClick={() => window.location.href = `/Option/${props.item.car_code}`}>
            <img
                src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                alt="차량 이미지"
                onError={(e) => {
                    e.target.onerror = null; // 무한 루프 방지
                    e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                }}
            />
            <h2>{props.item.name}</h2>
            <p>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>차량가</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.rental_price.toLocaleString()}</span>원</p>
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
            <img
                src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                alt="빠른 간편 문의 카드 이미지"
                onError={(e) => {
                    e.target.onerror = null; // 무한 루프 방지
                    e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                }}
            />
            <h2>{props.item.name}</h2>
            <p>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>차량가</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.price && props.item.price.toLocaleString()}</span> 원</p>
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
            <img
                className='hotDealCardImg'
                src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                alt="한정 특가 카드 이미지"
                onError={(e) => {
                    e.target.onerror = null; // 무한 루프 방지
                    e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                }}
            />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌트 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.rental_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.rental_price.toLocaleString()}</span> 원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.lease_percent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.lease_price.toLocaleString()}</span> 원</p>
            </span>
            <div className='infoPaddingDiv'>
                <span>
                    <p>{props.item.payment}</p>
                    <p>{props.item.deposit} 30%</p>
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
    const [isUsePopupVisible1, setIsUsePopupVisible1] = useState(null);


    return (
        <>
            {isUsePopupVisible1 !== null && <QuickDealCarCard_Popup setPopup={setIsUsePopupVisible1} id={isUsePopupVisible1} />}
            <div className='quickDealCard' onClick={() => { setIsUsePopupVisible1(props.item.car_code); document.body.style.overflowY = 'hidden' }}>
                <img
                    className='hotDealCardImg'
                    src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                    alt="즉시 출고 카드 이미지"
                    onError={(e) => {
                        e.target.onerror = null; // 무한 루프 방지
                        e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                    }}
                />
                <span className='hotDealCardTitleDiv'>
                    <h2>{props.item.enter} {props.item.name}</h2>
                </span>
                <p className='quickDealCardModel' style={{ marginBottom: 20 }}>{props.item.info}</p>
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
                        {props.item.option.length <= 2
                            ? <>
                                {props.item.option.map((item, idx) => (
                                    <p className='quickDealCardInfo2'>{item.name}{idx === 0 && props.item.option.length === 2 && ', '}</p>
                                ))}
                            </>
                            : <>
                                <p className='quickDealCardInfo1'>{props.item.option[0] && props.item.option[0].name}, {props.item.option[1] && props.item.option[1].name}</p>
                                <p className='quickDealCardInfoMore'>외 {props.item.option.length - 2}건</p>
                            </>
                        }
                    </div>
                </span>
                <div className='quickDealCardBorder' />
                <span className='hotDealCardMonthPriceDiv'>
                    <p className='hotDealCardMonthPriceTitle'>차량가</p>
                    <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.price && props.item.price.toLocaleString()}</span> 원</p>
                </span>
                <span className='hotDealCardMonthPriceDiv'>
                    <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                    <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.month_price && props.item.month_price.toLocaleString()}</span> 원</p>
                </span>
                <div className='infoPaddingDiv'>
                    <span>
                        <p>{props.item.payment}</p>
                        <p>{props.item.deposit} 30%</p>
                    </span>
                </div>
            </div>
        </>
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
            <span>
                <img
                    src={`${process.env.REACT_APP_IMG_URL}/${props.item.img}.png`}
                    alt="리뷰 이미지"
                    onError={(e) => {
                        e.target.onerror = null; // 무한 루프 방지
                        e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                    }}
                />
            </span>
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

