import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css'
import { quickDealAxios } from '../services/Request'
import { quickFAQAxios } from '../services/Request'
import NoCardList from '../components/NoCardList'





export const Admin_QuickDealAdd = (props) => {
    const [carList, setCarList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [searchValue, setSearchValue] = useState('');
    const [isAdding, setIsAdding] = useState(false);


    const handleAddClick = () => {
        setIsAdding(true);
    };


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
                            <div className="admin_content_hotdeal_buttonSection">
                            <button className="admin_content_add-button" onClick={handleAddClick}>추가</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}




export const Admin_QuickDealEdit = (props) => {
    const [carList, setCarList] = useState(null)
    const [filteredList, setFilteredList] = useState(null)
    const [searchValue, setSearchValue] = useState('');
    const [isAdding, setIsAdding] = useState(false);


    const handleAddClick = () => {
        setIsAdding(true);
    };


    useEffect(() => {
        const fetchData = async () => {
            const response = await quickDealAxios(null, null, null)
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
        <>
            <div className="admin_content">
            <h2>즉시 출고 <span>- 차량 수정 및 삭제</span></h2>
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
                        <img src={imageError(`car/${item.img}`)} alt="item" className="admin_content_hotdeal-image" />
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
                            <div className="admin_content_hotdeal_buttonSection">
                                <button className="admin_content_edit-button" onClick={handleAddClick}>수정</button>
                                <button className="admin_content_delete-button" onClick={handleAddClick}>삭제</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}