import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css'
import { hotDealAxios } from '../services/Request'
import { quickFAQAxios } from '../services/Request'
import NoCardList from '../components/NoCardList'






export const Admin_HotdealAdd = (props) => {
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




export const Admin_HotdealEdit = (props) => {
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