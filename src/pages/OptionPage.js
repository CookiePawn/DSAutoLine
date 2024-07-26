import React, { useState, useEffect } from "react"
import '../styles/OptionPage.css'
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import kiaLogo from '../assets/kiaLogo.png'
import ray from '../assets/ray.png'
import nonSelectBox from '../assets/optionPage_nonSelectBox.png'
import selectBox from '../assets/optionPage_SelectBox.png'
import optionClick from '../assets/optionClick.png'




const OptionPage = (props) => {
    const [infoSelect1, setInfoSelect1] = useState(false)
    const [infoSelect2, setInfoSelect2] = useState(false)
    const [colorStat, setColorStat] = useState(null)
    const [windowWidth, setWindowWidth] = useState(0)

    //이용방법
    const [useingSelect1, setUseingSelect1] = useState(null)
    const [useingSelect2, setUseingSelect2] = useState(null)
    const [useingSelect3, setUseingSelect3] = useState(null)
    const [useingSelect4, setUseingSelect4] = useState(null)
    const [useingSelect5, setUseingSelect5] = useState(null)
    const [useingSelect6, setUseingSelect6] = useState(null)
    const [useingSelect7, setUseingSelect7] = useState(null)

    document.addEventListener('scroll', () => {
        const leftChild = document.querySelector('.infoSection');
        const scrollTop = window.scrollY;

        if (scrollTop > 200) {
            leftChild.style.overflow = 'hidden';
        } else {
            leftChild.style.overflow = 'auto';
        }
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <GNB stat={true} />
            <div className="flexSection">
                <div className="infoSection">
                    <h1>옵션 및 이용조건</h1>
                    <span className="carTitle">
                        <img src={kiaLogo} alt="차량 브랜드 로고" />
                        <h3>기아 레이</h3>
                    </span>
                    <p>2022.09 | 경차 | 가솔린</p>
                    <p>988cc | 복합연비 12.7~13.0km/L</p>
                    <img src={ray} alt="차량 이미지" />
                    <span className="priceTitle">
                        <p>총 차량 가격</p>
                        <h4><span>1,390</span>만원</h4>
                    </span>
                    <div>
                        <span>
                            <span>
                                {
                                    !infoSelect1
                                        ? <img src={nonSelectBox} onClick={() => setInfoSelect1(!infoSelect1)} />
                                        : <img src={selectBox} onClick={() => setInfoSelect1(!infoSelect1)} />
                                }
                                <p>개인정보 수집·이용·제공 동의 <span>(보기)</span></p>
                            </span>
                            <span>
                                {
                                    !infoSelect2
                                        ? <img src={nonSelectBox} onClick={() => setInfoSelect2(!infoSelect2)} />
                                        : <img src={selectBox} onClick={() => setInfoSelect2(!infoSelect2)} />
                                }
                                <p>개인정보 제 3자 제공 동의 <span>(보기)</span></p>
                            </span>
                        </span>
                    </div>
                    <p className="nextBtn">견적서 확인</p>
                </div>
                <div className="optionSection">
                    <div className="optionMarginDiv">
                        <div className="colorDiv">
                            <span>
                                <h3>외장 색상</h3>
                                <p>클리어 화이트(UD)</p>
                            </span>
                            <span>
                                {Array.from({ length: 6 }, (_, index) => (
                                    colorStat !== index
                                        ? <span style={{ backgroundColor: '#dbdbdb' }} onClick={() => setColorStat(index)} />
                                        : <span className='colorBtn selected' style={{ backgroundColor: '#dbdbdb' }} onClick={() => setColorStat(index)}>
                                            <img src={optionClick} />
                                        </span>
                                ))}
                            </span>
                        </div>
                        <div className="optionDiv">
                            <h3>세부모델 선택</h3>
                        </div>
                        <div className="selectDiv">
                            <h3>이용조건 선택</h3>
                            <h4>이용방법</h4>
                            <span>
                                <p className={useingSelect1 === '장기 렌트' ? 'selected' : ''} onClick={() => setUseingSelect1('장기 렌트')}>장기 렌트</p>
                                <p className={useingSelect1 === '리스' ? 'selected' : ''} onClick={() => setUseingSelect1('리스')}>리스</p>
                            </span>
                            <h4>이용기간</h4>
                            <span>
                                <p className={useingSelect2 === 36 ? 'selected' : ''} onClick={() => setUseingSelect2(36)}>36개월</p>
                                <p className={useingSelect2 === 48 ? 'selected' : ''} onClick={() => setUseingSelect2(48)}>48개월</p>
                                <p className={useingSelect2 === 60 ? 'selected' : ''} onClick={() => setUseingSelect2(60)}>60개월</p>
                            </span>
                            <h4>보증금</h4>
                            <span>
                                <p className={useingSelect3 === false ? 'selected' : ''} onClick={() => setUseingSelect3(false)}>없음</p>
                                <p className={useingSelect3 === 10 ? 'selected' : ''} onClick={() => setUseingSelect3(10)}>10%</p>
                                <p className={useingSelect3 === 20 ? 'selected' : ''} onClick={() => setUseingSelect3(20)}>20%</p>
                                <p className={useingSelect3 === 30 ? 'selected' : ''} onClick={() => setUseingSelect3(30)}>30%</p>
                                <p className={useingSelect3 === 40 ? 'selected' : ''} onClick={() => setUseingSelect3(40)}>40%</p>
                            </span>
                            <h4>보증금(원)</h4>
                            <span>
                                <input placeholder="0" />
                            </span>
                            <h4>선납금</h4>
                            <span>
                                <p className={useingSelect4 === false ? 'selected' : ''} onClick={() => setUseingSelect4(false)}>없음</p>
                                <p className={useingSelect4 === 10 ? 'selected' : ''} onClick={() => setUseingSelect4(10)}>10%</p>
                                <p className={useingSelect4 === 20 ? 'selected' : ''} onClick={() => setUseingSelect4(20)}>20%</p>
                                <p className={useingSelect4 === 30 ? 'selected' : ''} onClick={() => setUseingSelect4(30)}>30%</p>
                                <p className={useingSelect4 === 40 ? 'selected' : ''} onClick={() => setUseingSelect4(40)}>40%</p>
                            </span>
                            <h4>보험연령</h4>
                            <span>
                                <p className={useingSelect5 === 21 ? 'selected' : ''} onClick={() => setUseingSelect5(21)}>만 21세 이상</p>
                                <p className={useingSelect5 === 26 ? 'selected' : ''} onClick={() => setUseingSelect5(26)}>만 26세 이상</p>
                            </span>
                            <h4>연간 주행거리</h4>
                            <span>
                                <p className={useingSelect6 === 10000 ? 'selected' : ''} onClick={() => setUseingSelect6(10000)}>연간 1만km</p>
                                <p className={useingSelect6 === 20000 ? 'selected' : ''} onClick={() => setUseingSelect6(20000)}>연간 2만km</p>
                                <p className={useingSelect6 === 30000 ? 'selected' : ''} onClick={() => setUseingSelect6(30000)}>연간 3만km</p>
                                <p className={useingSelect6 === '무제한' ? 'selected' : ''} onClick={() => setUseingSelect6('무제한')}>무제한</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default OptionPage