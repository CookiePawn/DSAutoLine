import React from "react";
import '../../styles/mobile/Mobile_Footer.css'


const Mobile_Footer = (props) => {
    return (
        <>
            <section className="mobile_footer_section">
                <div className="mobile_footer_useInfoDiv">
                    <span>
                        <p>이용약관</p>
                        <p>|</p>
                        <p>개인정보처리방침</p>
                    </span>
                </div>
                <div className="mobile_footer_infoDiv">
                    <p>(주) 디에스 오토라인</p>
                    <p>대표: 노주영     |     주소: 천안시 서북구 두정상가8길 62. 804호     |     대표번호: 1661-1310</p>
                    <p>통신판매업신고: 2024-충남천안-2107     |     사업자등록번호: 218-86-03131</p>
                    <p>COPYRIGHT @2024 DSAUTOLINE CO, LTD ALL RIGHTS RESERVED.</p>
                </div>
            </section>
        </>
    )
}


export default Mobile_Footer