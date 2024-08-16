import React, { useEffect, useState } from 'react';
import { SearchIcon } from './Icons'
import '../styles/GNB.css'
import DSAutoLine from '../assets/img/dsautoline/DSAUTOLINE.png'



/**
 * GNB
 * @param {*} props 
 * @returns 
 */
const GNB = (props) => {
    return (
        <div className='GNB scrolled'>
            <div className='GNBListDiv'>
                {/* <MenuIcon size={25} color={'white'} /> */}
                <a href='/'><img src={DSAutoLine} alt='DS Auto Line' /></a>
                <span>
                    <a className='listA' href='/QuickFAQ'><p className={props.page === '빠른 간편 문의' ? 'selected' : ''}>빠른 간편 문의</p></a>
                    <a className='listA' href='/HotDeal'><p className={props.page === '한정 특가' ? 'selected' : ''}>한정 특가</p></a>
                    <a className='listA' href='/QuickDeal'><p className={props.page === '즉시 출고' ? 'selected' : ''}>즉시 출고</p></a>
                    <a className='listA' href='/Event'><p className={props.page === '이벤트/프로모션' ? 'selected' : ''}>이벤트/프로모션</p></a>
                    <a className='listA' href='/Review'><p className={props.page === '고객 리뷰' ? 'selected' : ''}>고객 리뷰</p></a>
                    <a className='listA' href='/Enter'><p className={props.page === '회사소개' ? 'selected' : ''}>회사소개</p></a>
                </span>

                <div className='GNBSearchDiv'>
                    <input />
                    <span>
                        <SearchIcon size={25} color={'#111'} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GNB