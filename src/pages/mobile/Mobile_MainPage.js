import React, { useState, useEffect } from "react";
import '../../styles/mobile/Mobile_MainPage.css'
import Mobile_GNB from "../../components/mobile/Mobile_GNB";
import Mobile_Footer from "../../components/mobile/Mobile_Footer";
import Mobile_MainPage_Banner from "../../components/mobile/Mobile_MainPage_Banner";
import Mobile_MainPage_FastFAQ from "../../components/mobile/Mobile_MainPage_FastFAQ";
import { 
    Mobile_HotDealCard, 
    Mobile_QuickDealCard, 
    Mobile_PopularCard,
    Mobile_ReviewCard, 
    Mobile_CarmentoCard
} from "../../components/mobile/Mobile_Card";
import {
    hotDealAxios,
    quickDealAxios,
    reviewAxios,
    popularListAxios,
    eventAxios,
} from '../../services/Request';
import NoCardList from '../../components/NoCardList'


const Mobile_MainPage = (props) => {
    //DB 리스트 로드
    const [hotDealList, setHotDealList] = useState(null)
    const [quickDealList, setQuickDealList] = useState(null)
    const [reviewList, setReviewList] = useState(null)
    const [popularList, setPopularList] = useState(null)
    const [eventLine, setEventLine] = useState(null)



    useEffect(() => {
        const fetchData = async () => {
            const response1 = await hotDealAxios()
            setHotDealList(response1)
            const response2 = await quickDealAxios(null, null, null)
            setQuickDealList(response2)
            const response3 = await reviewAxios(0)
            setReviewList(response3)
            const response4 = await popularListAxios()
            setPopularList(response4)
            const response5 = await eventAxios(4, 0)
            setEventLine(response5)
        }
        fetchData()
    }, [])

    if (!hotDealList || !quickDealList || !reviewList || !popularList || !eventLine) {
        return null
    }
    return (
        <div className="mobile_container">
            <Mobile_GNB page={'메인'} />
            <section className="mobile_main_eventBannerSection">
                <Mobile_MainPage_Banner />
            </section>
            <Mobile_MainPage_FastFAQ />
            <section className="mobile_main_hotDealSection">
                <h3>한정 특가</h3>
                <span>
                    {hotDealList.length === 0 && <NoCardList card={'차량이'} />}
                    {hotDealList.map((item, _) => (
                        <Mobile_HotDealCard item={item} />
                    ))}
                </span>
                <button onClick={() => window.location.href='/HotDeal'}>자세히 보기</button>
            </section>
            <section className="mobile_main_quickDealSection">
                <h3>즉시 출고</h3>
                <span>
                    {quickDealList.length === 0 && <NoCardList card={'차량이'} />}
                    {quickDealList.map((item, _) => (
                        <Mobile_QuickDealCard item={item} />
                    ))}
                </span>
                <button onClick={() => window.location.href='/QuickDeal'}>자세히 보기</button>
            </section>
            <section className="mobile_main_lineBannerSection">
                <img src={`${process.env.REACT_APP_IMG_URL}/${eventLine[0].img}.png`} />
            </section>
            <section className="mobile_main_popularSection">
                <h3>가장 인기 많은 차량</h3>
                <span>
                    {popularList.length === 0 && <NoCardList card={'차량이'} />}
                    {popularList.map((item, _) => (
                        <Mobile_PopularCard item={item} />
                    ))}
                </span>
            </section>
            <section className="mobile_main_reviewSection">
                <p onClick={() => window.location.href='/Review'}>전체 보기 〉</p>
                <h3>고객 리뷰</h3>
                <span>
                    {reviewList.length === 0 && <NoCardList card={'이벤트가'} />}
                    {reviewList.map((item, _) => (
                        <Mobile_ReviewCard item={item} />
                    ))}
                </span>
            </section>
            <section className="mobile_main_carmentoSection">
                <h3>우수 카멘토</h3>
                <span>
                    <Mobile_CarmentoCard name={'김태경 팀장'}/>
                    <Mobile_CarmentoCard name={'허종현 대리'}/>
                    <Mobile_CarmentoCard name={'최진욱 대리'}/>
                    <Mobile_CarmentoCard name={'정의석 과장'}/>
                </span>
            </section>
            <section className="mobile_main_partnerSection">
                <h3>제휴 파트너사</h3>
                <img src={require('../../assets/img/partner/mobile_partner1.png')}/>
                <img src={require('../../assets/img/partner/mobile_partner2.png')}/>
            </section>
            <Mobile_Footer />
        </div>
    )
}


export default Mobile_MainPage