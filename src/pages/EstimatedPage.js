import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import '../styles/OptionPage.css'
import GNB from "../components/GNB"
import Footer from "../components/Footer"
import nonSelectBox from '../assets/img/functionIcon/optionPage_nonSelectBox.png'
import selectBox from '../assets/img/functionIcon/optionPage_SelectBox.png'
import optionClick from '../assets/img/functionIcon/optionClick.png'
import { OptionPagePopUp } from "../components/PopUp"
import { quickDealEstimatedAxios, estimatedAddAxios } from "../services/Request";



const OptionPage = (props) => {
    const { id } = useParams();
    const [content, setContent] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await quickDealEstimatedAxios(id)
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
    const [useingSelect8, setUseingSelect8] = useState('')
    const [useingSelect9, setUseingSelect9] = useState('')

    //최종 버튼
    const [nextStat, setNextStat] = useState(false)


    useEffect(() => {
        if (content) {
            const oil = [
                content.lpg === 1 && 'LPG',
                content.gasoline === 1 && '가솔린',
                content.diesel === 1 && '디젤',
                content.hybrid === 1 && '하이브리드',
                content.electric === 1 && '전기',
                content.h2 === 1 && '수소',
            ].filter(Boolean).join(', ');
            setOilStat(oil)

            if (content.option) {
                const totalPrice = content.option.reduce((acc, item) => acc + item.price, 0);
                setOptionPrice(totalPrice);
            }

            setTrimSelect1(content.trim1)
            setTrimSelect2(content.trim2)
            setTrimPrice(content.price)
        }
    }, [content])


    const clickFunction = async () => {
        if (infoSelect1 && infoSelect2 && id && content) {
            await estimatedAddAxios({
                car_code: id,
                car_name: content.name,
                enter: content.enter,
                in_color: content.in_color,
                out_color: content.out_color,
                trim1: trimSelect1,
                trim2: trimSelect2,
                options: content.option.map(option => option.name),
                method: useingSelect1,
                period: useingSelect2,
                deposit: useingSelect3,
                deposit_price: useingSelect4,
                payment_price: useingSelect5,
                age: useingSelect6,
                annual_mileage: useingSelect7,
                name: useingSelect8,
                phone: useingSelect9,
                price: trimPrice + optionPrice,
                type: "즉시 출고"
            })
            setNextStat(true);
            document.body.style.overflow = 'hidden';
        }
    }



    if (!content) {
        return null
    }
    return (
        <>
            {nextStat &&
                <OptionPagePopUp />
            }
            <GNB stat={true} page={'즉시 출고'} />
            <div className="flexSection">
                <div className="infoSection">
                    <div>
                        <h1>옵션 및 이용조건</h1>
                        <span className="carTitle" style={{ alignItems: 'center' }}>
                            <img
                                src={`${process.env.REACT_APP_IMG_URL}/${content.logo_img}.png`}
                                alt="차량 브랜드 로고"
                                onError={(e) => {
                                    e.target.onerror = null; // 무한 루프 방지
                                    e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                                }}
                            />
                            <h3>{content.enter} {content.name}</h3>
                        </span>
                        <p>{content.year}.{content.month} │ {content.category} │ {oilStat}</p>
                        <p>{content.min_cc}~{content.max_cc}CC │ 복합연비 {content.min_fuel_efficiency}~{content.max_fuel_efficiency}km/L</p>
                        <img
                            src={`${process.env.REACT_APP_IMG_URL}/${content.img}.png`}
                            alt="차량 이미지"
                            onError={(e) => {
                                e.target.onerror = null; // 무한 루프 방지
                                e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                            }}
                        />
                        <h4>세부 모델</h4>
                        <div className="infoSelectedListDiv">
                            <span>
                                <p>{content.trim1}</p>
                                <p>{content.trim2}</p>
                            </span>
                            <p>{parseInt((content.price / 10000)).toLocaleString()} 만원</p>
                        </div>
                        <h4>옵션</h4>
                        <div className="infoSelectedListDiv">
                            <span className="selectOptionListSpan">
                                {content.option.length !== 0 && content.option.map((item, idx) => (
                                    <p>{item.name}</p>
                                ))}
                            </span>
                            <p>+ {parseInt((optionPrice / 10000)).toLocaleString()} 만원</p>
                        </div>
                        <span className="priceTitle">
                            <p>합계</p>
                            <h4>{parseInt(((trimPrice + optionPrice)) / 10000).toLocaleString()} 만원</h4>
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
                        {useingSelect1 && useingSelect2 && useingSelect3 && useingSelect4 !== '' && useingSelect5 && useingSelect6 && useingSelect7 && useingSelect8 !== '' && useingSelect9.length >= 10 && infoSelect1 && infoSelect2
                            ? <p className="nextBtn" onClick={clickFunction}>견적서 확인</p>
                            : <p className="nonNextBtn">견적서 확인</p>
                        }

                    </div>
                </div>
                <div className="optionSection">
                    <div className="optionMarginDiv">
                        <div className="colorDiv">
                            <span>
                                <h3>외장 색상</h3>
                                <p>{content.out_color}</p>
                            </span>
                            <span>
                                <span className='colorBtn selected' style={{ backgroundColor: content.rgb }}>
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
                                            <p>{content.trim1}</p>
                                        </span>
                                    </span>
                                }
                                {trimSelect2 &&
                                    <span style={{ overflowY: 'hidden', height: 65, borderLeft: trimStat !== 0 && '1px solid #ededed' }}>
                                        <span className={'selected'}>
                                            <img src={optionClick} />
                                            <p>{content.trim2} - {parseInt((trimPrice / 10000)).toLocaleString()}만원</p>
                                        </span>
                                    </span>
                                }
                            </div>
                            <h3 style={{ marginTop: 120 }}>옵션</h3>
                            {trimSelect1 !== null && trimSelect2 !== null
                                ? <div className="optionSelectDiv">
                                    {content.option.map((item, idx) => (
                                        <div>
                                            <img
                                                className='hotDealCardImg'
                                                src={`${process.env.REACT_APP_IMG_URL}/${item.img}.png`}
                                                alt="한정 특가 상품 이미지"
                                                onError={(e) => {
                                                    e.target.onerror = null; // 무한 루프 방지
                                                    e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                                                }}
                                            />
                                            <p>{item.name}</p>
                                            <h4>{parseInt((item.price / 10000)).toLocaleString()}만원</h4>
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
                                <p className={useingSelect2 === '36개월' ? 'selected' : ''} onClick={() => setUseingSelect2('36개월')}>36개월</p>
                                <p className={useingSelect2 === '48개월' ? 'selected' : ''} onClick={() => setUseingSelect2('48개월')}>48개월</p>
                                <p className={useingSelect2 === '60개월' ? 'selected' : ''} onClick={() => setUseingSelect2('60개월')}>60개월</p>
                            </span>
                            <h4>보증금</h4>
                            <span>
                                <p className={useingSelect3 === '없음' ? 'selected' : ''} onClick={() => setUseingSelect3('없음')}>없음</p>
                                <p className={useingSelect3 === '10%' ? 'selected' : ''} onClick={() => setUseingSelect3('10%')}>10%</p>
                                <p className={useingSelect3 === '20%' ? 'selected' : ''} onClick={() => setUseingSelect3('20%')}>20%</p>
                                <p className={useingSelect3 === '30%' ? 'selected' : ''} onClick={() => setUseingSelect3('30%')}>30%</p>
                                <p className={useingSelect3 === '40%' ? 'selected' : ''} onClick={() => setUseingSelect3('40%')}>40%</p>
                            </span>
                            <h4>보증금(원)</h4>
                            <span>
                                <input placeholder="0" type="number" value={useingSelect4} onChange={event => setUseingSelect4(event.target.value)} />
                            </span>
                            <h4>선납금</h4>
                            <span>
                                <p className={useingSelect5 === '없음' ? 'selected' : ''} onClick={() => setUseingSelect5('없음')}>없음</p>
                                <p className={useingSelect5 === '10%' ? 'selected' : ''} onClick={() => setUseingSelect5('10%')}>10%</p>
                                <p className={useingSelect5 === '20%' ? 'selected' : ''} onClick={() => setUseingSelect5('20%')}>20%</p>
                                <p className={useingSelect5 === '30%' ? 'selected' : ''} onClick={() => setUseingSelect5('30%')}>30%</p>
                                <p className={useingSelect5 === '40%' ? 'selected' : ''} onClick={() => setUseingSelect5('40%')}>40%</p>
                            </span>
                            <h4>보험연령</h4>
                            <span>
                                <p className={useingSelect6 === '만 21세 이상' ? 'selected' : ''} onClick={() => setUseingSelect6('만 21세 이상')}>만 21세 이상</p>
                                <p className={useingSelect6 === '만 26세 이상' ? 'selected' : ''} onClick={() => setUseingSelect6('만 26세 이상')}>만 26세 이상</p>
                            </span>
                            <h4>연간 주행거리</h4>
                            <span>
                                <p className={useingSelect7 === '연간 1만km' ? 'selected' : ''} onClick={() => setUseingSelect7('연간 1만km')}>연간 1만km</p>
                                <p className={useingSelect7 === '연간 2만km' ? 'selected' : ''} onClick={() => setUseingSelect7('연간 2만km')}>연간 2만km</p>
                                <p className={useingSelect7 === '연간 3만km' ? 'selected' : ''} onClick={() => setUseingSelect7('연간 3만km')}>연간 3만km</p>
                                <p className={useingSelect7 === '무제한' ? 'selected' : ''} onClick={() => setUseingSelect7('무제한')}>무제한</p>
                            </span>
                            <h4>개인 정보</h4>
                            <span>
                                <input placeholder="이름을 적어주세요" value={useingSelect8} onChange={event => setUseingSelect8(event.target.value)} maxLength={10} />
                                <input placeholder="연락처를 적어주세요" value={useingSelect9} onChange={event => setUseingSelect9(event.target.value)} maxLength={11} />
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