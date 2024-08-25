import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css'
import '../styles/QuickFAQPage.css'
import picture from '../assets/img/popup/imageUpload.png'
import { FAQ_KoreaLogo, IncomeLogo } from '../components/LogoList'
import { quickFAQAxios } from '../services/Request'
import NoCardList from '../components/NoCardList'







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




    if (!filteredList) {
        return null
    }
    return (
        <div className="admin_content">
            <h2>빠른 간편 문의 <span>- 차량 수정 및 삭제</span></h2>
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
                            <h1>{item.name}</h1>
                            <div className='admin_content_hodeal_infosub'>
                                <p>{item.date}</p>
                                <div className='admin_content_hodeal_line' />
                                <p>{item.size}</p>
                                <div className='admin_content_hodeal_line' />
                                <p>{item.fuel}</p>
                            </div>
                            <div className='admin_content_hodeal_infosub'>
                                <p>{item.cc}</p>
                                <div className='admin_content_hodeal_line' />
                                <p>{item.mileage}</p>
                                <div className='admin_content_hodeal_line' />
                                <p>{item.money}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}





export const Admin_QuickFAQAdd = (props) => {
    const [categoryStat, setCategoryStat] = useState('국산');
    const [brandStat, setBrandStat] = useState('현대');
    const [FAQ_carname, setFAQ_carname] = useState('');
    const [FAQ_MINmileage, setFAQ_MINmileage] = useState('');
    const [FAQ_MAXmileage, setFAQ_MAXmileage] = useState('');
    const [FAQ_carprice, setFAQ_carprice] = useState('');
    const [FAQ_startDate, setFAQ_StartDate] = useState({ year: "", month: ""});
    const [selectedCartype, setSelectedCartype] = useState(null);
    const [selectedFueltype, setSelectedFueltype] = useState(null);

    const years = Array.from({ length: 20 }, (_, i) => (new Date().getFullYear() + i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

    const FAQ_handleStartDateChange = (e) => {
        const { name, value } = e.target;
        setFAQ_StartDate({ ...FAQ_startDate, [name]: value });
    };

    const cartypeButtons = [
        '경차', '소형', '준중형', '중형', '준대형',
        '대형', '스포츠카', 'SUV', 'MPV'
    ];

    const fueltypeButtons = [
        '디젤', '가솔린', 'LPG', '하이브리드', '전기',
        '수소'
    ];

    return (
        <div className="admin_content">
            <h2>빠른 간편 문의 <span>- 차량 추가</span></h2>
            <div className="header-row"/>
            <div className="admin_content_FAQ_add">
                <div className='categoryTitleDiv'>
                    <h3 onClick={() => setCategoryStat('국산')} className={categoryStat === '국산' ? 'selected' : ''}>국산 브랜드</h3>
                    <h3 onClick={() => setCategoryStat('수입')} className={categoryStat === '수입' ? 'selected' : ''}>수입 브랜드</h3>
                </div>
                {categoryStat === '국산' ?
                    <FAQ_KoreaLogo setStat={setBrandStat} brandStat={brandStat} />
                    : <IncomeLogo />
                }
                <h3>차량 이름</h3>
                <input
                    placeholder='차량 이름을 입력하세요.'
                    value={FAQ_carname}
                    onChange={(e) => setFAQ_carname(e.target.value)}
                />
                <h3>차량 사진 첨부하기</h3>
                <img src={picture} alt="배너 미리보기" style={{width: '38px', height: '38px'}} />
                <div className="admin_content_FAQ_preview_img"></div>
                <div className="admin_content_FAQ_newcar_bodySection">
                    <div className="admin_content_FAQ_newcar_PriceSection">
                        <h3>신차 출고가</h3>
                        <div className="admin_content_FAQ_newcar_PriceSection_input">
                            <input
                                placeholder='가격을 입력하세요.'
                                value={FAQ_carprice}
                                onChange={(e) => setFAQ_carprice(e.target.value)}
                            />
                            <p>만원</p>
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
                            className={selectedFueltype === type ? 'selected' : ''}
                            onClick={() => setSelectedFueltype(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                <h3>연비</h3>
                <div className="admin_content_FAQ_MAXMINSection">
                    <p>최소</p>
                    <input
                        placeholder='입력해주세요.'
                        value={FAQ_MINmileage}
                        onChange={(e) => setFAQ_MINmileage(e.target.value)}
                    />
                    <p>~</p>
                    <p>최대</p>
                    <input
                        placeholder='입력해주세요.'
                        value={FAQ_MAXmileage}
                        onChange={(e) => setFAQ_MAXmileage(e.target.value)}
                    />
                    <p>km/L</p>
                </div>
                <h3>배기</h3>
                <div className="admin_content_FAQ_MAXMINSection">
                    <p>최소 </p>
                    <input
                        placeholder='입력해주세요.'
                        value={FAQ_MINmileage}
                        onChange={(e) => setFAQ_MINmileage(e.target.value)}
                    />
                    <p>~ </p>
                    <p>최대 </p>
                    <input
                        placeholder='입력해주세요.'
                        value={FAQ_MAXmileage}
                        onChange={(e) => setFAQ_MAXmileage(e.target.value)}
                    />
                    <p> CC</p>
                </div>
                <h3>세부모델 추가하기</h3>
                <div className="admin_content_FAQ_detailSection">
                    <h4>2024년형 가솔린 터보 1.6 하이브리드 2WD<span>/</span>트랜디(A/T) <span>-</span> 1390만원</h4>
                    <div className="admin_content_FAQ_detail_Section_input">
                        <input
                            placeholder='모델명을 입력해주세요.'
                            value={FAQ_MINmileage}
                            onChange={(e) => setFAQ_MINmileage(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};