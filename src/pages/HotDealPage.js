import React, { useState, useEffect } from 'react'
import '../styles/HotDealPage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { HotDealCarCard } from '../components/Cards'
import { hotDealAxios } from '../services/Request'
import FastFAQSticky from '../components/FastFAQSticky'


const HotDealPage = (props) => {
    const [hotDealList, setHotDealList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const tmp = await hotDealAxios()
            setHotDealList(tmp)
        }
        fetchData()
    }, [])
    return (
        <>
            <GNB stat={true} page={'한정 특가'} />
            <div className='bannerSection'>
                <img src={require('../assets/img/banner/eventBanner2.png')}/>
            </div>
            <FastFAQSticky height={1150}/>
            <div className='hotDealTitleSection'>
                <h1>한정 <span>특가</span></h1>
                <p>특별 할인이 들어간 가격의 차량을 확인하세요</p>
            </div>
            <div className='carListSection'>
                <div>
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