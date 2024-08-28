import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css'
import '../styles/QuickFAQPage.css'
import { KoreaLogo, IncomeLogo } from '../components/LogoList'
import {
    quickFAQAxios,
    colorGetAxios,
    optionGetAxios,
    colorAddAxios,
    optionAddAxios,
    imageUploadAxios,
    carInsertAxios,
} from '../services/Request'
import { imageResize4_3, generateRandomString } from '../utils/imageResize'
import NoCardList from '../components/NoCardList'
import { CarAddPopUp } from "./PopUp";







export const Admin_QuickFAQEdit = (props) => {
    const [carList, setCarList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await quickFAQAxios(null, null, null)
            setCarList(response)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (carList) {
            // 검색어를 포함하는 항목 필터링
            setFilteredList(carList.filter(item =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
            ))
        }
    }, [carList, searchValue])


    const oilFunction = (item) => {
        const oil = [
            item.lpg === 1 && 'LPG',
            item.gasoline === 1 && '가솔린',
            item.diesel === 1 && '디젤',
            item.hybrid === 1 && '하이브리드',
            item.electric === 1 && '전기',
            item.h2 === 1 && '수소',
        ].filter(Boolean).join(', ');
        return oil
    }





    if (!filteredList) {
        return null
    }
    return (
        <div className="admin_content">
            <h2>빠른 간편 문의 <span>- 차량 관리</span></h2>
            <input
                className="admin_content_searchListInput"
                placeholder='차량을 검색해주세요'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="header-row">
                {/* <input type="checkbox" /> */}
            </div>
            <div className="admin_content_HotdealList">
                {filteredList.length === 0 && <NoCardList card={'차량이'} />}
                {filteredList.map((item, idx) => (
                    <div className="admin_content_HotdealItem" key={item.id}>
                        <img
                            className="admin_content_hotdeal-image"
                            src={`${process.env.REACT_APP_IMG_URL}/${item.img}.png`}
                            alt="차량 이미지"
                            onError={(e) => {
                                e.target.onerror = null; // 무한 루프 방지
                                e.target.src = `${process.env.REACT_APP_IMG_URL}/error.png`;
                            }}
                        />
                        <div className="admin_content_hotdeal-info">
                            <h1>{item.enter} {item.name}</h1>
                            <div className='admin_content_hodeal_infosub'>
                                <p>{item.year}.{item.month}</p>
                                <div className='admin_content_hodeal_line' />
                                <p>{item.category}</p>
                                <div className='admin_content_hodeal_line' />
                                <p>{oilFunction(item)}</p>
                            </div>
                            <div className='admin_content_hodeal_infosub'>
                                <p>{item.min_cc.toLocaleString()}CC~{item.max_cc.toLocaleString()}CC</p>
                                <div className='admin_content_hodeal_line' />
                                <p>복합연비 {item.min_fuel_efficiency}~{item.max_fuel_efficiency}km/L</p>
                            </div>
                        </div>
                        <button className="admin_content_carListDeleteButton">삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )
}





export const Admin_QuickFAQAdd = (props) => {
    const [categoryStat, setCategoryStat] = useState('국산');
    const [brandStat, setBrandStat] = useState(null);
    const [FAQ_carname, setFAQ_carname] = useState('');
    const [minFuel, setMinFuel] = useState('');
    const [maxFuel, setMaxFuel] = useState('');
    const [maxCC, setMaxCC] = useState('')
    const [minCC, setMinCC] = useState('')
    const [FAQ_carprice, setFAQ_carprice] = useState('');
    const [FAQ_model, setFAQ_model] = useState('');
    const [FAQ_detailmodel, setFAQ_detailmodel] = useState('');
    const [FAQ_detailmodel_price, setFAQ_detailmodel_price] = useState('');
    const [FAQ_startDate, setFAQ_StartDate] = useState({ year: "", month: "" });
    const [selectedCartype, setSelectedCartype] = useState(null);
    const [imgURL, setImgURL] = useState(null)
    const [rentalPrice, setRentalPrice] = useState('')
    const [leasePrice, setLeasePrice] = useState('')

    //연료
    const [gasoline, setGasoline] = useState(0)
    const [diesel, setDiesel] = useState(0)
    const [lpg, setLpg] = useState(0)
    const [hybrid, setHybrid] = useState(0)
    const [electric, setElectric] = useState(0)
    const [h2, setH2] = useState(0)



    // 모델 정보를 저장할 상태
    const [trims, setTrims] = useState([]);

    //색상, 옵션 배열
    const [colorList, setColorList] = useState(null)
    const [colorSelectedList, setColorSelectedList] = useState([])
    const [optionList, setOptionList] = useState(null)
    const [optionSelectedList, setOptionSelectedList] = useState([])
    const [searchColor, setSearchColor] = useState('');
    const [searchOption, setSearchOption] = useState('');
    const [colorName, setColorName] = useState('')
    const [colorRGB, setColorRGB] = useState('')
    const [optionName, setOptionName] = useState('')
    const [optionPrice, setOptionPrice] = useState('')
    const [optionImg, setOptionImg] = useState(null)

    const [popupStat, setPopupStat] = useState(false)

    const years = Array.from({ length: 20 }, (_, i) => (new Date().getFullYear() + i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await optionGetAxios()
            setOptionList(response1)
            const response2 = await colorGetAxios()
            setColorList(response2)
        }
        fetchData()
    }, [])

    // 검색어를 포함하는 항목 필터링 (items가 null이 아닐 때만 실행)
    const filteredColor = colorList ? colorList.filter(item =>
        item.name.toLowerCase().includes(searchColor.toLowerCase())
    ) : [];

    // 검색어를 포함하는 항목 필터링 (items가 null이 아닐 때만 실행)
    const filteredOption = optionList ? optionList.filter(item =>
        item.name.toLowerCase().includes(searchOption.toLowerCase())
    ) : [];

    const FAQ_handleStartDateChange = (e) => {
        const { name, value } = e.target;
        setFAQ_StartDate({ ...FAQ_startDate, [name]: value });
    };

    const cartypeButtons = [
        '경차', '소형/승용', 'SUV', '화물'
    ];

    const fueltypeButtons = [
        '디젤', '가솔린', 'LPG', '하이브리드', '전기', '수소'
    ];


    const handleAddModel = () => {
        setTrims([
            ...trims,
            {
                trim1: FAQ_model,
                trim2: FAQ_detailmodel,
                price: FAQ_detailmodel_price,
            }
        ]);

        //초기화
        setFAQ_model('');
        setFAQ_detailmodel('');
        setFAQ_detailmodel_price('');
    };

    if (!colorList || !optionList) {
        return null
    }
    return (
        <div className="admin_content">
            {popupStat && <CarAddPopUp />}
            <h2>빠른 간편 문의 <span>- 차량 추가</span></h2>
            <div className="header-row" />
            <div className="admin_content_FAQ_add">
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => setCategoryStat('국산')} className={categoryStat === '국산' ? 'selected' : ''}>국산 브랜드</h3>
                    <h3 onClick={() => setCategoryStat('수입')} className={categoryStat === '수입' ? 'selected' : ''}>수입 브랜드</h3>
                </div>
                {categoryStat === '국산' ?
                    <KoreaLogo setStat={setBrandStat} brandStat={brandStat} />
                    : <IncomeLogo setStat={setBrandStat} brandStat={brandStat} />
                }
                <h3>차량 이름</h3>
                <input
                    placeholder='ex) K5'
                    value={FAQ_carname}
                    onChange={(e) => setFAQ_carname(e.target.value)}
                />
                <h3>차량 사진 첨부하기</h3>
                <img
                    src={require('../assets/img/popup/imageUpload.png')}
                    alt="이미지 업로드 이미지"
                    style={{ width: '38px', height: '38px', cursor: 'pointer' }}
                    onClick={() => document.getElementById('fileInput3').click()}
                />
                <input
                    id="fileInput3"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={async (e) => {
                        const response = await imageResize4_3(e)
                        setImgURL(response)
                    }}
                />
                <div className="admin_content_FAQ_preview_img">
                    <img src={imgURL} style={{ width: '100%' }} />
                </div>
                <div className="admin_content_FAQ_newcar_bodySection">
                    <div className="admin_content_FAQ_newcar_PriceSection">
                        <h3>신차 출고가</h3>
                        <div className="admin_content_FAQ_newcar_PriceSection_input">
                            <input
                                placeholder='가격을 입력하세요.'
                                type="number"
                                value={FAQ_carprice}
                                onChange={(e) => setFAQ_carprice(e.target.value)}
                            />
                            <p>원</p>
                        </div>
                    </div>
                    <div className="admin_content_FAQ_newcar_DateSection">
                        <h3>신차 출시일</h3>
                        <div className="admin_content_FAQ_newcar_DateSection_input">
                            <div className="date-picker">
                                <select name="year" value={FAQ_startDate.year} onChange={FAQ_handleStartDateChange}>
                                    <option value="">년</option>
                                    {years.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                                <p>년</p>
                                <select name="month" value={FAQ_startDate.month} onChange={FAQ_handleStartDateChange}>
                                    <option value="">월</option>
                                    {months.map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                                <p>월</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>월 렌트비</h3>
                <input
                    placeholder='만원 단위로 0을 모두 입력'
                    value={rentalPrice}
                    type="number"
                    onChange={(e) => setRentalPrice(e.target.value)}
                />
                <h3>월 리스비</h3>
                <input
                    placeholder='만원 단위로 0을 모두 입력'
                    value={leasePrice}
                    type="number"
                    onChange={(e) => setLeasePrice(e.target.value)}
                />
                <h3>차종</h3>
                <div className="admin_content_FAQ_cartypeSection">
                    {cartypeButtons.map((type, index) => (
                        <button
                            key={index}
                            className={selectedCartype === type ? 'selected' : ''}
                            onClick={() => setSelectedCartype(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <h3>연료</h3>
                <div className="admin_content_FAQ_cartypeSection">
                    {fueltypeButtons.map((type, index) => (
                        <button
                            key={index}
                            className={
                                (type === '디젤' && diesel === 1) ||
                                    (type === '가솔린' && gasoline === 1) ||
                                    (type === 'LPG' && lpg === 1) ||
                                    (type === '하이브리드' && hybrid === 1) ||
                                    (type === '전기' && electric === 1) ||
                                    (type === '수소' && h2 === 1)
                                    ? 'selected' : ''
                            }
                            onClick={() => {
                                switch (type) {
                                    case '디젤':
                                        setDiesel(diesel === 0 ? 1 : 0);
                                        break;
                                    case '가솔린':
                                        setGasoline(gasoline === 0 ? 1 : 0);
                                        break;
                                    case 'LPG':
                                        setLpg(lpg === 0 ? 1 : 0);
                                        break;
                                    case '하이브리드':
                                        setHybrid(hybrid === 0 ? 1 : 0);
                                        break;
                                    case '전기':
                                        setElectric(electric === 0 ? 1 : 0);
                                        break;
                                    case '수소':
                                        setH2(h2 === 0 ? 1 : 0);
                                        break;
                                }
                            }}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <div className="admin_content_FAQ_newcar_bodySection">
                    <div className="admin_content_FAQ_newcar_PriceSection">
                        <h3>연비</h3>
                        <div className="admin_content_FAQ_MAXMINSection">
                            <p>최소</p>
                            <input
                                placeholder='입력해주세요.'
                                type="number"
                                value={minFuel}
                                onChange={(e) => setMinFuel(e.target.value)}
                            />
                            <p>~</p>
                            <p>최대</p>
                            <input
                                placeholder='입력해주세요.'
                                type="number"
                                value={maxFuel}
                                onChange={(e) => setMaxFuel(e.target.value)}
                            />
                            <p>km/L</p>
                        </div>
                    </div>
                    <div className="admin_content_FAQ_newcar_PriceSection">
                        <h3>배기</h3>
                        <div className="admin_content_FAQ_MAXMINSection">
                            <p>최소 </p>
                            <input
                                placeholder='입력해주세요.'
                                value={minCC}
                                onChange={(e) => setMinCC(e.target.value)}
                            />
                            <p>~ </p>
                            <p>최대 </p>
                            <input
                                placeholder='입력해주세요.'
                                value={maxCC}
                                onChange={(e) => setMaxCC(e.target.value)}
                            />
                            <p> CC</p>
                        </div>
                    </div>
                </div>
                <h3>세부모델 추가하기</h3>
                <div className="admin_content_FAQ_detailSection">
                    <div className="admin_content_FAQ_add_model">
                        {trims.map((model, index) => (
                            <div>
                                <button onClick={() => setTrims(trims.filter((_, i) => i !== index))}>삭제</button>
                                <h4 key={index}>
                                    {model.trim1} <span>/</span> {model.trim2} <span>-</span> {model.price} 원
                                </h4>
                            </div>
                        ))}
                    </div>
                    <div className="admin_content_FAQ_detail_Section_input">
                        <input
                            placeholder='모델명을 입력해주세요.'
                            value={FAQ_model}
                            onChange={(e) => setFAQ_model(e.target.value)}
                        />
                        <span>/</span>
                        <input
                            placeholder='세부모델명을 입력해주세요.'
                            value={FAQ_detailmodel}
                            onChange={(e) => setFAQ_detailmodel(e.target.value)}
                        />
                        <span>-</span>
                        <input
                            placeholder='가격을 입력해주세요.'
                            type="number"
                            value={FAQ_detailmodel_price}
                            onChange={(e) => setFAQ_detailmodel_price(e.target.value)}
                        />
                        <p>만원</p>
                    </div>
                    <button className="admin_content_FAQ_detailmodel_addbutton" onClick={handleAddModel}>추가하기</button>
                </div>
                <div className="admin_content_FAQ_ColorAddDiv">
                    <h3>외장 색상</h3>
                    <span>
                        <div>
                            <input
                                placeholder='색상을 검색해주세요'
                                value={searchColor}
                                onChange={(e) => setSearchColor(e.target.value)}
                            />
                            <div className='admin_content_colorCard title'>
                                <p>색상</p>
                                <p>색상명</p>
                                <p>생상 코드</p>
                            </div>
                            <span></span>
                            <div className='admin_content_colorCardList'>
                                {filteredColor.length === 0 && <NoCardList card={'색상이'} />}
                                {filteredColor.map((item, idx) => (
                                    <div className='admin_content_colorCard'>
                                        <span style={{ backgroundColor: item.rgb }}></span>
                                        <p>{item.name}</p>
                                        <p>{item.rgb}</p>
                                        <button
                                            onClick={async () => {
                                                setColorSelectedList([...colorSelectedList, { name: item.name, rgb: item.rgb }])
                                                setColorList(colorList.filter((_, index) => index !== idx))
                                            }}
                                            style={{ color: 'blue' }}
                                        >
                                            추가
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    placeholder='색상명을 입력해주세요'
                                    value={colorName}
                                    onChange={(e) => setColorName(e.target.value)}
                                />
                                <input
                                    placeholder='#111111와 같이 입력'
                                    value={colorRGB}
                                    onChange={(e) => setColorRGB(e.target.value)}
                                />
                                <button
                                    onClick={async () => {
                                        if (colorName && colorRGB.slice(0, 1) === '#' && (colorRGB.length === 7 || colorRGB.length === 4)) {
                                            await colorAddAxios({
                                                name: colorName,
                                                rgb: colorRGB,
                                            })
                                            setColorSelectedList([...colorSelectedList, { name: colorName, rgb: colorRGB }]);
                                            setColorName(''); // 입력 필드 초기화
                                            setColorRGB(''); // 입력 필드 초기화
                                        }
                                    }}
                                >
                                    추가
                                </button>
                            </div>
                            <div className='admin_content_colorCard title'>
                                <p>색상</p>
                                <p>색상명</p>
                                <p>생상 코드</p>
                            </div>
                            <span></span>
                            <div className='admin_content_colorCardList'>
                                {colorSelectedList.length === 0 && <NoCardList card={'선택 된 색상이'} />}
                                {colorSelectedList.map((item, idx) => (
                                    <div className='admin_content_colorCard'>
                                        <span style={{ backgroundColor: item.rgb }}></span>
                                        <p>{item.name}</p>
                                        <p>{item.rgb}</p>
                                        <button
                                            onClick={async () => {
                                                setColorList([...colorList, { name: item.name, rgb: item.rgb }])
                                                setColorSelectedList(colorSelectedList.filter((_, index) => index !== idx))
                                            }}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </span>
                </div>
                <div className="admin_content_FAQ_ColorAddDiv">
                    <h3>옵션</h3>
                    <span>
                        <div>
                            <input
                                placeholder='옵션을 검색해주세요'
                                value={searchOption}
                                onChange={(e) => setSearchOption(e.target.value)}
                            />
                            <div className='admin_content_colorCard title'>
                                <p style={{ width: 50 }}>이미지</p>
                                <p>옵션명</p>
                                <p>금액</p>
                            </div>
                            <span></span>
                            <div className='admin_content_colorCardList'>
                                {filteredOption.length === 0 && <NoCardList card={'옵션이'} />}
                                {filteredOption.map((item, idx) => (
                                    <div className='admin_content_colorCard'>
                                        {item.img.slice(0, 1) === 'o'
                                            ? <img src={`${process.env.REACT_APP_IMG_URL}/${item.img}.png`} style={{ height: '100%' }} />
                                            : <img src={item.img} style={{ height: '100%' }} />
                                        }
                                        <p>{item.name}</p>
                                        <p>{parseInt(item.price / 10000).toLocaleString()} 만원</p>
                                        <button
                                            onClick={async () => {
                                                setOptionSelectedList([...optionSelectedList, { name: item.name, price: item.price, img: item.img }])
                                                setOptionList(optionList.filter((_, index) => index !== idx))
                                            }}
                                            style={{ color: 'blue' }}
                                        >
                                            추가
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div>
                                <input
                                    placeholder='옵션명을 입력해주세요'
                                    value={optionName}
                                    onChange={(e) => setOptionName(e.target.value)}
                                />
                                <input
                                    placeholder='만원 단위로 0 모두 입력'
                                    value={optionPrice}
                                    type="number"
                                    onChange={(e) => setOptionPrice(e.target.value)}
                                />
                                <img
                                    src={require('../assets/img/popup/imageUpload.png')}
                                    alt="이미지 업로드 이미지"
                                    style={{ width: '38px', height: '38px', padding: '0 20px', marginTop: 10, cursor: 'pointer' }}
                                    onClick={() => document.getElementById('fileInput4').click()}
                                />
                                <input
                                    id="fileInput4"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={async (e) => {
                                        const response = await imageResize4_3(e)
                                        setOptionImg(response)
                                    }}
                                />
                                <button
                                    onClick={async () => {
                                        if (optionName !== '' && optionPrice !== '' && optionImg) {
                                            const random = generateRandomString(20)
                                            await optionAddAxios({
                                                name: optionName,
                                                price: optionPrice,
                                                img: `option_${random}`,
                                            })
                                            await imageUploadAxios(optionImg, `option_${random}`)
                                            setOptionSelectedList([...optionSelectedList, { name: optionName, price: optionPrice, img: optionImg }]);
                                            setOptionName(''); // 입력 필드 초기화
                                            setOptionPrice(''); // 입력 필드 초기화
                                            setOptionImg(null)
                                        }
                                    }}
                                >
                                    추가
                                </button>
                            </div>
                            <div className='admin_content_colorCard title'>
                                <p style={{ width: 50 }}>이미지</p>
                                <p>옵션명</p>
                                <p>금액</p>
                            </div>
                            <span></span>
                            <div className='admin_content_colorCardList'>
                                {optionSelectedList.length === 0 && <NoCardList card={'선택 된 옵션이'} />}
                                {optionSelectedList.map((item, idx) => (
                                    <div className='admin_content_colorCard'>
                                        {item.img.slice(0, 1) === 'o'
                                            ? <img src={`${process.env.REACT_APP_IMG_URL}/${item.img}.png`} style={{ height: '100%' }} />
                                            : <img src={item.img} style={{ height: '100%' }} />
                                        }
                                        <p>{item.name}</p>
                                        <p>{parseInt(item.price / 10000).toLocaleString()} 만원</p>
                                        <button
                                            onClick={async () => {
                                                setOptionList([...optionList, { name: item.name, price: item.price, img: item.img }])
                                                setOptionSelectedList(optionSelectedList.filter((_, index) => index !== idx))
                                            }}
                                        >
                                            삭제
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </span>
                </div>
                <div className="admin_content_FAQ_alladd_buttonSection">
                    <button
                        className="admin_content_FAQ_alladd_addbutton"
                        onClick={async () => {
                            // 가장 금액이 낮은 item 찾기
                            const lowestPriceItem = trims.reduce((lowest, item) => {
                                return item.price < lowest.price ? item : lowest;
                            }, trims[0]);
                            
                            if (FAQ_carname !== '' && minFuel !== '' && maxFuel !== ''
                                && maxCC !== '' && minCC !== '' && FAQ_carprice !== ''
                                && FAQ_startDate.year !== "" && FAQ_startDate.month !== ""
                                && selectedCartype && imgURL && trims.length !== 0
                                && colorSelectedList.length !== 0 && rentalPrice !== '' && leasePrice !== '') {
                                const random = generateRandomString(20)
                                await carInsertAxios({
                                    entry: categoryStat,
                                    enter: brandStat,
                                    car_name: FAQ_carname,
                                    img: `car_${random}`,
                                    price: FAQ_carprice,
                                    info: `${FAQ_startDate.year}년형 ${lowestPriceItem.trim1} ${lowestPriceItem.trim2}`,
                                    category: selectedCartype,
                                    size: selectedCartype,
                                    rental_price: rentalPrice,
                                    lease_price: leasePrice,
                                    year: FAQ_startDate.year,
                                    month: FAQ_startDate.month,
                                    gasoline: gasoline,
                                    diesel: diesel,
                                    lpg: lpg,
                                    hybrid: hybrid,
                                    h2: h2,
                                    electric: electric,
                                    min_cc: minCC,
                                    max_cc: maxCC,
                                    min_fuel_efficiency: minFuel,
                                    max_fuel_efficiency: maxFuel,
                                    color: colorSelectedList,
                                    trim: trims,
                                    option: optionSelectedList,
                                })
                                await imageUploadAxios(imgURL, `car_${random}`)
                                setPopupStat(true)
                            }
                        }}
                    >
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
};


