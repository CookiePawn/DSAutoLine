import React, { useState, useEffect } from "react"
import '../styles/OptionPage.css'
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import nonSelectBox from '../assets/img/functionIcon/optionPage_nonSelectBox.png'
import selectBox from '../assets/img/functionIcon/optionPage_SelectBox.png'
import optionClick from '../assets/img/functionIcon/optionClick.png'
import optionNonClick from '../assets/img/functionIcon/optionNonClick.png'
import { UpIcon, DownIcon } from "../components/Icons"
import { optionList } from "../assets/item"
import { OptionPagePopUp } from "../components/PopUp"




const OptionPage = (props) => {
    const [infoSelect1, setInfoSelect1] = useState(false)
    const [infoSelect2, setInfoSelect2] = useState(false)
    const [colorStat, setColorStat] = useState([])

    //세부모델 선택
    const [trimStat, setTrimStat] = useState(null)
    const [trimSelect1, setTrimSelect1] = useState(null)
    const [trimSelect2, setTrimSelect2] = useState(null)
    const [trimPrice, setTrimPrice] = useState(0);

    //옵션
    const [options, setOptions] = useState([])
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

    const oil = [
        optionList.lpg && 'LPG',
        optionList.gasoline && '가솔린',
        optionList.diesel && '디젤',
        optionList.hybrid && '가솔린+전기'
    ].filter(Boolean).join(', ');


    return (
        <>
            {nextStat &&
                <OptionPagePopUp />
            }
            <GNB stat={true}/>
            <div className="flexSection">
                <div className="infoSection">
                    <div>
                        <h1>옵션 및 이용조건</h1>
                        <span className="carTitle" style={{ alignItems: 'center' }}>
                            <img src={require(`../assets/img/logo/${optionList.logoImg}.png`)} alt="차량 브랜드 로고" />
                            <h3>{optionList.enter} {optionList.name}</h3>
                        </span>
                        <p>{optionList.year}.{optionList.month} │ {optionList.size} │ {oil}</p>
                        <p>{optionList.minCC.toLocaleString()}~{optionList.maxCC.toLocaleString()}CC │ 복합연비 {optionList.minFuelEfficiency}~{optionList.maxFuelEfficiency}km/L</p>
                        <img src={require(`../assets/img/car/${optionList.carImg}.png`)} alt="차량 이미지" />
                        <h4>세부 모델</h4>
                        <div className="infoSelectedListDiv">
                            <span>
                                <p>{trimSelect1}</p>
                                <p>{trimSelect2}</p>
                            </span>
                            <p>{(trimPrice / 10000).toLocaleString()} 만원</p>
                        </div>
                        <h4>옵션</h4>
                        <div className="infoSelectedListDiv">
                            <span className="selectOptionListSpan">
                                {options.map((item, idx) => (
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
                        {colorStat.length !== 0 && trimSelect1 && trimSelect2 && options && useingSelect1 && useingSelect2 && useingSelect3 && useingSelect4 !== '' && useingSelect5 && useingSelect6 && useingSelect7 && infoSelect1 && infoSelect2
                            ? <p className="nextBtn" onClick={() => { setNextStat(true); document.body.style.overflow = 'hidden';}}>견적서 확인</p>
                            : <p className="nonNextBtn">견적서 확인</p>
                        }

                    </div>
                </div>
                <div className="optionSection">
                    <div className="optionMarginDiv">
                        <div className="colorDiv">
                            <span>
                                <h3>외장 색상</h3>
                                <p>{colorStat.name}</p>
                            </span>
                            <span>
                                {optionList.color.map((item, index) => (
                                    colorStat !== item
                                        ? <span style={{ backgroundColor: item.rgb }} onClick={() => setColorStat(item)} />
                                        : <span className='colorBtn selected' style={{ backgroundColor: item.rgb }}>
                                            <img src={optionClick} />
                                        </span>
                                ))}
                            </span>
                        </div>
                        <div className="optionDiv">
                            <h3>세부모델 선택</h3>
                            <div className="optionTrimDiv">
                                <span className={trimStat === 0 ? 'selected' : ''} onClick={() => trimStat === 0 ? setTrimStat(null) : setTrimStat(0)}>
                                    <p>트림 1</p>
                                    <div className='upDownIcon' >
                                        {trimStat === 0
                                            ? <UpIcon color={'white'} size={24} />
                                            : <DownIcon color={'white'} size={24} />
                                        }
                                    </div>
                                </span>
                                <span className={trimStat === 1 ? 'selected' : ''} onClick={() => trimStat === 1 ? setTrimStat(null) : setTrimStat(1)}>
                                    <p>트림 2</p>
                                    <div className='upDownIcon' >
                                        {trimStat === 1
                                            ? <UpIcon color={'white'} size={24} />
                                            : <DownIcon color={'white'} size={24} />
                                        }
                                    </div>
                                </span>
                            </div>
                            <div className="trimInfoDiv">
                                {trimSelect1 && trimStat !== 0 &&
                                    <span style={{ overflowY: 'hidden', height: 65 }}>
                                        <span className={'selected'}>
                                            <img src={optionClick} />
                                            <p>{trimSelect1}</p>
                                        </span>
                                    </span>
                                }
                                <span style={{ display: trimStat === 0 ? 'block' : 'none', borderRight: '1px solid #ededed' }}>
                                    {Array.from(new Set(optionList.trim.map(item => item.trim1))).map((item, index) => (
                                        <span onClick={() => { setTrimSelect1(item); setTrimStat(1) }} className={trimSelect1 === item ? 'selected' : ''}>
                                            {trimSelect1 === item
                                                ? <img src={optionClick} />
                                                : <img src={optionNonClick} />
                                            }
                                            <p>{item}</p>
                                        </span>
                                    ))}
                                </span>
                                {trimSelect2 && trimStat !== 1 &&
                                    <span style={{ overflowY: 'hidden', height: 65, borderLeft: trimStat !== 0 && '1px solid #ededed' }}>
                                        <span className={'selected'}>
                                            <img src={optionClick} />
                                            <p>{trimSelect2} - {(trimPrice / 10000).toLocaleString()}만원</p>
                                        </span>
                                    </span>
                                }
                                <span style={{ display: trimSelect1 && trimStat === 1 ? 'block' : 'none', borderLeft: '1px solid #ededed' }}>
                                    {optionList.trim.filter((item) => item.trim1 === trimSelect1).map((item, index) => (
                                        <span onClick={() => { setTrimSelect2(item.trim2); setTrimStat(null); setTrimPrice(item.price) }} className={trimSelect2 === item.trim2 ? 'selected' : ''}>
                                            {trimSelect2 === item.trim2
                                                ? <img src={optionClick} />
                                                : <img src={optionNonClick} />
                                            }
                                            <p>{item.trim2} - {(item.price / 10000).toLocaleString()}만원</p>
                                        </span>
                                    ))}
                                </span>
                            </div>
                            <h3 style={{ marginTop: 120 }}>옵션 추가하기</h3>
                            {trimSelect1 !== null && trimSelect2 !== null
                                ? <div className="optionSelectDiv">
                                    {optionList.option.map((item, idx) => (
                                        <div
                                            className={options.find(option => option.name === item.name) && "selected"}
                                            onClick={() => {
                                                if (options.find(option => option.name === item.name)) {
                                                    // item이 options에 이미 존재하는 경우
                                                    setOptions(options.filter(option => option.name !== item.name));
                                                    setOptionPrice(optionPrice - item.price);
                                                } else {
                                                    // item이 options에 존재하지 않는 경우
                                                    setOptions([...options, item]);
                                                    setOptionPrice(optionPrice + item.price);
                                                }
                                            }}
                                        >
                                            <img src={require(`../assets/img/option/${item.img}.png`)} />
                                            <p>{item.name}</p>
                                            <h4>{(item.price / 10000).toLocaleString()}만원</h4>
                                            {options.find(option => option.name === item.name) &&
                                                <img src={optionClick} style={{ width: 25, position: 'absolute', right: 15, bottom: 15 }} />
                                            }

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