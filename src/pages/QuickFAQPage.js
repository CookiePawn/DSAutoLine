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

    return (
        <>
            <GNB stat={true} />
            <div className='categorySection'>
                <h1>빠른 간편 문의</h1>
                <p>쉽고 간편하게 문의 해보세요</p>
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => setCategoryStat(0)} className={categoryStat === 0 ? 'selected' : 'unselected'}>국산 브랜드</h3>
                    <h3 onClick={() => setCategoryStat(1)} className={categoryStat === 1 ? 'selected' : 'unselected'}>수입 브랜드</h3>
                </div>
                {categoryStat === 0 ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} />
                    : <IncomeLogo />
                }

                <span></span>
            </div>
            <div className='carListSection'>
                <h2>차량 리스트</h2>
                <div>
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