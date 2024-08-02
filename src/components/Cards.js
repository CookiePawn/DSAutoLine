import React, { useState, useEffect } from 'react';
import '../styles/App.css'
import '../styles/QuickFAQPage.css'
import ray from '../assets/img/car/ray.png'
import santafe from '../assets/img/car/santafe.png'
import morning from '../assets/img/car/morning.png'
import eventimg from '../assets/eventimage.png'
import reviewImg1 from '../assets/img/review/review1.png'
import carmento1 from '../assets/img/carmento/carmento1.jpg'
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { RightIcon } from './Icons';
import { quickDealList } from '../assets/item';



/**
 * 메인 페이지 - 한정 특가 및 즉시 출고에 사용
 * @returns 카드 크기
 */
const mainResize = () => {
    if (document.body.clientWidth < 700) {
        return (((document.body.clientWidth * 0.95) - 0) / 1);
    } else if (document.body.clientWidth < 1070) {
        return (((document.body.clientWidth * 0.95) - 30) / 2);
    } else if (document.body.clientWidth < 1450) {
        return (((document.body.clientWidth * 0.95) - 60) / 3);
    } else if (document.body.clientWidth < 1700) {
        return (((document.body.clientWidth * 0.95) - 90) / 4);
    } else {
        return (((document.body.clientWidth * 0.95) - 120) / 5);
    }
};


/**
 * 빠른 간편 문의에 사용
 * @returns 카드 크기
 */
const quickResize = () => {
    // ~ 989 : 2개 
    // 990 ~ 1239 : 3개
    // 1240 ~ : 4개
    // 1500 ~ : 5개
    if (window.innerWidth < 500) {
        return (((window.innerWidth * 0.95) - 0) / 1);
    } else if (window.innerWidth < 990) {
        return (((window.innerWidth * 0.95) - 51) / 2);
    } else if (window.innerWidth < 1450) {
        return (((window.innerWidth * 0.95) - 83) / 3);
    } else if (window.innerWidth < 1929) {
        return (((window.innerWidth * 0.95) - 115) / 4);
    } else {
        return (((window.innerWidth * 0.95) - 147) / 5);
    }
};

/**
 * 이벤트 페이지에 사용
 * @returns 카드 크기
 */
const eventResize = () => {
    // ~ 989 : 2개 
    // 990 ~ 1239 : 3개
    // 1240 ~ : 4개
    // 1500 ~ : 5개
    if (window.innerWidth < 500) {
        return (((window.innerWidth * 0.95) - 0) / 1);
    } else if (window.innerWidth < 990) {
        return (((window.innerWidth * 0.95) - 51) / 2);
    } else if (window.innerWidth < 1450) {
        return (((window.innerWidth * 0.95) - 83) / 3);
    } else if (window.innerWidth < 1929) {
        return (((window.innerWidth * 0.95) - 115) / 4);
    } else {
        return (((window.innerWidth * 0.95) - 147) / 5);
    }
};


/**
 * 메인 페이지 - 우수 카멘토
 * @returns 카드 크기
 */
const carmentoResize = () => {
    if (window.innerWidth < 990) {
        return (((window.innerWidth * 0.95) - 46) / 2);
    } else if (window.innerWidth < 1300) {
        return (((window.innerWidth * 0.95) - 76) / 3);
    } else if (window.innerWidth < 1500) {
        return (((window.innerWidth * 0.95) - 108) / 4);
    } else {
        return ((window.innerWidth * 0.95) - 137) / 5;
    }

};



/**
 * 메인 페이지 - 한정 특가 상품 카드
 * @param {item, idx} props 
 * @returns 
 */
export const HotDealCard = (props) => {
    const [windowWidth, setWindowWidth] = useState(mainResize());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(mainResize());
            props.setIndex(Math.floor(window.innerWidth / mainResize()))
        };
        handleResize()

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='hotDealCard' style={{ minWidth: windowWidth }}>
            <img src={require(`../assets/img/car/${props.item.img}.png`)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.leasePercent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.leasePrice.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.rentalPercent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.rentalPrice.toLocaleString()}</span>원</p>
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
    const [windowWidth, setWindowWidth] = useState(mainResize());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(mainResize());
            props.setIndex(Math.floor(window.innerWidth / mainResize()))
        };
        handleResize()

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='quickDealCard' style={{ minWidth: windowWidth }}>
            <img src={require(`../assets/img/car/${props.item.img}.png`)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.enter} {props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='quickDealCardOptionDiv' style={{marginTop: 20}}>
                <p className='quickDealCardTitle1'>외장</p>
                <p className='quickDealCardInfo1'>{props.item.outColor}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>내장</p>
                <p className='quickDealCardInfo1'>{props.item.inColor}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>옵션</p>
                <div className='quickDealCardInfoDiv'>
                    {props.item.option.length === 1
                        ? <>
                            <p className='quickDealCardInfo2'>{props.item.option[0][1]}</p>
                        </>
                        : <>
                            <p className='quickDealCardInfo1'>{props.item.option[0][1]}, {props.item.option[1][2]}</p>
                            <p>외 {props.item.option.length}건</p>
                        </>
                    }

                </div>
            </span>
            <div className='quickDealCardBorder' />
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.leasePrice.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.rentalPrice.toLocaleString()}</span>원</p>
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
 * 메인 페이지 - 이벤트 카드
 * @param {*} props 
 * @returns 
 */
export const EventCard = (props) => {
    const [cardNum, setCardNum] = useState(carmentoResize())

    useEffect(() => {
        const handleResize = () => {
            setCardNum(carmentoResize())
        };
        handleResize()

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='eventCard' style={{ minWidth: cardNum, backgroundImage: `url(${carmento1})` }}>
            <div>
                <span>
                    <p>김태경 팀장에게 상담받기</p>
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
    const { item } = props;

    const [windowWidth, setWindowWidth] = useState(eventResize());

    return (
        <div className='eventCardlist'>
            <img src={eventimg} className='eventCardImg' />
            <div className='eventCardTitle'>
                <h2>{item.name}</h2>
                <p>{item.period}</p>
            </div>
        </div>
    )
}


/**
 * 메인 페이지 - 리뷰 카드
 * @param {*} props 
 * @returns 
 */
export const ReviewCard = (props) => {
    const [windowWidth, setWindowWidth] = useState(mainResize());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(mainResize());
        };
        handleResize()

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='reviewCard' style={{ minWidth: windowWidth }}>
            <span><img src={require(`../assets/img/review/${props.item.img}.png`)} style={{ width: '100%' }} /></span>
            <div>
                <h2>{props.item.enter} {props.item.car}</h2>
                <span>
                    <p>{props.item.content}</p>
                </span>
                <span></span>
                <span>
                    <p>{props.item.name[0]}*{props.item.name[2]} 님</p>
                    <p>{props.item.DATE}</p>
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
 * 메인 페이지 - 카드 아래 현재 위치 표시
 * @param {list, num, currentIndex, setOffset(), setCurrentIndex()} props 
 * @returns 
 */
export const CardIndicator = (props) => {
    return (
        <div className='indicator'>
            {props.list.slice(0, props.list.length / props.num + 1).map((_, index) => (
                <span
                    key={index}
                    className={`indicatorDot ${props.currentIndex === index ? 'active' : ''}`}
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
            {props.list.slice(0, props.list.length / 5 + 1).map((_, index) => (
                <span
                    key={index}
                    className={`indicatorDot ${props.currentIndex === index ? 'active' : ''}`}
                ></span>
            ))}
        </div>
    )
}





/**
 * 빠른 간편 문의 - 차량 리스트 카드
 * @param {*} props 
 * @returns 
 */
export const QuickCarCard = (props) => {
    const [windowWidth, setWindowWidth] = useState(quickResize());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(quickResize());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div
            className={`carCard ${props.carStat === props.index ? 'selected' : ''}`}
            style={{ maxWidth: windowWidth }}
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
 * 한정 특가 - 차량 리스트 카드
 * @param {*} props 
 * @returns 
 */
export const HotDealCarCard = (props) => {
    const [windowWidth, setWindowWidth] = useState(quickResize());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(quickResize());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='hotDealCard' style={{ maxWidth: windowWidth }}>
            <img src={require(`../assets/img/car/${props.item.img}.png`)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.leasePercent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.leasePrice.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>{props.item.rentalPercent}%</span> · </p>
                <p className='hotDealCardMonthPrice'><span>{props.item.rentalPrice.toLocaleString()}</span>원</p>
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
    const [windowWidth, setWindowWidth] = useState(quickResize());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(quickResize());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='quickDealCard' style={{ maxWidth: windowWidth }}>
            <img src={require(`../assets/img/car/${props.item.img}.png`)} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>{props.item.enter} {props.item.name}</h2>
            </span>
            <p className='hotDealCardModel'>{props.item.info}</p>
            <span className='quickDealCardOptionDiv'  style={{marginTop: 20}}>
                <p className='quickDealCardTitle1'>외장</p>
                <p className='quickDealCardInfo1'>{props.item.outColor}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>내장</p>
                <p className='quickDealCardInfo1'>{props.item.inColor}</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>옵션</p>
                <div className='quickDealCardInfoDiv'>
                    {props.item.option.length === 1
                        ? <>
                            <p className='quickDealCardInfo2'>{props.item.option[0][1]}</p>
                        </>
                        : <>
                            <p className='quickDealCardInfo1'>{props.item.option[0][1]}, {props.item.option[1][2]}</p>
                            <p>외 {props.item.option.length}건</p>
                        </>
                    }

                </div>
            </span>
            <div className='quickDealCardBorder' />
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.leasePrice.toLocaleString()}</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice' style={{ marginLeft: 'auto' }}><span>{props.item.rentalPrice.toLocaleString()}</span>원</p>
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