import React, { useState, useEffect } from "react"
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import '../styles/QuickDealPage.css'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import { QuickDealCarCard } from '../components/Cards'



const QuickDealPage = (props) => {
    const [categoryStat, setCategoryStat] = useState(0)
    const [brandStat, setBrandStat] = useState('all')
    const [listStat, setListStat] = useState(0)

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
                    <h3 onClick={() => setCategoryStat(0)} className={categoryStat === 0 ? 'selected' : 'unselected'}>국산 브랜드</h3>
                    <h3 onClick={() => setCategoryStat(1)} className={categoryStat === 1 ? 'selected' : 'unselected'}>수입 브랜드</h3>
                </div>
                {categoryStat === 0 ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} all={true}/>
                    : <IncomeLogo />
                }
            </div>
            <div className='quickCarListSection'>
                <h2>출고가능 차량 <span>5대</span></h2>
                <span></span>
                <div className='quickCarListSelectDiv'>
                    <p  onClick={() => setListStat(0)} className={listStat === 0 ? 'selected' : ''}>전체</p>
                    <p  onClick={() => setListStat(1)} className={listStat === 1 ? 'selected' : ''}>소형/승용</p>
                    <p  onClick={() => setListStat(2)} className={listStat === 2 ? 'selected' : ''}>세단</p>
                    <p  onClick={() => setListStat(3)} className={listStat === 3 ? 'selected' : ''}>SUV</p>
                    <p  onClick={() => setListStat(4)} className={listStat === 4 ? 'selected' : ''}>전기</p>
                </div>
                <div className='quickCarCardListDiv'>
                    {Array.from({ length: 5 }, (_, index) => (
                        <QuickDealCarCard 
                            index={index}
                        />
                    ))}

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default QuickDealPage