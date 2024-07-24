import React, { useEffect, useState } from 'react';
import { MenuIcon, SearchIcon } from './Icons'
import '../styles/GNB.css'
import DSAutoLine from '../assets/DSAUTOLINE.png'



/**
 * GNB
 * @param {*} props 
 * @returns 
 */
const GNB = (props) => {
    const [scrolled, setScrolled] = useState(props.stat);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (props.stat == false) {
            window.addEventListener('scroll', handleScroll);    
        }
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`GNB ${scrolled ? 'scrolled' : ''}`}>
            <div className='GNBListDiv'>
                {/* <MenuIcon size={25} color={'white'} /> */}
                <a href='/'><img src={DSAutoLine} alt='DS Auto Line' /></a>
                <a className='listA' href='/QuickFAQ'><p>빠른 간편 문의</p></a>
                <a className='listA' href='/QuickDeal'><p>즉시 출고</p></a>
                <a className='listA' href='/HotDeal'><p>한정 특가</p></a>
                <a className='listA' href='/Event'><p>이벤트/프로모션</p></a>
                <a className='listA'><p>고객 리뷰</p></a>
                <a className='listA' href='/Enter'><p>회사소개</p></a>
                <div className='searchDiv'>
                    <div className='SearchIcon'>
                        <SearchIcon size={22} color={'black'} />
                    </div>
                    <input placeholder='제조사 명, 차량 명을 검색하세요' />
                </div>
            </div>

        </div>
    )
}

export default GNB