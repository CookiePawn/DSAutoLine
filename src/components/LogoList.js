import React from 'react'
import '../styles/LogoList.css'
import hyundaiLogo from '../assets/hyundaiLogo.png'
import kiaLogo from '../assets/kiaLogo.png'
import genesisLogo from '../assets/genesisLogo.png'
import chevroletLogo from '../assets/chevroletLogo.png'
import renaultLogo from '../assets/renaultLogo.png'
import kgmLogo from '../assets/kgmLogo.png'
import allLogo from '../assets/ALL.png'







export const KoreaLogo = (props) => {
    const stat = props.brandStat;

    return (
        <div className='koreaLogoDiv'>
            {props.all && (
                <div
                    onClick={() => props.setStat('all')}
                    className={stat === 'all' ? 'selectedLogo' : ''}
                >
                    <img src={allLogo} alt="전체" />
                    <p>전체</p>
                </div>
            )}
            <div
                onClick={() => props.setStat('hyundai')}
                className={stat === 'hyundai' ? 'selectedLogo' : ''}
            >
                <img src={hyundaiLogo} alt="현대 로고" />
                <p>현대</p>
            </div>
            <div
                onClick={() => props.setStat('kia')}
                className={stat === 'kia' ? 'selectedLogo' : ''}
            >
                <img src={kiaLogo} alt="기아 로고" />
                <p>기아</p>
            </div>
            <div
                onClick={() => props.setStat('genesis')}
                className={stat === 'genesis' ? 'selectedLogo' : ''}
            >
                <img src={genesisLogo} alt="제네시스 로고" />
                <p>제네시스</p>
            </div>
            <div
                onClick={() => props.setStat('chevrolet')}
                className={stat === 'chevrolet' ? 'selectedLogo' : ''}
            >
                <img src={chevroletLogo} alt="쉐보레 로고" />
                <p>쉐보레</p>
            </div>
            <div
                onClick={() => props.setStat('renault')}
                className={stat === 'renault' ? 'selectedLogo' : ''}
            >
                <img src={renaultLogo} alt="르노코리아 로고" />
                <p>르노코리아</p>
            </div>
            <div
                onClick={() => props.setStat('kgm')}
                className={stat === 'kgm' ? 'selectedLogo' : ''}
            >
                <img src={kgmLogo} alt="KGM 로고" />
                <p>KGM</p>
            </div>
        </div>
    );
}


export const IncomeLogo = (props) => {
    return (
        <></>
    )
}