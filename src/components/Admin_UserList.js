import React, { useState } from "react";
import '../styles/Admin_Content.css'



export const Admin_UserCompletedList = (props) => {
    const [userStat, setUserStat] = useState(0)

    return (
        <div className="admin_content">
            <h2>고객 리스트 <span>- 완료 120건</span></h2>
            <span className="admin_content_eventStat_buttonDiv">
                <button className={userStat === 0 && 'selected'} onClick={() => setUserStat(0)}>전체</button>
                <button className={userStat === 1 && 'selected'} onClick={() => setUserStat(1)}>즉시 출고</button>
                <button className={userStat === 2 && 'selected'} onClick={() => setUserStat(2)}>빠른 간편 문의 / 한정 특가</button>
                <button className={userStat === 3 && 'selected'} onClick={() => setUserStat(3)}>간편 상담</button>
                <button className={userStat === 4 && 'selected'} onClick={() => setUserStat(4)}>우수 카멘토</button>
            </span>
            <div className="header-row">
                {/* <input type="checkbox" /> */}
                <span className="admin_content_UserListTitleSpan">
                    <p>이름</p>
                    <p>연락처</p>
                    <p>차종</p>
                    <p>옵션</p>
                    <p>이용조건</p>
                    <p>담당 카멘토</p>
                    <p>신청 방법</p>
                </span>
            </div>
            <div className="admin_content_UserAllListDiv">
                <div>
                    <span>
                        <p>안준철</p>
                        <p>01089152856</p>
                        <p>기아 K5</p>
                        <span>
                            <p>세레니티 화이트</p>
                            <p>2024년형 전기 (롱레인지) 가격인하</p>
                        </span>
                        <span>
                            <p>장기렌트</p>
                            <p>36개월</p>
                            <p>없음</p>
                            <p>0원</p>
                            <p>없음</p>
                            <p>만 21세 이상</p>
                            <p>연 1만km</p>
                        </span>
                        <p>-</p>
                        <p>즉시 출고</p>
                    </span>
                    <button>완료</button>
                    <button>삭제</button>
                </div>
                <div>
                    <span>
                        <p>안준철</p>
                        <p>01089152856</p>
                        <p>기아 K5</p>
                        <span>
                            <p>-</p>
                        </span>
                        <span>
                            <p>-</p>
                        </span>
                        <p>-</p>
                        <p>간편 상담</p>
                    </span>
                    <button>완료</button>
                    <button>삭제</button>
                </div>
                <div>
                    <span>
                        <p>안준철</p>
                        <p>01089152856</p>
                        <p>-</p>
                        <span>
                            <p>-</p>
                        </span>
                        <span>
                            <p>-</p>
                        </span>
                        <p>김태경 팀장</p>
                        <p>우수 카멘토</p>
                    </span>
                    <button>완료</button>
                    <button>삭제</button>
                </div>
            </div>
        </div>
    )
}





export const Admin_UserIncompleteList = (props) => {
    const [userStat, setUserStat] = useState(0)

    return (
        <div className="admin_content">
            <h2>고객 리스트 <span>- 미완료 120건</span></h2>
            <span className="admin_content_eventStat_buttonDiv">
                <button className={userStat === 0 && 'selected'} onClick={() => setUserStat(0)}>전체</button>
                <button className={userStat === 1 && 'selected'} onClick={() => setUserStat(1)}>즉시 출고</button>
                <button className={userStat === 2 && 'selected'} onClick={() => setUserStat(2)}>빠른 간편 문의 / 한정 특가</button>
                <button className={userStat === 3 && 'selected'} onClick={() => setUserStat(3)}>간편 상담</button>
                <button className={userStat === 4 && 'selected'} onClick={() => setUserStat(4)}>우수 카멘토</button>
            </span>
            <div className="header-row">
                {/* <input type="checkbox" /> */}
                <span className="admin_content_UserListTitleSpan">
                    <p>이름</p>
                    <p>연락처</p>
                    <p>차종</p>
                    <p>옵션</p>
                    <p>이용조건</p>
                    <p>담당 카멘토</p>
                    <p>신청 방법</p>
                </span>
            </div>
            <div className="admin_content_UserAllListDiv">
                <div>
                    <span>
                        <p>안준철</p>
                        <p>01089152856</p>
                        <p>기아 K5</p>
                        <span>
                            <p>세레니티 화이트</p>
                            <p>2024년형 전기 (롱레인지) 가격인하</p>
                        </span>
                        <span>
                            <p>장기렌트</p>
                            <p>36개월</p>
                            <p>없음</p>
                            <p>0원</p>
                            <p>없음</p>
                            <p>만 21세 이상</p>
                            <p>연 1만km</p>
                        </span>
                        <p>-</p>
                        <p>즉시 출고</p>
                    </span>
                    <button>완료</button>
                    <button>삭제</button>
                </div>
                <div>
                    <span>
                        <p>안준철</p>
                        <p>01089152856</p>
                        <p>기아 K5</p>
                        <span>
                            <p>-</p>
                        </span>
                        <span>
                            <p>-</p>
                        </span>
                        <p>-</p>
                        <p>간편 상담</p>
                    </span>
                    <button>완료</button>
                    <button>삭제</button>
                </div>
                <div>
                    <span>
                        <p>안준철</p>
                        <p>01089152856</p>
                        <p>-</p>
                        <span>
                            <p>-</p>
                        </span>
                        <span>
                            <p>-</p>
                        </span>
                        <p>김태경 팀장</p>
                        <p>우수 카멘토</p>
                    </span>
                    <button>완료</button>
                    <button>삭제</button>
                </div>
            </div>
        </div>
    )
}