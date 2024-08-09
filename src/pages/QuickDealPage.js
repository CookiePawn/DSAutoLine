import React, { useState, useEffect } from "react"
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import '../styles/QuickDealPage.css'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import { QuickDealCarCard } from '../components/Cards'
import { quickDealList } from "../assets/item"



const QuickDealPage = (props) => {
    const [categoryStat, setCategoryStat] = useState('국산')
    const [brandStat, setBrandStat] = useState('all')
    const [listStat, setListStat] = useState('전체')
    const [filteredList, setFilteredList] = useState(quickDealList.filter((item) => item.entry === '국산'))


    useEffect(() => {
        brandStat === 'all'
            ? setFilteredList(quickDealList.filter((item) => item.entry === categoryStat))
            : entryFilter(categoryStat, listStat);
        
    }, [brandStat])

    const entryFilter = (cStat, lStat) => {
        setCategoryStat(cStat);
        setListStat(lStat);

        if (brandStat === 'all') return null

        if (cStat === '국산') {
            lStat === '전체'
                ? setFilteredList(quickDealList.filter((item) => item.entry === cStat && item.enter === brandStat))
                : setFilteredList(quickDealList.filter((item) => item.entry === cStat && item.enter === brandStat && item.category === lStat))
        } else {
            setFilteredList(quickDealList.filter((item) => item.entry === '수입'))
        }
    }


    return (
        <>
            <GNB stat={true} page={'즉시 출고'} />
            <div className='bannerSection'>
                <p>즉시 출고 이벤트 배너</p>
            </div>
            <div className='categorySection'>
                <h1>즉시 <span>출고</span></h1>
                <p>지금 바로 출고 할 수 있는 차량을 확인해보세요</p>
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => entryFilter('국산', listStat)} className={categoryStat === '국산' ? 'selected' : ''}>국산 브랜드</h3>
                    <h3 onClick={() => entryFilter('수입', listStat)} className={categoryStat === '수입' ? 'selected' : ''}>수입 브랜드</h3>
                </div>
                {categoryStat === '국산' ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} all={true} />
                    : <IncomeLogo />
                }
            </div>
            <div className='quickCarListSection'>
                <h2>출고가능 차량 <span>{filteredList.length}대</span></h2>
                <div className='quickCarListSelectDiv'>
                    <p onClick={() => entryFilter(categoryStat, '전체')} className={listStat === '전체' ? 'selected' : ''}>전체</p>
                    <p onClick={() => entryFilter(categoryStat, '소형/승용')} className={listStat === '소형/승용' ? 'selected' : ''}>소형/승용</p>
                    <p onClick={() => entryFilter(categoryStat, '세단')} className={listStat === '세단' ? 'selected' : ''}>세단</p>
                    <p onClick={() => entryFilter(categoryStat, 'SUV')} className={listStat === 'SUV' ? 'selected' : ''}>SUV</p>
                    <p onClick={() => entryFilter(categoryStat, '전기')} className={listStat === '전기' ? 'selected' : ''}>전기</p>
                </div>
                <div className='quickCarCardListDiv'>
                    {filteredList.map((item, index) => (
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