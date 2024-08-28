import React, { useState, useEffect } from "react"
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import '../styles/QuickDealPage.css'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import { QuickDealCarCard } from '../components/Cards'
import { quickDealAxios, eventAxios } from "../services/Request"
import FastFAQSticky from '../components/FastFAQSticky'
import NoCardList from "../components/NoCardList"



const QuickDealPage = (props) => {
    const [categoryStat, setCategoryStat] = useState('국산')
    const [brandStat, setBrandStat] = useState('all')
    const [listStat, setListStat] = useState('전체')
    const [quickDealList, setQuickDealList] = useState(null)
    const [banner, setBanner] = useState(null)


    const fetchData = async (entry, enter, category) => {
        const response = await quickDealAxios(entry, enter, category)
        setQuickDealList(response)
        const tmp2 = await eventAxios(3, 0)
        setBanner(tmp2)
    }

    useEffect(() => {
        fetchData(null, null, null)
    }, [])

    useEffect(() => {
        fetchData(categoryStat, brandStat, listStat)
    }, [categoryStat, brandStat, listStat])


    if (!quickDealList || !banner) {
        return null
    }
    return (
        <>
            <GNB stat={true} page={'즉시 출고'} />
            {banner[0] &&
                <div className='bannerSection'>
                    <img src={`${process.env.REACT_APP_IMG_URL}/${banner[0].img}.png`} alt='이벤트 베너' />
                </div>
            }
            <FastFAQSticky height={1150} />
            <div className='categorySection'>
                <h1>즉시 <span>출고</span></h1>
                <p>지금 바로 출고 할 수 있는 차량을 확인해보세요</p>
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => { setCategoryStat('국산'); setBrandStat('all'); }} className={categoryStat === '국산' ? 'selected' : ''}>국산 브랜드</h3>
                    <h3 onClick={() => { setCategoryStat('수입'); setBrandStat('all'); }} className={categoryStat === '수입' ? 'selected' : ''}>수입 브랜드</h3>
                </div>
                {categoryStat === '국산' ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} all={true} />
                    : <IncomeLogo setStat={setBrandStat} brandStat={brandStat} all={true} />
                }
            </div>
            <div className='quickCarListSection'>
                <h2>출고가능 차량 <span>{quickDealList ? quickDealList.length : '0'}대</span></h2>
                <div className='quickCarListSelectDiv'>
                    <p onClick={() => { setListStat('전체'); fetchData(categoryStat, brandStat, '전체') }} className={listStat === '전체' ? 'selected' : ''}>전체</p>
                    <p onClick={() => { setListStat('경차'); fetchData(categoryStat, brandStat, '경차') }} className={listStat === '경차' ? 'selected' : ''}>경차</p>
                    <p onClick={() => { setListStat('소형/승용'); fetchData(categoryStat, brandStat, '소형/승용') }} className={listStat === '소형/승용' ? 'selected' : ''}>소형/승용</p>
                    <p onClick={() => { setListStat('SUV'); fetchData(categoryStat, brandStat, 'SUV') }} className={listStat === 'SUV' ? 'selected' : ''}>SUV</p>
                    <p onClick={() => { setListStat('화물'); fetchData(categoryStat, brandStat, '화물') }} className={listStat === '화물' ? 'selected' : ''}>화물</p>
                </div>
                <div className='quickCarCardListDiv'>
                    {quickDealList.length === 0 && <NoCardList card={'차량이'} />}
                    {quickDealList && quickDealList.map((item, index) => (
                        <QuickDealCarCard
                            index={index}
                            item={item}
                        />
                    ))}

                </div>
            </div>
            <Footer />
        </>
    )
}

export default QuickDealPage