import React, { useState, useEffect } from "react";
import '../styles/Admin_Content.css'
import { hotDealAxios } from '../services/Request'
import { quickFAQAxios } from '../services/Request'
import NoCardList from '../components/NoCardList'




const imageError = (img) => {
    let imageSrc;

    try {
        imageSrc = require(`../assets/img/${img}.png`);  // 동적으로 이미지 로드
    } catch (error) {
        imageSrc = require('../assets/img/dsautoline/DSAUTOLINE_car.png');  // 이미지가 없을 경우 대체 이미지 사용
    }

    return imageSrc
}





export const Admin_HotdealAdd = (props) => {
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
                            <button className="admin_content_add-button" onClick={handleAddClick}>추가</button>
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
    const [isAdding, setIsAdding] = useState(false);


    const handleAddClick = () => {
        setIsAdding(true);
    };


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

    if (!filteredList) {
        return null
    }
    return (
        <>
            <div className="admin_content">
            <h2>한정 특가 <span>- 차량 수정 및 삭제</span></h2>
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