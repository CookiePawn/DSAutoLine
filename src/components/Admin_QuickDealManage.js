import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css';
import '../styles/QuickFAQPage.css';
import {
    quickDealAxios,
    colorGetAxios,
    colorCarCodeGetAxios,
    quickOptionCarCodeGetAxios,
    optionGetAxios,
    carUpdateAxios
} from '../services/Request';
import { imageResize4_3 } from '../utils/imageResize';
import Loading from "./Loading";

const Admin_QuickDealManage = ({ selectedCar, setSelectedCar }) => {
    const [carData, setCarData] = useState(null);
    const [carImage, setCarImage] = useState(null);
    const [carType, setCarType] = useState(null);
    const [rentalPrice, setRentalPrice] = useState("");
    const [info, setinfo] = useState("");
    const [payment, setPayment] = useState(null);
    const [deposit, setDeposit] = useState(null);
    const [inColor, setInColor] = useState("");
    const [outColor, setOutColor] = useState("");
    const [monthStat, setMonthStat] = useState("렌트");    

    // 옵션 관련 상태
    const [optionList, setOptionList] = useState([]);
    const [optionSelectedList, setOptionSelectedList] = useState([]);
    const [searchOption, setSearchOption] = useState("");


    useEffect(() => {
        if (selectedCar) {
            const fetchCarData = async () => {
                try {
                    const response = await quickDealAxios(null, null, null, selectedCar.car_code);
                    if (response) {
                        setCarData(response[0]);
                        setCarImage(response[0].img);
                        setRentalPrice(response[0].month_price);
                        setinfo(response[0].info);
                        setPayment(response[0].payment);
                        setDeposit(response[0].deposit);
                        setInColor(response[0].in_color);
                        setOutColor(response[0].out_color);
                        setCarType(response[0].category);
                        setMonthStat(response[0].month_use || "렌트");                        
                    }
                } catch (error) {
                    console.error("❌ Error fetching car data:", error);
                }
            };
            fetchCarData();
        }
    }, [selectedCar]);

    // 📌 옵션 데이터 가져오기 및 매핑
    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await optionGetAxios();
                setOptionList(response);

                if (selectedCar) {
                    const selectedOptions = await quickOptionCarCodeGetAxios(selectedCar.car_code);
                    // ✅ 백엔드 응답 데이터를 optionSelectedList에 저장
                    const mappedOptions = selectedOptions.map(option => ({
                        seq: option.seq,
                        name: option.name,
                        price: option.price,
                    }));
                    setOptionSelectedList(mappedOptions);
                }
            } catch (error) {
                console.error("❌ Error fetching options:", error);
            }
        };
        fetchOptions();
    }, [selectedCar]);

    if (!carData) return <Loading />;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (e) => {
        const resizedImage = await imageResize4_3(e);
        setCarImage(resizedImage);
    };

    const handleSave = async () => {
        if (!carData) {
            alert("차량 데이터를 확인해주세요.");
            return;
        }

        try {
            const requestData = {
                car_code: selectedCar.car_code,
                name: carData.name,
                img: carImage,
                price: carData.price,
                category: carType,
                info: info,
                rental_price: rentalPrice,
                payment: payment,
                deposit: deposit,
                in_color: inColor,
                out_color: outColor,
                month_use: monthStat,
                options: optionSelectedList.map(option => ({ id: option.id, name: option.name, price: option.price }))
            };

            console.log("🚀 백엔드로 전송할 데이터:", requestData);
            const response = await carUpdateAxios(requestData);

            if (response?.sc === 200) {
                alert('🚀 차량 정보가 성공적으로 수정되었습니다!');
                setSelectedCar(null);
            } else {
                throw new Error("백엔드 응답 오류");
            }
        } catch (error) {
            console.error("❌ 차량 수정 중 오류 발생:", error.response?.data || error.message);
            alert("수정 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="admin_content">
            <h2>즉시 출고 <span>- 차량 수정</span></h2>
            <button onClick={() => setSelectedCar(null)}>목록으로</button>

            <div className="admin_content_FAQ_add">
                <h3>차량 이름</h3>
                <input name="name" value={carData.name || ""} onChange={handleInputChange} />

                {/* 🚗 차량 이미지 업로드 */}
                <h3>차량 사진 첨부하기</h3>
                <div className="admin_content_FAQ_newcar_PriceSection">
                    {carImage ? (
                        <img src={`${process.env.REACT_APP_IMG_URL}/${carImage}.png`} style={{ width: '500px' }} alt="차량 이미지" />
                    ) : (
                        <img src={require('../assets/img/popup/imageUpload.png')} alt="이미지 업로드" style={{ width: '38px', height: '38px', cursor: 'pointer' }} />
                    )}
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </div>

                {/* 🚀 이용 방법 */}
                <h3>이용 방법</h3>
                <div className="admin_content_FAQ_detailSection">
                    <div className="admin_content_FAQ_detail_Section_input">
                        <button onClick={() => setMonthStat("렌트")} className={monthStat === "렌트" ? "selected" : ""}>렌트</button>
                        <button onClick={() => setMonthStat("리스")} className={monthStat === "리스" ? "selected" : ""}>리스</button>
                    </div>
                </div>

                {/* 🚗 월 렌트비 */}
                <h3>월 {monthStat}비</h3>
                <div className="admin_content_FAQ_newcar_PriceSection">
                    <div className="admin_content_FAQ_newcar_PriceSection_input">
                        <input type="number" placeholder="금액 입력" value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
                        <p>원</p>
                    </div>
                </div>

                {/* 🚗 할부 */}
                <h3>할부</h3>
                <div className="admin_content_FAQ_detailSection">
                    <div className="admin_content_FAQ_detail_Section_input">
                        {["12개월", "24개월", "36개월", "48개월", "60개월"].map((term) => (
                            <button key={term} onClick={() => setPayment(term)} className={payment === term ? "selected" : ""}>{term}</button>
                        ))}
                    </div>
                </div>

                {/* 🚗 선납금/보증금 */}
                <h3>선납금/보증금</h3>
                <div className="admin_content_FAQ_detailSection">
                    <div className="admin_content_FAQ_detail_Section_input">
                        {["선납금", "보증금"].map((type) => (
                            <button key={type} onClick={() => setDeposit(type)} className={deposit === type ? "selected" : ""}>{type}</button>
                        ))}
                    </div>
                </div>

                {/* 🚗 세부모델 */}
                <h3>세부모델</h3>
                <div className="admin_content_FAQ_detailSection">
                    <div className="admin_content_FAQ_detail_Section_input">
                        <input placeholder="ex) 2.5 가솔린 터보-프레스티지 4인승 (A/T)" value={info} onChange={(e) => setinfo(e.target.value)} style={{width: 'fixed'}} />
                    </div>
                </div>

                {/* 🚗 외장색 / 내장색 */}
                <div className="admin_content_FAQ_newcar_bodySection">
                    <div className="admin_content_FAQ_newcar_PriceSection">
                        <h3>외장 색상</h3>
                        <div className="admin_content_FAQ_newcar_PriceSection_input">
                            <input
                                placeholder='외장 색상 입력'
                                value={outColor}
                                onChange={(e) => setOutColor(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="admin_content_FAQ_newcar_PriceSection">
                        <h3>내장 색상</h3>
                        <div className="admin_content_FAQ_newcar_PriceSection_input">
                            <input
                                placeholder='내장 색상 입력'
                                value={inColor}
                                onChange={(e) => setInColor(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* 🚗 옵션 선택 */}
                <div className="admin_content_FAQ_ColorAddDiv">
                    <h3>옵션</h3>
                    <span>                        
                        {/* 옵션 전체 리스트 */}
                        <div>
                            <input
                                placeholder='옵션을 검색해주세요'
                                value={searchOption}
                                onChange={(e) => setSearchOption(e.target.value)}
                            />
                            <div className='admin_content_colorCard title'>
                                <p style={{ width: 50 }}>옵션명</p>
                                <p>금액</p>
                            </div>
                            <div className="admin_content_colorCardList">
                                {optionList.filter(option => option.name.includes(searchOption)).map((option, idx) => (
                                    <div key={idx} className="admin_content_colorCard">
                                        <p>{option.name}</p>
                                        <p>{parseInt(option.price / 10000).toLocaleString()} 만원</p>
                                        <button onClick={() => {
                                            setOptionSelectedList([...optionSelectedList, option]);
                                            setOptionList(optionList.filter((_, index) => index !== idx));
                                        }} style={{ color: "blue" }}>
                                            추가
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 선택된 옵션 리스트 */}
                        <div>
                            <div className="admin_content_colorCard title">
                                <p>옵션명</p>
                                <p>금액</p>
                            </div>
                            {/* ✅ 스크롤 적용을 위해 div 감싸기 */}
                            <div className="admin_content_colorCardList">
                                {optionSelectedList.length === 0 
                                    ? <p style={{ textAlign: "center" }}>선택된 옵션이 없습니다</p> 
                                    : optionSelectedList.map((option, idx) => (
                                        <div key={option.seq} className="admin_content_colorCard">
                                            <p>{option.name}</p>
                                            <p>{parseInt(option.price / 10000).toLocaleString()} 만원</p>
                                            <button onClick={() => {
                                                setOptionList([...optionList, option]);
                                                setOptionSelectedList(optionSelectedList.filter((_, index) => index !== idx));
                                            }}>
                                                삭제
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </span>
                </div>

                <button className="admin_content_FAQ_alladd_addbutton" onClick={handleSave}>수정 완료</button>            
            </div>
        </div>
    );
};

export default Admin_QuickDealManage;
