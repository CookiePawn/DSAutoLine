import React, { useState, useEffect } from "react"
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import '../styles/QuickDealPage.css'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import { QuickDealCarCard } from '../components/Cards'



const QuickDealPage = (props) => {
    const [categoryStat, setCategoryStat] = useState(0)
    const [brandStat, setBrandStat] = useState('all')

    return (
        <>
            <GNB stat={true} page={'즉시 출고'} />
            <div className='bannerSection'>
                <p>즉시 출고 이벤트 배너</p>
            </div>
            <div className='categorySection'>
                <h1>즉시 출고</h1>
                <p>지금 바로 출고 할 수 있는 차량을 확인해보세요</p>
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => setCategoryStat(0)} className={categoryStat === 0 ? 'selected' : 'unselected'}>국산 브랜드</h3>
                    <h3 onClick={() => setCategoryStat(1)} className={categoryStat === 1 ? 'selected' : 'unselected'}>수입 브랜드</h3>
                </div>
                {categoryStat === 0 ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} all={true}/>
                    : <IncomeLogo />
                }

                <span></span>
            </div>
            <div className='carListSection'>
                <h2>출고가능 차량 <span>15대</span></h2>
                <div>
                    {Array.from({ length: 15 }, (_, index) => (
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