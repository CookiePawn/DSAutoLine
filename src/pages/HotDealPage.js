import React, { useState, useEffect } from 'react'
import '../styles/HotDealPage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { HotDealCarCard } from '../components/Cards'
import { hotDealAxios, eventAxios } from '../services/Request'
import FastFAQSticky from '../components/FastFAQSticky'
import NoCardList from '../components/NoCardList'


const HotDealPage = (props) => {
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
        return null
    }
    return (
        <>
            <GNB stat={true} page={'한정 특가'} />
            {banner[0] &&
                <div className='bannerSection'>
                    <img src={`${process.env.REACT_APP_IMG_URL}/${banner[0].img}.png`} alt='이벤트 베너' />
                </div>
            }
            <FastFAQSticky height={1150} />
            <div className='hotDealTitleSection'>
                <h1>한정 <span>특가</span></h1>
                <p>특별 할인이 들어간 가격의 차량을 확인하세요</p>
            </div>
            <div className='carListSection'>
                <div>
                    {hotDealList.length === 0 && <NoCardList card={'차량이'} />}
                    {hotDealList && hotDealList.map((item, idx) => (
                        <HotDealCarCard item={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}



export default HotDealPage