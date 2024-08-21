import React, { useState } from 'react';
import '../styles/Admin_Content.css';
import ev6 from '../assets/img/car/EV6.png';

function Admin_Hotdeal({ action }) {
    const [isAdding, setIsAdding] = useState(false);
    const [carList, setCarList] = useState([
        { id: 1, name: '차 1', date: '2023.11', size: '중형', fuel: 'LPG, 가솔린, 가솔린+전기', cc: '1,598~1,999CC', mileage: '복합연비 9.5~19.8km/L', money: '3,256만원' },
        { id: 2, name: '차 2', date: '2023.11', size: '중형', fuel: 'LPG, 가솔린, 가솔린+전기', cc: '1,598~1,999CC', mileage: '복합연비 9.5~19.8km/L', money: '3,256만원' },
        { id: 3, name: '차 3', date: '2023.11', size: '중형', fuel: 'LPG, 가솔린, 가솔린+전기', cc: '1,598~1,999CC', mileage: '복합연비 9.5~19.8km/L', money: '3,256만원' },
    ]);
    const [editingCar, setEditingCar] = useState(null);
    const [newCar, setNewCar] = useState({
        id: null,
        name: '',
        date: '',
        size: '',
        fuel: '',
        cc: '',
        mileage: '',
        money: ''
    });

    const handleAddClick = () => {
        setIsAdding(true);
    };

    const handleSaveNewCar = () => {
        setCarList([...carList, { ...newCar, id: carList.length + 1 }]);
        setNewCar({
            id: null,
            name: '',
            date: '',
            size: '',
            fuel: '',
            cc: '',
            mileage: '',
            money: ''
        });
        setIsAdding(false);
    };

    const handleEditClick = (car) => {
        setEditingCar(car);
    };

    const handleDeleteClick = (carId) => {
        setCarList(carList.filter(car => car.id !== carId));
    };

    const handleSaveClick = () => {
        setCarList(carList.map(car => (car.id === editingCar.id ? editingCar : car)));
        setEditingCar(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editingCar) {
            setEditingCar({ ...editingCar, [name]: value });
        } else {
            setNewCar({ ...newCar, [name]: value });
        }
    };

    return (
        <div className="admin_content">
            {action === 'editDelete' && (
                <>
                    <h2>한정 특가 <span>- 차량 수정 및 삭제</span></h2>
                    <div className="header-row">
                        {/* <input type="checkbox" /> */}
                    </div>
                    <div className="admin_content_HotdealList">
                        {carList.map((car) => (
                            <div className="admin_content_HotdealItem" key={car.id}>
                                {/* <input type="checkbox" className="admin_content_hotdeal-checkbox" /> */}
                                <img src={ev6} alt="Car" className="admin_content_hotdeal-image" />
                                <div className="admin_content_hotdeal-info">
                                    {editingCar && editingCar.id === car.id ? (
                                        <div className="admin_content_edit_form">
                                            <div className='admin_content_edit_text_form'>
                                                <p>차 이름</p>
                                                <input type="text" name="name" value={editingCar.name} onChange={handleInputChange} />
                                            </div>
                                            <div className='admin_content_edit_text_form'>
                                                <p>출시일</p>
                                                <input type="text" name="date" value={editingCar.date} onChange={handleInputChange} />
                                            </div>
                                            <div className='admin_content_edit_text_form'>
                                                <p>사이즈</p>
                                                <input type="text" name="size" value={editingCar.size} onChange={handleInputChange} />
                                            </div>
                                            <div className='admin_content_edit_text_form'>
                                                <p>연료 종류</p>
                                                <input type="text" name="fuel" value={editingCar.fuel} onChange={handleInputChange} />
                                            </div>
                                            <div className='admin_content_edit_text_form'>
                                                <p>출력</p>
                                                <input type="text" name="cc" value={editingCar.cc} onChange={handleInputChange} />
                                            </div>
                                            <div className='admin_content_edit_text_form'>
                                                <p>연비</p>
                                                <input type="text" name="mileage" value={editingCar.mileage} onChange={handleInputChange} />
                                            </div>
                                            <div className='admin_content_edit_text_form'>
                                                <p>가격</p>
                                                <input type="text" name="money" value={editingCar.money} onChange={handleInputChange} />
                                            </div>
                                            <button className="admin_content_save_button" onClick={handleSaveClick}>저장</button>
                                        </div>
                                    ) : (
                                        <>
                                            <h1>{car.name}</h1>
                                            <div className='admin_content_hodeal_infosub'>
                                                <p>{car.date}</p>
                                                <div className='admin_content_hodeal_line'/>
                                                <p>{car.size}</p>
                                                <div className='admin_content_hodeal_line'/>
                                                <p>{car.fuel}</p>
                                            </div>
                                            <div className='admin_content_hodeal_infosub'>
                                                <p>{car.cc}</p>
                                                <div className='admin_content_hodeal_line'/>
                                                <p>{car.mileage}</p>
                                                <div className='admin_content_hodeal_line'/>
                                                <p>{car.money}</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="admin_content_hotdeal-buttons">
                                    <button className="admin_content_edit-button" onClick={() => handleEditClick(car)}>수정</button>
                                    <button className="admin_content_delete-button" onClick={() => handleDeleteClick(car.id)}>삭제</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {action === 'add' && (
                <>
                    <h2>한정 특가 <span>- 차량 추가</span></h2>
                    <div className="header-row">
                        {/* <input type="checkbox" /> */}
                    </div>
                    <div className="admin_content_HotdealList">
                        {carList.map((car) => (
                            <div className="admin_content_HotdealItem" key={car.id}>
                                {/* <input type="checkbox" className="admin_content_hotdeal-checkbox" /> */}
                                <img src={ev6} alt="Car" className="admin_content_hotdeal-image" />
                                <div className="admin_content_hotdeal-info">
                                    <h1>{car.name}</h1>
                                    <div className='admin_content_hodeal_infosub'>
                                        <p>{car.date}</p>
                                        <div className='admin_content_hodeal_line'/>
                                        <p>{car.size}</p>
                                        <div className='admin_content_hodeal_line'/>
                                        <p>{car.fuel}</p>
                                    </div>
                                    <div className='admin_content_hodeal_infosub'>
                                        <p>{car.cc}</p>
                                        <div className='admin_content_hodeal_line'/>
                                        <p>{car.mileage}</p>
                                        <div className='admin_content_hodeal_line'/>
                                        <p>{car.money}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isAdding && (
                            <div className="admin_content_edit_form">
                                <div className='admin_content_edit_text_form'>
                                    <p>차 이름</p>
                                    <input type="text" name="name" value={newCar.name} onChange={handleInputChange} />
                                </div>
                                <div className='admin_content_edit_text_form'>
                                    <p>출시일</p>
                                    <input type="text" name="date" value={newCar.date} onChange={handleInputChange} />
                                </div>
                                <div className='admin_content_edit_text_form'>
                                    <p>사이즈</p>
                                    <input type="text" name="size" value={newCar.size} onChange={handleInputChange} />
                                </div>
                                <div className='admin_content_edit_text_form'>
                                    <p>연료 종류</p>
                                    <input type="text" name="fuel" value={newCar.fuel} onChange={handleInputChange} />
                                </div>
                                <div className='admin_content_edit_text_form'>
                                    <p>출력</p>
                                    <input type="text" name="cc" value={newCar.cc} onChange={handleInputChange} />
                                </div>
                                <div className='admin_content_edit_text_form'>
                                    <p>연비</p>
                                    <input type="text" name="mileage" value={newCar.mileage} onChange={handleInputChange} />
                                </div>
                                <div className='admin_content_edit_text_form'>
                                    <p>가격</p>
                                    <input type="text" name="money" value={newCar.money} onChange={handleInputChange} />
                                </div>
                                <button className="admin_content_save_button" onClick={handleSaveNewCar}>저장</button>
                            </div>
                        )}
                        {!isAdding && (
                            <button className="admin_content_add-button" onClick={handleAddClick}>추가</button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default Admin_Hotdeal;
