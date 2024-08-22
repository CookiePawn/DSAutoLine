import React from "react";
import '../styles/Admin_Content.css'


const Admin_UserList = (props) => {
    return (
        <div className="admin_content">
            <h2>고객 리스트 <span>- 미완료 120건</span></h2>
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
            <div className="admin_content_UserListDiv">
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
                        <p>x</p>
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
                            <p>X</p>
                        </span>
                        <span>
                            <p>X</p>
                        </span>
                        <p>x</p>
                        <p>간편 상담</p>
                    </span>
                    <button>완료</button>
                    <button>삭제</button>
                </div>
                <div>
                    <span>
                        <p>안준철</p>
                        <p>01089152856</p>
                        <p>x</p>
                        <span>
                            <p>X</p>
                        </span>
                        <span>
                            <p>X</p>
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


export default Admin_UserList