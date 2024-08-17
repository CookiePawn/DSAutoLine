import React, { useState } from 'react';
import '../styles/Admin_Sidebar.css'
import { UpIcon, DownIcon } from '../components/Icons'

function Sidebar() {
    const [categoryStat, setCategoryStat] = useState(null)

    return (
        <div className="admin_Sidebar_sidebar">
            <div className="menu">
                <span onClick={() => setCategoryStat(categoryStat === 0 ? null : 0)}>
                    <p>빠른 간편 문의</p>
                    <span>
                        {categoryStat === 0
                            ? <UpIcon size={20} color={'#bbb'} />
                            : <DownIcon size={20} color={'#bbb'} />
                        }
                    </span>
                </span>
                {categoryStat === 0 &&
                    <div className='admin_Sidebar_categoryDiv'>
                        <p>차량 추가</p>
                        <p>차량 수정 및 삭제</p>
                    </div>
                }
                <span onClick={() => setCategoryStat(categoryStat === 1 ? null : 1)}>
                    <p>한정 특가</p>
                    <span>
                        {categoryStat === 1
                            ? <UpIcon size={20} color={'#bbb'} />
                            : <DownIcon size={20} color={'#bbb'} />
                        }
                    </span>
                </span>
                {categoryStat === 1 &&
                    <div className='admin_Sidebar_categoryDiv'>
                        <p>차량 추가</p>
                        <p>차량 수정 및 삭제</p>
                    </div>
                }
                <span onClick={() => setCategoryStat(categoryStat === 2 ? null : 2)}>
                    <p>즉시 출고</p>
                    <span>
                        {categoryStat === 2
                            ? <UpIcon size={20} color={'#bbb'} />
                            : <DownIcon size={20} color={'#bbb'} />
                        }
                    </span>
                </span>
                {categoryStat === 2 &&
                    <div className='admin_Sidebar_categoryDiv'>
                        <p>차량 추가</p>
                        <p>차량 수정 및 삭제</p>
                    </div>
                }
                <span onClick={() => setCategoryStat(categoryStat === 3 ? null : 3)}>
                    <p>고객 리스트</p>
                    <span>
                        {categoryStat === 3
                            ? <UpIcon size={20} color={'#bbb'} />
                            : <DownIcon size={20} color={'#bbb'} />
                        }
                    </span>
                </span>
                <span onClick={() => setCategoryStat(categoryStat === 4 ? null : 4)}>
                    <p>이벤트</p>
                    <span>
                        {categoryStat === 4
                            ? <UpIcon size={20} color={'#bbb'} />
                            : <DownIcon size={20} color={'#bbb'} />
                        }
                    </span>
                </span>
                {categoryStat === 4 &&
                    <div className='admin_Sidebar_categoryDiv'>
                        <p>이벤트 추가</p>
                        <p>이벤트 수정 및 삭제</p>
                    </div>
                }
                <span onClick={() => setCategoryStat(categoryStat === 5 ? null : 5)}>
                    <p>리뷰</p>
                    <span>
                        {categoryStat === 5
                            ? <UpIcon size={20} color={'#bbb'} />
                            : <DownIcon size={20} color={'#bbb'} />
                        }
                    </span>
                </span>
                {categoryStat === 5 &&
                    <div className='admin_Sidebar_categoryDiv'>
                        <p>리뷰 승인</p>
                        <p>리뷰 수정 및 삭제</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default Sidebar;