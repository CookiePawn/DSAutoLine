import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css'
import { quickFAQAxios, hotDealAxios } from '../services/Request'
import NoCardList from '../components/NoCardList'
import { HotDealCarAddPopUp } from "./PopUp";






export const Admin_HotdealAdd = (props) => {
    const [carList, setCarList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [searchValue, setSearchValue] = useState('');
    const [lease, setLease] = useState('')
    const [rental, setRental] = useState('')
    const [editStat, setEditStat] = useState(null)
    const [popupStat, setPopupStat] = useState(false)

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
            {popupStat && <HotDealCarAddPopUp setPopupStat={setPopupStat}/>}
            <h2>한정 특가 <span>- 차량 추가</span></h2>
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
                                onClick={() => setEditStat(idx)}
                            >
                                추가
                            </button>
                        </div>
                        <div className="admin_content_hotDealList_EditDiv" style={editStat !== idx ? { display: 'none' } : null}>
                            <p>월 렌트비</p>
                            <input placeholder='할인 된 금액 입력' value={rental} type="number" onChange={(e) => setRental(e.target.value)} />
                            <p>월 리스비</p>
                            <input placeholder="할인 된 금액 입력" value={lease} type="number" onChange={(e) => setLease(e.target.value)} />
                            <button
                                onClick={() => {
                                    if (lease !== '' && rental !== '') {
                                        setCarList(carList.filter((_, index) => index !== idx))
                                        setLease('')
                                        setRental('')
                                        setEditStat(null)
                                        setPopupStat(true)
                                    }
                                }}
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




export const Admin_HotdealEdit = (props) => {
    const [carList, setCarList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await hotDealAxios()
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
            <h2>한정 특가 <span>- 차량 관리</span></h2>
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