import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css';
import '../styles/QuickFAQPage.css';
import { quickFAQAxios, colorGetAxios, colorCarCodeGetAxios, optionCarCodeGetAxios, optionGetAxios, carUpdateAxios } from '../services/Request';
import { imageResize4_3 } from '../utils/imageResize';
import Loading from "./Loading";

const Admin_QuickFAQManage = ({ selectedCar, setSelectedCar }) => {
    const [carData, setCarData] = useState(null);
    const [colorList, setColorList] = useState([]);
    const [carSelectedColors, setCarSelectedColors] = useState([]);  // ✅ 추가된 상태
    const [searchColor, setSearchColor] = useState("");
    const [optionList, setOptionList] = useState([]);
    const [optionSelectedList, setOptionSelectedList] = useState([]);
    const [searchOption, setSearchOption] = useState("");    
    const [FAQ_model, setFAQ_model] = useState("");
    const [FAQ_detailmodel, setFAQ_detailmodel] = useState("");
    const [FAQ_detailmodel_price, setFAQ_detailmodel_price] = useState("");
    const [fuelTypes, setFuelTypes] = useState({
        gasoline: 0,
        diesel: 0,
        lpg: 0,
        hybrid: 0,
        electric: 0,
        h2: 0
    });

    // ✅ 선택한 차량 데이터 불러오기
    useEffect(() => {
        if (selectedCar) {
            const fetchCarData = async () => {
                try {
                    const response = await quickFAQAxios(null, null, null, selectedCar.car_code);
                    if (response) {
                        console.log("🚀 API 응답 데이터:", response); // 데이터 확인
                        setCarData(response[0]); // 첫 번째 객체를 carData로 저장
                        setFuelTypes({
                            gasoline: response.gasoline,
                            diesel: response.diesel,
                            lpg: response.lpg,
                            hybrid: response.hybrid,
                            electric: response.electric,
                            h2: response.h2
                        });
                    }
                } catch (error) {
                    console.error("❌ Error fetching car data:", error);
                }
            };
            fetchCarData();
        }
    }, [selectedCar]);

    // 1️⃣ carData에서 fuel 상태를 초기화
    useEffect(() => {
        if (carData) {
            setFuelTypes({
                가솔린: carData.gasoline === 1,
                디젤: carData.diesel === 1,
                LPG: carData.lpg === 1,
                하이브리드: carData.hybrid === 1,
                전기: carData.electric === 1,
                수소: carData.h2 === 1,
            });
        }
    }, [carData]);

    // ✅ 색상 및 옵션 데이터 불러오기
    useEffect(() => {
        const fetchOptionsAndColors = async () => {
            try {
                // 전체 색상 리스트 가져오기
                const colorResponse = await colorGetAxios();
                setColorList(colorResponse);

                console.log("selectedCar:", JSON.stringify(selectedCar, null, 2));

                // 현재 차량에 선택된 색상 불러오기
                if (selectedCar) {                    
                    const carColorResponse = await colorCarCodeGetAxios(selectedCar.car_code);
                    setCarSelectedColors(carColorResponse);
                }

                const optionResponse = await optionGetAxios();
                setOptionList(optionResponse);

                // 현재 차량에 선택된 옵션 불러오기
                if (selectedCar) {                    
                    const optionResponse = await optionCarCodeGetAxios(selectedCar.car_code);
                    setOptionSelectedList(optionResponse);
                }
            } catch (error) {
                console.error("❌ Error fetching options or colors:", error);
            }
        };
        fetchOptionsAndColors();
    }, []);

    if (!carData) return <Loading />;

    // ✅ 차량 데이터 업데이트 핸들러
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarData(prev => ({ ...prev, [name]: value }));
    };

    // ✅ 차량 수정 저장
    // const handleSave = async () => {
    //     try {
    //         await carUpdateAxios({ ...carData, ...fuelTypes });
    //         alert('🚀 차량 정보가 수정되었습니다!');
    //         setSelectedCar(null); // 수정 완료 후 목록으로 돌아가기
    //     } catch (error) {
    //         console.error("❌ Error updating car data:", error);
    //         alert("수정 중 오류가 발생했습니다.");
    //     }
    // };

    return (
        <div className="admin_content">
            <h2>빠른 간편 문의 <span>- 차량 수정</span></h2>
            <button onClick={() => setSelectedCar(null)}>목록으로</button>

            <div className="admin_content_FAQ_add">
                <h3>차량 이름</h3>
                <input
                    name="name"
                    placeholder="ex) K5"
                    value={carData.name || ""}
                    onChange={handleInputChange}
                />

                <h3>차량 사진</h3>
                {carData.img && <img src={`${process.env.REACT_APP_IMG_URL}/${carData.img}.png`} alt="차량 이미지" />}
                <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                        const response = await imageResize4_3(e);
                        setCarData(prev => ({ ...prev, img: response }));
                    }}
                />

                <h3>신차 출고가</h3>
                <input
                    name="price"
                    type="number"
                    value={carData.price || ""}
                    onChange={handleInputChange}
                />

                <h3>신차 출시일</h3>
                <div className="date-picker">
                    <select name="year" value={carData.year || ""} onChange={handleInputChange}>
                        <option value="">년</option>
                        {Array.from({ length: 40 }, (_, i) => (new Date().getFullYear() - 20 + i).toString()).map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <p>년</p>
                    <select name="month" value={carData.month || ""} onChange={handleInputChange}>
                        <option value="">월</option>
                        {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map(month => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                    <p>월</p>
                </div>

                {/* 2️⃣ 연료 버튼 렌더링 */}
                <h3>연료</h3>
                <div className="admin_content_FAQ_cartypeSection">
                    {["가솔린", "디젤", "LPG", "하이브리드", "전기", "수소"].map((type, index) => (
                        <button
                            key={index}
                            className={fuelTypes[type] ? "selected" : ""}
                            onClick={() => 
                                setFuelTypes(prev => ({ ...prev, [type]: !prev[type] }))
                            }
                        >
                            {type.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* ✅ 외장 색상 UI 적용 */}
                <div className="admin_content_FAQ_ColorAddDiv">
                    <h3>외장 색상</h3>
                    <span>
                        {/* 전체 색상 리스트 */}
                        <div>
                            <input placeholder="색상을 검색해주세요" value={searchColor} onChange={(e) => setSearchColor(e.target.value)} />
                            <div className="admin_content_colorCard title">
                                <p>색상</p>
                                <p>색상명</p>
                                <p>생산 코드</p>
                            </div>
                            <div className="admin_content_colorCardList">
                                {colorList.filter(color => color.name.includes(searchColor)).map((color, idx) => (
                                    <div className="admin_content_colorCard" key={idx}>
                                        <span style={{ backgroundColor: color.rgb }}></span>
                                        <p>{color.name}</p>
                                        <p>{color.rgb}</p>
                                        <button onClick={() => {
                                            setCarSelectedColors([...carSelectedColors, color]);
                                            setColorList(colorList.filter((_, index) => index !== idx));
                                        }}>추가</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 선택된 차량 색상 리스트 */}
                        <div>
                            <div className="admin_content_colorCard title">
                                <p>색상</p>
                                <p>색상명</p>
                                <p>생산 코드</p>
                            </div>
                            <div className="admin_content_colorCardList">
                                {carSelectedColors.length === 0 ? (
                                    <p style={{ textAlign: "center" }}>선택된 색상이 없습니다</p>
                                ) : (
                                    carSelectedColors.map((color, idx) => (
                                        <div className="admin_content_colorCard" key={idx}>
                                            <span style={{ backgroundColor: color.rgb }}></span>
                                            <p>{color.name}</p>
                                            <p>{color.rgb}</p>
                                            <button onClick={() => {
                                                setColorList([...colorList, color]);
                                                setCarSelectedColors(carSelectedColors.filter((_, index) => index !== idx));
                                            }}>삭제</button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </span>
                </div>

                {/* ✅ 세부 모델 (트림) 수정 */}
                <h3 style={{ marginTop: 150 }}>세부모델 수정</h3>
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
                    <p>원</p>    
                </div>
                
                
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

                {/* <button className="admin_content_FAQ_alladd_addbutton" onClick={handleSave}>
                    수정 완료
                </button> */}
            </div>
        </div>
    );
};

export default Admin_QuickFAQManage;
