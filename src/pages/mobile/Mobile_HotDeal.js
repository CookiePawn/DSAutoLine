import React, { useState, useEffect } from "react";
import '../../styles/mobile/Mobile_HotDeal.css'
import Mobile_GNB from "../../components/mobile/Mobile_GNB";
import Mobile_Footer from "../../components/mobile/Mobile_Footer";
import { hotDealAxios, eventAxios } from '../../services/Request'
import { Mobile_HotDealPageCard } from "../../components/mobile/Mobile_Card";
import NoCardList from '../../components/NoCardList'



const Mobile_HotDeal = (props) => {
    const [hotDealList, setHotDealList] = useState(null)
    const [banner, setBanner] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const tmp1 = await hotDealAxios()
            setHotDealList(tmp1)
            const tmp2 = await eventAxios(2, 0)
            setBanner(tmp2)
        }
        fetchData()
    }, [])


    if (!hotDealList || !banner) {
        return (
            <img
                src={`${process.env.REACT_APP_IMG_URL}/error.png`}
                style={{width: '100%', height: '100%'}}
            />
        )
    }
    return (
        <div className="mobile_container">
            <Mobile_GNB page={'한정 특가'} />
            <section className="mobile_hotDeal_eventBannerSection">
                <img src={`${process.env.REACT_APP_IMG_URL}/${banner[0].img}.png`} alt='이벤트 베너' />
            </section>
            <section className="mobile_hotDeal_hotDealListSection">
                <h3>한정 특가</h3>
                <p>특별 할인이 들어간 차량 가격을 확인하세요.</p>
                <span>
                    {hotDealList.length === 0 && <NoCardList card={'차량이'} />}
                    {hotDealList.map((item, _) => (
                        <Mobile_HotDealPageCard item={item} />
                    ))}
                </span>
            </section>
            <Mobile_Footer />
        </div>
    )
}

export default Mobile_HotDeal