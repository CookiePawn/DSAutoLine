import React, { useState, useEffect } from 'react';
import '../styles/App.css'
import '../styles/QuickFAQPage.css'
import ray from '../assets/img/car/ray.png'
import santafe from '../assets/img/car/santafe.png'
import morning from '../assets/img/car/morning.png'
import eventimg from '../assets/eventimage.png'
import reviewImg1 from '../assets/img/review/review1.png'
import { IoMdStar, IoMdStarOutline } from "react-icons/io";



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
    } else {
        return (((document.body.clientWidth * 0.95) - 90) / 4);
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
            <img src={ray} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>레이</h2>
            </span>
            <p className='hotDealCardModel'>2024년형 가솔린 1.0 트랜디 (A/T)</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>26%</span> · </p>
                <p className='hotDealCardMonthPrice'><span> 205,150</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>26%</span> · </p>
                <p className='hotDealCardMonthPrice'><span> 205,150</span>원</p>
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
            <img src={santafe} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>현대 디 올 뉴 싼타페</h2>
            </span>
            <p className='hotDealCardModel'>2024년형 가솔린 터보 2.5 2WD 익스클루시브 (7인승)</p>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>외장</p>
                <p className='quickDealCardInfo1'>크리미 화이트</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>내장</p>
                <p className='quickDealCardInfo1'>블랙</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>옵션</p>
                <div className='quickDealCardInfoDiv'>
                    <p className='quickDealCardInfo1'>크리미 화이트 펄 외장컬러, 파노라마 썬루프</p>
                    <p>외 2건</p>
                </div>
            </span>
            <div className='quickDealCardBorder' />
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice'><span> 235,980</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice'><span> 249,800</span>원</p>
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
    return (
        <div className='eventCard' style={{ minWidth: ((window.innerWidth * 0.95) - 137) / 5 }}>
            <p>김태경 팀장에게 상담받기 〉</p>
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
            <span><img src={reviewImg1} style={{width: '100%'}}/></span>
            <div>
                <h2>기아 K3</h2>
                <span>
                    <p>
                        정말 친절하게 상담해주셔서 덕분에 너무 편하게 선택할 수 있었습니다! 특히
                        심민혁 상담사님께서 매우 상세하고 이해하기 쉽게 설명해주셔서 큰 도움이 되
                        었습니다. 상담 과정 내내 저의 필요한 상황을 충분히 고려해주셨고, 모든 질문
                        에 성심성의껏 답해주셔서 감사했습니다.
                    </p>
                </span>
                <span></span>
                <div className='reviewCardStarDiv'>
                    <IoMdStar size={33} color='#FBDA03' />
                    <IoMdStar size={33} color='#FBDA03' />
                    <IoMdStar size={33} color='#FBDA03' />
                    <IoMdStar size={33} color='#FBDA03' />
                    <IoMdStar size={33} color='#FBDA03' />
                    {/* <IoMdStarOutline size={25} color='#FBDA03' /> */}
                </div>

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
            <img src={morning} alt='2024 Ray' />
            <h2>모닝</h2>
            <p>2024년형 가솔린 1.0 트렌디 (A/T)</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice'><span> 151,200</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv' style={{marginBottom: 40}}>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice'><span> 187,207</span>원</p>
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
            <img src={ray} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>레이</h2>
            </span>
            <p className='hotDealCardModel'>2024년형 가솔린 1.0 트랜디 (A/T)</p>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>26%</span> · </p>
                <p className='hotDealCardMonthPrice'><span> 205,150</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPricePercent'><span>26%</span> · </p>
                <p className='hotDealCardMonthPrice'><span> 205,150</span>원</p>
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
            <img src={santafe} className='hotDealCardImg' />
            <span className='hotDealCardTitleDiv'>
                <h2>현대 디 올 뉴 싼타페</h2>
            </span>
            <p className='hotDealCardModel'>2024년형 가솔린 터보 2.5 2WD 익스클루시브 (7인승)</p>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>외장</p>
                <p className='quickDealCardInfo1'>크리미 화이트</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>내장</p>
                <p className='quickDealCardInfo1'>블랙</p>
            </span>
            <span className='quickDealCardOptionDiv'>
                <p className='quickDealCardTitle1'>옵션</p>
                <div className='quickDealCardInfoDiv'>
                    <p className='quickDealCardInfo1'>크리미 화이트 펄 외장컬러, 파노라마 썬루프</p>
                    <p>외 2건</p>
                </div>
            </span>
            <div className='quickDealCardBorder' />
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>리스 (월)</p>
                <p className='hotDealCardMonthPrice'><span> 235,980</span>원</p>
            </span>
            <span className='hotDealCardMonthPriceDiv'>
                <p className='hotDealCardMonthPriceTitle'>렌탈 (월)</p>
                <p className='hotDealCardMonthPrice'><span> 249,800</span>원</p>
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