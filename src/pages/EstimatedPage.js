import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import '../styles/OptionPage.css'
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import nonSelectBox from '../assets/img/functionIcon/optionPage_nonSelectBox.png'
import selectBox from '../assets/img/functionIcon/optionPage_SelectBox.png'
import optionClick from '../assets/img/functionIcon/optionClick.png'
import { OptionPagePopUp } from "../components/PopUp"
import { estimatedAxios } from "../services/Request";




const carImageError = (img) => {
    let imageSrc;

    try {
        imageSrc = require(`../assets/img/${img}.png`);  // 동적으로 이미지 로드
    } catch (error) {
        imageSrc = require('../assets/img/dsautoline/DSAUTOLINE_car.png');  // 이미지가 없을 경우 대체 이미지 사용
    }

    return imageSrc
}





const OptionPage = (props) => {
    const { id } = useParams();
    const [content, setContent] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await estimatedAxios(id)
            setContent(response)
        }
        fetchData()
    }, [id])


    const [infoSelect1, setInfoSelect1] = useState(false)
    const [infoSelect2, setInfoSelect2] = useState(false)
    const [oilStat, setOilStat] = useState(null)

    //세부모델 선택
    const [trimStat, setTrimStat] = useState(null)
    const [trimSelect1, setTrimSelect1] = useState(null)
    const [trimSelect2, setTrimSelect2] = useState(null)
    const [trimPrice, setTrimPrice] = useState(0);

    //옵션
    const [optionPrice, setOptionPrice] = useState(0)

    //이용방법
    const [useingSelect1, setUseingSelect1] = useState(null)
    const [useingSelect2, setUseingSelect2] = useState(null)
    const [useingSelect3, setUseingSelect3] = useState(null)
    const [useingSelect4, setUseingSelect4] = useState('')
    const [useingSelect5, setUseingSelect5] = useState(null)
    const [useingSelect6, setUseingSelect6] = useState(null)
    const [useingSelect7, setUseingSelect7] = useState(null)

    //최종 버튼
    const [nextStat, setNextStat] = useState(false)


    useEffect(() => {
        if (content) {
            const oil = [
                content.lpg === 1 && 'LPG',
                content.gasoline === 1 && '가솔린',
                content.diesel === 1 && '디젤',
                content.hybrid === 1 && '하이브리드'
            ].filter(Boolean).join(', ');
            setOilStat(oil)

            if (content.option) {
                const totalPrice = content.option.reduce((acc, item) => acc + item.price, 0);
                setOptionPrice(totalPrice);
            }

            if (content.trim) {
                setTrimSelect1(content.trim[0].trim1)
                setTrimSelect2(content.trim[0].trim2)
                setTrimPrice(content.trim[0].price)
            }
        }
    }, [content])




    if (!content || !content.option || !content.trim || !content.color) {
        return null
    }
    return (
        <>
            {nextStat &&
                <OptionPagePopUp />
            }
            <GNB stat={true} page={'즉시 출고'}/>
            <div className="flexSection">
                <div className="infoSection">
                    <div>
                        <h1>옵션 및 이용조건</h1>
                        <span className="carTitle" style={{ alignItems: 'center' }}>
                            <img src={carImageError(`logo/${content.logo_img}`)} alt="차량 브랜드 로고" />
                            <h3>{content.enter} {content.name}</h3>
                        </span>
                        <p>{content.year}.{content.month} │ {content.size} │ {oilStat}</p>
                        <p>{content.min_cc}~{content.max_cc}CC │ 복합연비 {content.min_fuel_efficiency}~{content.max_fuel_efficiency}km/L</p>
                        <img src={carImageError(`car/${content.img}`)} alt="차량 이미지" />
                        <h4>세부 모델</h4>
                        <div className="infoSelectedListDiv">
                            <span>
                                <p>{content.trim[0].trim1}</p>
                                <p>{content.trim[0].trim2}</p>
                            </span>
                            <p>{(content.trim[0].price / 10000).toLocaleString()} 만원</p>
                        </div>
                        <h4>옵션</h4>
                        <div className="infoSelectedListDiv">
                            <span className="selectOptionListSpan">
                                {content.option.length !== 0 && content.option.map((item, idx) => (
                                    <p>{item.name}</p>
                                ))}
                            </span>
                            <p>+ {(optionPrice / 10000).toLocaleString()} 만원</p>
                        </div>
                        <span className="priceTitle">
                            <p>합계</p>
                            <h4>{((trimPrice + optionPrice) / 10000).toLocaleString()} 만원</h4>
                        </span>
                        <div>
                            <span>
                                <span>
                                    {
                                        !infoSelect1
                                            ? <img src={nonSelectBox} onClick={() => setInfoSelect1(!infoSelect1)} alt="선택 안됨" />
                                            : <img src={selectBox} onClick={() => setInfoSelect1(!infoSelect1)} alt="선택 됨" />
                                    }
                                    <p>개인정보 수집·이용·제공 동의 <span>(보기)</span></p>
                                </span>
                                <span>
                                    {
                                        !infoSelect2
                                            ? <img src={nonSelectBox} onClick={() => setInfoSelect2(!infoSelect2)} alt="선택 안됨" />
                                            : <img src={selectBox} onClick={() => setInfoSelect2(!infoSelect2)} alt="선택 됨" />
                                    }
                                    <p>개인정보 제 3자 제공 동의 <span>(보기)</span></p>
                                </span>
                            </span>
                        </div>
                        { useingSelect1 && useingSelect2 && useingSelect3 && useingSelect4 !== '' && useingSelect5 && useingSelect6 && useingSelect7 && infoSelect1 && infoSelect2
                            ? <p className="nextBtn" onClick={() => { setNextStat(true); document.body.style.overflow = 'hidden'; }}>견적서 확인</p>
                            : <p className="nonNextBtn">견적서 확인</p>
                        }

                    </div>
                </div>
                <div className="optionSection">
                    <div className="optionMarginDiv">
                        <div className="colorDiv">
                            <span>
                                <h3>외장 색상</h3>
                                <p>{content.color[0].name}</p>
                            </span>
                            <span>
                                <span className='colorBtn selected' style={{ backgroundColor: content.color[0].rgb }}>
                                    <img src={optionClick} alt="색상 선택 됨" />
                                </span>
                            </span>
                        </div>
                        <div className="optionDiv">
                            <h3>세부모델</h3>
                            <div className="optionTrimDiv">
                                <span>
                                    <p>트림 1</p>
                                </span>
                                <span>
                                    <p>트림 2</p>
                                </span>
                            </div>
                            <div className="trimInfoDiv">
                                {trimSelect1 &&
                                    <span style={{ overflowY: 'hidden', height: 65 }}>
                                        <span className={'selected'}>
                                            <img src={optionClick} alt="트림 선택 됨" />
                                            <p>{content.trim[0].trim1}</p>
                                        </span>
                                    </span>
                                }
                                {trimSelect2 &&
                                    <span style={{ overflowY: 'hidden', height: 65, borderLeft: trimStat !== 0 && '1px solid #ededed' }}>
                                        <span className={'selected'}>
                                            <img src={optionClick} />
                                            <p>{content.trim[0].trim2} - {(trimPrice / 10000).toLocaleString()}만원</p>
                                        </span>
                                    </span>
                                }
                            </div>
                            <h3 style={{ marginTop: 120 }}>옵션</h3>
                            {trimSelect1 !== null && trimSelect2 !== null
                                ? <div className="optionSelectDiv">
                                    {content.option.map((item, idx) => (
                                        <div>
                                            <img src={carImageError(`option/${item.img}`)} />
                                            <p>{item.name}</p>
                                            <h4>{(item.price / 10000).toLocaleString()}만원</h4>
                                        </div>
                                    ))}
                                </div> : null
                            }
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
                                <p className={useingSelect3 === '없음' ? 'selected' : ''} onClick={() => setUseingSelect3('없음')}>없음</p>
                                <p className={useingSelect3 === 10 ? 'selected' : ''} onClick={() => setUseingSelect3(10)}>10%</p>
                                <p className={useingSelect3 === 20 ? 'selected' : ''} onClick={() => setUseingSelect3(20)}>20%</p>
                                <p className={useingSelect3 === 30 ? 'selected' : ''} onClick={() => setUseingSelect3(30)}>30%</p>
                                <p className={useingSelect3 === 40 ? 'selected' : ''} onClick={() => setUseingSelect3(40)}>40%</p>
                            </span>
                            <h4>보증금(원)</h4>
                            <span>
                                <input placeholder="0" type="number" value={useingSelect4} onChange={event => setUseingSelect4(event.target.value)} />
                            </span>
                            <h4>선납금</h4>
                            <span>
                                <p className={useingSelect5 === '없음' ? 'selected' : ''} onClick={() => setUseingSelect5('없음')}>없음</p>
                                <p className={useingSelect5 === 10 ? 'selected' : ''} onClick={() => setUseingSelect5(10)}>10%</p>
                                <p className={useingSelect5 === 20 ? 'selected' : ''} onClick={() => setUseingSelect5(20)}>20%</p>
                                <p className={useingSelect5 === 30 ? 'selected' : ''} onClick={() => setUseingSelect5(30)}>30%</p>
                                <p className={useingSelect5 === 40 ? 'selected' : ''} onClick={() => setUseingSelect5(40)}>40%</p>
                            </span>
                            <h4>보험연령</h4>
                            <span>
                                <p className={useingSelect6 === 21 ? 'selected' : ''} onClick={() => setUseingSelect6(21)}>만 21세 이상</p>
                                <p className={useingSelect6 === 26 ? 'selected' : ''} onClick={() => setUseingSelect6(26)}>만 26세 이상</p>
                            </span>
                            <h4>연간 주행거리</h4>
                            <span>
                                <p className={useingSelect7 === 10000 ? 'selected' : ''} onClick={() => setUseingSelect7(10000)}>연간 1만km</p>
                                <p className={useingSelect7 === 20000 ? 'selected' : ''} onClick={() => setUseingSelect7(20000)}>연간 2만km</p>
                                <p className={useingSelect7 === 30000 ? 'selected' : ''} onClick={() => setUseingSelect7(30000)}>연간 3만km</p>
                                <p className={useingSelect7 === '무제한' ? 'selected' : ''} onClick={() => setUseingSelect7('무제한')}>무제한</p>
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