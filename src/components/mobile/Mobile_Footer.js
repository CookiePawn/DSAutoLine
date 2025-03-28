import React, { useState } from "react";
import '../../styles/mobile/Mobile_Footer.css'
import { Mobile_TermsofUsePopup, Mobile_TermsofInformationPopup } from "./Mobile_Popup";
import NaverScript from '../../components/NaverScript'; // NaverScript import


const Mobile_Footer = (props) => {
    const [termsUsePopup, setTermsUsePopup] = useState(false)
    const [termsInfoPopup, setTermsInfoPopup] = useState(false)

    return (
        <>
            {termsUsePopup && <Mobile_TermsofUsePopup setPopup={setTermsUsePopup}/>}
            {termsInfoPopup && <Mobile_TermsofInformationPopup setPopup={setTermsInfoPopup}/>}
            {/* 네이버 스크립트 */}
            {/* <NaverScript /> */}
            <section className="mobile_footer_section">
                <div className="mobile_footer_useInfoDiv">
                    <span>
                        <p onClick={() => setTermsUsePopup(true)}>이용약관</p>
                        <p>|</p>
                        <p onClick={() => setTermsInfoPopup(true)}>개인정보처리방침</p>
                    </span>
                </div>
                <div className="mobile_footer_infoDiv">
                    <p>(주) 디에스 오토라인</p>
                    <p>대표: 노주영     |     주소: 충청남도 천안시 서북구 봉정로 321, 206호     |     대표번호: 1661-1310</p>
                    <p>통신판매업신고: 2024-충남천안-2107     |     사업자등록번호: 218-86-03131</p>
                    <p>COPYRIGHT @2024 DSAUTOLINE CO, LTD ALL RIGHTS RESERVED.</p>
                </div>
            </section>
        </>
    )
}


export default Mobile_Footer