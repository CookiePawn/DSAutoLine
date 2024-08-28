import '../styles/Footer.css'
import dsautoline_white from '../assets/img/dsautoline/dsautoline_white.png'
import { TermsofInformationPopup, TermsofUsePopUp } from '../components/PopUp';
import React, { useState } from 'react';



/**
 * Footer
 * @param {*} props 
 * @returns 
 */
const Footer = (props) => {
    const [isUsePopupVisible, setIsUsePopupVisible] = useState(false);

    const handleOpenUsePopup = () => {
        setIsUsePopupVisible(true);
    };

    const handleCloseUsePopup = () => {
        setIsUsePopupVisible(false);
    };

    return (
        <footer className='footerSection'>
            <div>
                <span>
                    <p onClick={handleOpenUsePopup}>이용약관</p>
                    {isUsePopupVisible && <TermsofUsePopUp onClose={handleCloseUsePopup} />}
                    <span></span>
                    <p onClick={handleOpenUsePopup}>개인정보처리방침</p>
                    {isUsePopupVisible && <TermsofInformationPopup onClose={handleCloseUsePopup} />}
                </span>
            </div>
            <div>
                <span>
                    <img src={dsautoline_white}/>
                    <span>
                        <h3>(주) 디에스오토라인</h3>
                        <p>대표: 노주영     |     주소: 천안시 서북구 두정상가8길 62. 804호     |     대표번호: 1661-1310</p>
                        <p>통신판매업신고: 2024-충남천안-2107     |     사업자등록번호: 218-86-03131</p>
                    </span>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </span>
            </div>
            <div>
                <p>COPYRIGHT @2024 DSAUTOLINE CO, LTD ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    )
}

export default Footer