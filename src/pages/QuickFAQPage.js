import React, { useEffect, useState } from 'react'
import '../styles/QuickFAQPage.css'
import GNB from '../components/GNB'
import Footer from '../components/Footer'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import { QuickCarCard } from '../components/Cards'
import FastFAQSticky from '../components/FastFAQSticky'
import { quickFAQAxios, eventAxios } from '../services/Request'
import NoCardList from '../components/NoCardList'


const QuickFAQPage = (props) => {
    const [carStat, setCarStat] = useState(null)
    const [categoryStat, setCategoryStat] = useState('국산')
    const [brandStat, setBrandStat] = useState('현대')
    const [listStat, setListStat] = useState('전체')
    const [quickFAQList, setQuickFAQList] = useState(null)
    const [banner, setBanner] = useState(null)


    const fetchData = async (entry, enter, category) => {
        const response1 = await quickFAQAxios(entry, enter, category)
        setQuickFAQList(response1)
        const response2 = await eventAxios(1, 0)
        setBanner(response2)
    }

    useEffect(() => {
        fetchData(null, '현대', null)
    }, [])

    useEffect(() => {
        fetchData(categoryStat, brandStat, listStat)
    }, [categoryStat, brandStat, listStat])

    console.log(banner)

    if (!quickFAQList || !banner) {
        return null
    }
    return (
        <>
            <GNB stat={true} page={'빠른 간편 문의'} />
            {banner[0] &&
                <div className='bannerSection'>
                    <img src={`${process.env.REACT_APP_IMG_URL}/${banner[0].img}.png`} alt='이벤트 베너' />
                </div>
            }
            <FastFAQSticky height={1150} />
            <div className='categorySection'>
                <h1>빠른 <span>간편 문의</span></h1>
                <p>쉽고 간편하게 문의 해보세요</p>
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => setCategoryStat('국산')} className={categoryStat === '국산' ? 'selected' : ''}>국산 브랜드</h3>
                    <h3 onClick={() => setCategoryStat('수입')} className={categoryStat === '수입' ? 'selected' : ''}>수입 브랜드</h3>
                </div>
                {categoryStat === '국산' ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} />
                    : <IncomeLogo />
                }
            </div>
            <div className='quickCarListSection'>
                <h2>차량 리스트</h2>
                <div className='quickCarListSelectDiv'>
                    <p onClick={() => { setListStat('전체'); fetchData(categoryStat, brandStat, '전체') }} className={listStat === '전체' ? 'selected' : ''}>전체</p>
                    <p onClick={() => { setListStat('소형/승용'); fetchData(categoryStat, brandStat, '소형/승용') }} className={listStat === '소형/승용' ? 'selected' : ''}>소형/승용</p>
                    <p onClick={() => { setListStat('세단'); fetchData(categoryStat, brandStat, '세단') }} className={listStat === '세단' ? 'selected' : ''}>세단</p>
                    <p onClick={() => { setListStat('SUV'); fetchData(categoryStat, brandStat, 'SUV') }} className={listStat === 'SUV' ? 'selected' : ''}>SUV</p>
                    <p onClick={() => { setListStat('전기'); fetchData(categoryStat, brandStat, '전기') }} className={listStat === '전기' ? 'selected' : ''}>전기</p>
                </div>
                <div className='quickCarCardListDiv'>
                    {quickFAQList.length === 0 && <NoCardList card={'차량이'} />}
                    {quickFAQList.map((item, index) => (
                        <QuickCarCard
                            item={item}
                            index={item.car_code}
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
                        : <a className='nextBtn' href={`/Option/${carStat}`}>다음으로</a>
                }

            </div>

            <Footer />
        </>
    )
}


export default QuickFAQPage