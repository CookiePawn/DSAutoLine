import React, { useEffect, useState } from 'react';
import { MenuIcon, SearchIcon, CloseIcon } from './Icons'
import '../styles/GNB.css'
import DSAutoLine from '../assets/DSAUTOLINE.png'
import nonSelectBox from '../assets/optionPage_nonSelectBox.png'
import selectBox from '../assets/optionPage_SelectBox.png'
import { OptionPagePopUp } from '../components/PopUp'



/**
 * GNB
 * @param {*} props 
 * @returns 
 */
const GNB = (props) => {
    const [searchStat, setSearchStat] = useState(false);
    const [dealStat, setDealStat] = useState(false);
    const [selectBox1, setSelectBox1] = useState(false)

    //간편 상담
    const [nameStat, setNameStat] = useState('')
    const [phoneStat, setPhoneStat] = useState('')
    const [carStat, setCarStat] = useState('')
    const [popupStat, setPopupStat] = useState(false)

    return (
        <div className='GNB scrolled'>
            <div className='GNBListDiv'>
                {/* <MenuIcon size={25} color={'white'} /> */}
                <a href='/'><img src={DSAutoLine} alt='DS Auto Line' /></a>
                <a className='listA' href='/QuickFAQ'><p className={props.page === '빠른 간편 문의' ? 'selected' : ''}>빠른 간편 문의</p></a>
                <a className='listA' href='/HotDeal'><p className={props.page === '한정 특가' ? 'selected' : ''}>한정 특가</p></a>
                <a className='listA' href='/QuickDeal'><p className={props.page === '즉시 출고' ? 'selected' : ''}>즉시 출고</p></a>
                <a className='listA' href='/Event'><p className={props.page === '이벤트/프로모션' ? 'selected' : ''}>이벤트/프로모션</p></a>
                <a className='listA' href='/Review'><p className={props.page === '고객 리뷰' ? 'selected' : ''}>고객 리뷰</p></a>
                <a className='listA' href='/Enter'><p className={props.page === '회사소개' ? 'selected' : ''}>회사소개</p></a>
                <div className='rightDiv'>
                    <p onClick={() => { setSearchStat(true); setDealStat(false); document.body.style.overflow = 'hidden';}} className={searchStat ? 'selected' : ''}>검색</p>
                    <span onClick={() => { setSearchStat(false); setDealStat(true); document.body.style.overflow = 'hidden';}}>간편상담신청</span>
                </div>
            </div>
            {searchStat &&
                <div className='selectedDiv'>
                    <div>
                        <div className='searchDiv'>
                            <input placeholder='제조사 명, 차량 명을 검색하세요' />
                            <div className='SearchIcon'>
                                <SearchIcon size={25} color={'black '} />
                            </div>
                        </div>
                        <div className='CloseIcon' onClick={() => { setDealStat(false); setSearchStat(false); document.body.style.overflow = 'auto';}}>
                            <CloseIcon size={31} color={'black'} />
                        </div>
                    </div>
                </div>
            }
            {dealStat &&
                <div className='selectedDiv'>
                    <div>
                        <div className='dealListDiv'>
                            <p>이름</p>
                            <input />
                            <p>연락처</p>
                            <input />
                            <p>차종</p>
                            <input />
                            {
                                !selectBox1
                                    ? <img src={nonSelectBox} onClick={() => setSelectBox1(!selectBox1)} />
                                    : <img src={selectBox} onClick={() => setSelectBox1(!selectBox1)} />
                            }
                            <h6>개인정보 취급방침 동의 <span>(보기)</span></h6>
                            <h3  onClick={() => { setDealStat(false); setPopupStat(true);}}>간편 상담 신청하기</h3>
                        </div>
                        <div className='CloseIcon' onClick={() =>  setDealStat(false) } >
                            <CloseIcon size={31} color={'black'} />
                        </div>
                    </div>
                </div>
            }
            {searchStat &&
                <div className="GNBDimmed" onClick={() => { setSearchStat(false); document.body.style.overflow = 'auto';}}>

                </div>
            }
            {dealStat &&
                <div className="GNBDimmed" onClick={() => { setDealStat(false); document.body.style.overflow = 'auto';}}>

                </div>
            }
            {popupStat && 
                <OptionPagePopUp/>
            }
        </div>
    )
}

export default GNB