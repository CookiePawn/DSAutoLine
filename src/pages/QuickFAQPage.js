import React, { useEffect, useState } from 'react'
import '../styles/QuickFAQPage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import { QuickCarCard } from '../components/Cards'


const QuickFAQPage = (props) => {
    const [categoryStat, setCategoryStat] = useState(0)
    const [carStat, setCarStat] = useState(null)
    const [brandStat, setBrandStat] = useState('hyundai')
    const [listStat, setListStat] = useState(0)

    return (
        <>
            <GNB stat={true}  page={'빠른 간편 문의'}/>
            <div className='bannerSection'>
                <p>이벤트 배너</p>
            </div>
            <div className='categorySection'>
                <h1>빠른 <span>간편 문의</span></h1>
                <p>쉽고 간편하게 문의 해보세요</p>
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => setCategoryStat(0)} className={categoryStat === 0 ? 'selected' : ''}>국산 브랜드</h3>
                    <h3 onClick={() => setCategoryStat(1)} className={categoryStat === 1 ? 'selected' : ''}>수입 브랜드</h3>
                </div>
                {categoryStat === 0 ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} />
                    : <IncomeLogo />
                }
            </div>
            <div className='quickCarListSection'>
                <h2>차량 리스트</h2>
                <span></span>
                <div className='quickCarListSelectDiv'>
                    <p  onClick={() => setListStat(0)} className={listStat === 0 ? 'selected' : ''}>전체</p>
                    <p  onClick={() => setListStat(1)} className={listStat === 1 ? 'selected' : ''}>소형/승용</p>
                    <p  onClick={() => setListStat(2)} className={listStat === 2 ? 'selected' : ''}>세단</p>
                    <p  onClick={() => setListStat(3)} className={listStat === 3 ? 'selected' : ''}>SUV</p>
                    <p  onClick={() => setListStat(4)} className={listStat === 4 ? 'selected' : ''}>전기</p>
                </div>
                <div className='quickCarCardListDiv'>
                    {Array.from({ length: 15 }, (_, index) => (
                        <QuickCarCard 
                            index={index}
                            carStat={carStat}
                            setCarStat={setCarStat}
                        />
                    ))}

                </div>
            </div>
            <div className='btnSection'>
                {
                    carStat === null 
                        ? <span className='nonNextBtn'>다음으로</span>
                        : <a className='nextBtn' href='/Option'>다음으로</a>
                }
                
            </div>
            
            <Footer/>
        </>
    )
}


export default QuickFAQPage