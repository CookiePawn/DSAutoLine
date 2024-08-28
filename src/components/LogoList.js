import React from 'react'
import '../styles/LogoList.css'
import hyundaiLogo from '../assets/img/logo/hyundaiLogo.png'
import kiaLogo from '../assets/img/logo/kiaLogo.png'
import genesisLogo from '../assets/img/logo/genesisLogo.png'
import chevroletLogo from '../assets/img/logo/chevroletLogo.png'
import renaultLogo from '../assets/img/logo/renaultLogo.png'
import kgmLogo from '../assets/img/logo/kgmLogo.png'
import allLogo from '../assets/img/logo/ALL.png'







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
                onClick={() => props.setStat('현대')}
                className={stat === '현대' ? 'selectedLogo' : ''}
            >
                <img src={hyundaiLogo} alt="현대 로고" />
                <p>현대</p>
            </div>
            <div
                onClick={() => props.setStat('기아')}
                className={stat === '기아' ? 'selectedLogo' : ''}
            >
                <img src={kiaLogo} alt="기아 로고" />
                <p>기아</p>
            </div>
            <div
                onClick={() => props.setStat('제네시스')}
                className={stat === '제네시스' ? 'selectedLogo' : ''}
            >
                <img src={genesisLogo} alt="제네시스 로고" />
                <p>제네시스</p>
            </div>
            <div
                onClick={() => props.setStat('쉐보레')}
                className={stat === '쉐보레' ? 'selectedLogo' : ''}
            >
                <img src={chevroletLogo} alt="쉐보레 로고" />
                <p>쉐보레</p>
            </div>
            <div
                onClick={() => props.setStat('르노')}
                className={stat === '르노' ? 'selectedLogo' : ''}
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
                onClick={() => props.setStat('BMW')}
                className={stat === 'BMW' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/bmwLogo.png')} alt="BMW 로고" />
                <p>BMW</p>
            </div>
            <div
                onClick={() => props.setStat('벤츠')}
                className={stat === '벤츠' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/benzLogo.png')} alt="벤츠 로고" />
                <p>벤츠</p>
            </div>
            <div
                onClick={() => props.setStat('아우디')}
                className={stat === '아우디' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/audiLogo.png')} alt="아우디 로고" />
                <p>아우디</p>
            </div>
            <div
                onClick={() => props.setStat('폴스타')}
                className={stat === '폴스타' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/polestarLogo.png')} alt="폴스타 로고" />
                <p>폴스타</p>
            </div>
            <div
                onClick={() => props.setStat('볼보')}
                className={stat === '볼보' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/vlovoLogo.png')} alt="볼보 로고" />
                <p>볼보</p>
            </div>
            <div
                onClick={() => props.setStat('폭스바겐')}
                className={stat === '폭스바겐' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/volkswagenLogo.png')} alt="폭스바겐 로고" />
                <p>폭스바겐</p>
            </div>
            <div
                onClick={() => props.setStat('토요타')}
                className={stat === '토요타' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/toyotaLogo.png')} alt="토요타 로고" />
                <p>토요타</p>
            </div>
            <div
                onClick={() => props.setStat('렉서스')}
                className={stat === '렉서스' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/lexusLogo.png')} alt="렉서스 로고" />
                <p>렉서스</p>
            </div>
            <div
                onClick={() => props.setStat('포드')}
                className={stat === '포드' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/fordLogo.png')} alt="포드 로고" />
                <p>포드</p>
            </div>
            <div
                onClick={() => props.setStat('미니')}
                className={stat === '미니' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/miniLogo.png')} alt="미니 로고" />
                <p>미니</p>
            </div>
            <div
                onClick={() => props.setStat('포르쉐')}
                className={stat === '포르쉐' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/porscheLogo.png')} alt="포르쉐 로고" />
                <p>포르쉐</p>
            </div>
            <div
                onClick={() => props.setStat('혼다')}
                className={stat === '혼다' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/hondaLogo.png')} alt="혼다 로고" />
                <p>혼다</p>
            </div>
            <div
                onClick={() => props.setStat('지프')}
                className={stat === '지프' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/jeepLogo.png')} alt="지프 로고" />
                <p>지프</p>
            </div>
            <div
                onClick={() => props.setStat('랜드로버')}
                className={stat === '랜드로버' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/landroverLogo.png')} alt="랜드로버 로고" />
                <p>랜드로버</p>
            </div>
            <div
                onClick={() => props.setStat('푸조')}
                className={stat === '푸조' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/peugeotLogo.png')} alt="푸조 로고" />
                <p>푸조</p>
            </div>
            <div
                onClick={() => props.setStat('테슬라')}
                className={stat === '테슬라' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/teslaLogo.png')} alt="테슬라 로고" />
                <p>테슬라</p>
            </div>
            <div
                onClick={() => props.setStat('링컨')}
                className={stat === '링컨' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/lincolnLogo.png')} alt="링컨 로고" />
                <p>링컨</p>
            </div>
            <div
                onClick={() => props.setStat('캐딜락')}
                className={stat === '캐딜락' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/cadillacLogo.png')} alt="캐딜락 로고" />
                <p>캐딜락</p>
            </div>
            <div
                onClick={() => props.setStat('마세라티')}
                className={stat === '마세라티' ? 'selectedLogo' : ''}
            >
                <img src={require('../assets/img/logo/maseratiLogo.png')} alt="마세라티 로고" />
                <p>마세라티</p>
            </div>
        </div>
    )
}