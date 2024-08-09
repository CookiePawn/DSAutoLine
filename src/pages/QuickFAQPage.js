import React, { useEffect, useState } from 'react'
import '../styles/QuickFAQPage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import { QuickCarCard } from '../components/Cards'
import { quickFAQList } from '../assets/item'


const QuickFAQPage = (props) => {
    const [categoryStat, setCategoryStat] = useState('국산')
    const [carStat, setCarStat] = useState(null)
    const [brandStat, setBrandStat] = useState('현대')
    const [listStat, setListStat] = useState('전체')
    const [filteredList, setFilteredList] = useState(quickFAQList.filter((item) => item.enter === '현대'))

    useEffect(() => {
        entryFilter(categoryStat, listStat);
    }, [brandStat])

    const entryFilter = (cStat, lStat) => {
        setCategoryStat(cStat);
        setListStat(lStat);

        if (cStat === '국산') {
            lStat === '전체'
                ? setFilteredList(quickFAQList.filter((item) => item.entry === cStat && item.enter === brandStat))
                : setFilteredList(quickFAQList.filter((item) => item.entry === cStat && item.enter === brandStat && item.category === lStat))
        } else {
            setFilteredList(quickFAQList.filter((item) => item.entry === '수입'))
        }
    }

    return (
        <>
            <GNB stat={true} page={'빠른 간편 문의'} />
            <div className='bannerSection'>
                <p>이벤트 배너</p>
            </div>
            <div className='categorySection'>
                <h1>빠른 <span>간편 문의</span></h1>
                <p>쉽고 간편하게 문의 해보세요</p>
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => entryFilter('국산', listStat)} className={categoryStat === '국산' ? 'selected' : ''}>국산 브랜드</h3>
                    <h3 onClick={() => entryFilter('수입', listStat)} className={categoryStat === '수입' ? 'selected' : ''}>수입 브랜드</h3>
                </div>
                {categoryStat === '국산' ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} />
                    : <IncomeLogo />
                }
            </div>
            <div className='quickCarListSection'>
                <h2>차량 리스트</h2>
                <div className='quickCarListSelectDiv'>
                    <p onClick={() => entryFilter(categoryStat, '전체')} className={listStat === '전체' ? 'selected' : ''}>전체</p>
                    <p onClick={() => entryFilter(categoryStat, '소형/승용')} className={listStat === '소형/승용' ? 'selected' : ''}>소형/승용</p>
                    <p onClick={() => entryFilter(categoryStat, '세단')} className={listStat === '세단' ? 'selected' : ''}>세단</p>
                    <p onClick={() => entryFilter(categoryStat, 'SUV')} className={listStat === 'SUV' ? 'selected' : ''}>SUV</p>
                    <p onClick={() => entryFilter(categoryStat, '전기')} className={listStat === '전기' ? 'selected' : ''}>전기</p>
                </div>
                <div className='quickCarCardListDiv'>
                    {filteredList.map((item, index) => (
                        <QuickCarCard
                            item={item}
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

            <Footer />
        </>
    )
}


export default QuickFAQPage