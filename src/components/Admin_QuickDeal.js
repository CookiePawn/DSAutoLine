import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css'
import { quickFAQAxios, quickDealAxios } from '../services/Request'
import NoCardList from '../components/NoCardList'
import Admin_QuickDeal_Add from "./Admin_QuickDeal_Add";





export const Admin_QuickDealAdd = (props) => {
    const [carList, setCarList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [searchValue, setSearchValue] = useState('');
    const [editStat, setEditStat] = useState(null)

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
    if (editStat !== null) {
        return (
            <div className="admin_content">
                <Admin_QuickDeal_Add id={editStat}/>
            </div>
        )
    }
    return (
        <div className="admin_content">
            <h2>즉시 출고 <span>- 차량 추가</span></h2>
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
                    <>
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
                            <button
                                className="admin_content_carListAddButton"
                                onClick={() => setEditStat(item.car_code)}
                            >
                                추가
                            </button>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}




export const Admin_QuickDealEdit = (props) => {
    const [carList, setCarList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await quickDealAxios(null, null, null)
            console.log(response)
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
            <h2>즉시 출고 <span>- 차량 관리</span></h2>
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
                        <div>
                            <p>내장 색상: {item.in_color}</p>
                            <p>외장 색상: {item.out_color}</p>
                        </div>
                        <div>
                            {item.option.map((item, idx) => (
                                <p>{item.name}</p>
                            ))}
                        </div>
                        <div>
                            <p>트림1: {item.trim1}</p>
                            <p>트림2: {item.trim2}</p>
                        </div>
                        <button className="admin_content_carListDeleteButton">삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )
}