import React, { useState, useEffect } from "react"
import '../styles/OptionPage.css'
import '../styles/Admin_Content.css'
import optionClick from '../assets/img/functionIcon/optionClick.png'
import optionNonClick from '../assets/img/functionIcon/optionNonClick.png'
import { UpIcon, DownIcon } from "../components/Icons"
import { estimatedAxios, estimatedAddAxios } from "../services/Request";





const Admin_QuickDeal_Add = (props) => {
    const [content, setContent] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await estimatedAxios(props.id)
            console.log(response.trim)
            setContent(response)
        }
        fetchData()
    }, [props.id])

    const [colorStat, setColorStat] = useState([])

    //세부모델 선택
    const [trimStat, setTrimStat] = useState(null)
    const [trimSelect1, setTrimSelect1] = useState(null)
    const [trimSelect2, setTrimSelect2] = useState(null)
    const [trimPrice, setTrimPrice] = useState(0);

    //옵션
    const [options, setOptions] = useState([])
    const [optionPrice, setOptionPrice] = useState(0)


    //최종 버튼
    const [nextStat, setNextStat] = useState(false)

    const clickFunction = async () => {
        if (props.id && content) {
            await estimatedAddAxios({
                car_code: props.id,
                car_name: content.name,
                enter: content.enter,
                in_color: content.in_color,
                out_color: content.out_color,
                trim1: trimSelect1,
                trim2: trimSelect2,
                options: content.option.map(option => option.name),
                price: trimPrice + optionPrice,
                type: "빠른 간편 문의/ 한정 특가"
            })
            setNextStat(true);
            document.body.style.overflow = 'hidden';
        }
    }



    if (!content) {
        return null;  
    }
    return (
        <>
            <div className="optionSection" style={{ width: '90%' }}>
                <div className="colorDiv">
                    <span>
                        <h3>외장 색상</h3>
                        <p>{colorStat.name}</p>
                    </span>
                    <span>
                        {content.color.map((item, _) => (
                            colorStat !== item
                                ? <span style={{ backgroundColor: item.rgb }} onClick={() => setColorStat(item)} />
                                : <span className='colorBtn selected' style={{ backgroundColor: item.rgb }}>
                                    <img src={optionClick} alt="색상 선택 됨" />
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
                                    <img src={optionClick} alt="트림 선택 됨" />
                                    <p>{trimSelect1}</p>
                                </span>
                            </span>
                        }
                        <span style={{ display: trimStat === 0 ? 'block' : 'none', borderRight: '1px solid #ededed' }}>
                            {content.trim && Array.from(new Set(content.trim.map(item => item.trim1.trim()))).map((item, _) => (
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
                            {content.trim && content.trim.filter((item) => item.trim1.trim() === trimSelect1).map((item, _) => (
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
                            {content.option.map((item, _) => (
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
                                    <img src={`${process.env.REACT_APP_IMG_URL}/${item.img}.png`} />
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
                <button>추가</button>
            </div>
        </>
    )
}


export default Admin_QuickDeal_Add