import React, { useState, useEffect } from "react";
import '../../styles/mobile/Mobile_Popup.css'
import { mentoringAxios, quickCounselingInsertAxios } from '../../services/Request'
import nonClick from '../../assets/img/functionIcon/optionPage_nonSelectBox.png'
import onClick from '../../assets/img/functionIcon/optionPage_SelectBox.png'
import { TermsofUse, TermsofInformation } from '../TermsScript'




export const Mobile_CarmentoPopup = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [isSelect1, setIsSelect1] = useState(false)
    const [isSelect2, setIsSelect2] = useState(false)

    const onClickYes = async () => {
        if (isSelect1 && isSelect2 && name !== '' && phone.length >= 10) {
            await mentoringAxios({
                mento: props.mento,
                name: name,
                phone: phone,
            })
            alert('상담 신청이 완료되었습니다')
            props.setPopup(null);
        }
    }
    const onClickNo = () => {
        props.setPopup(null);
    }


    return (
        <div className="mobile_popupDimmed">
            <div className="mobile_carmentoPopupDiv">
                <div>
                    <span>
                        <img src={require('../../assets/img/carmento/carmento1.jpg')} />
                    </span>
                    <span>
                        <h2>{props.mento}</h2>
                        <p>고객님들이 항상 만족하실 수 있도록 <br />최선을 다하겠습니다.</p>
                    </span>
                </div>
                <div>
                    <span>
                        <h4>이름</h4>
                        <input max={10} value={name} onChange={(e) => setName(e.target.value)} />
                    </span>
                    <span>
                        <h4>연락처</h4>
                        <input type="number" maxLength={11} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </span>
                    <span>
                        {!isSelect1 ? <img src={nonClick} onClick={() => setIsSelect1(!isSelect1)} /> : <img src={onClick} onClick={() => setIsSelect1(!isSelect1)} />}
                        <p>개인정보 수집 · 이용 · 제공 동의 <span onClick={() => props.setTerms(true)}>(보기)</span></p>
                    </span>
                    <span>
                        {!isSelect2 ? <img src={nonClick} onClick={() => setIsSelect2(!isSelect2)} /> : <img src={onClick} onClick={() => setIsSelect2(!isSelect2)} />}
                        <p>개인정보 제 3자 제공 동의 <span onClick={() => props.setTerms(true)}>(보기)</span></p>
                    </span>
                    <span>
                        <span onClick={onClickNo}>취소</span>
                        <span onClick={onClickYes}>상담 신청하기</span>
                    </span>
                </div>
            </div>
        </div>
    )
}


export const Mobile_TermsofUsePopup = (props) => {
    return (
        <div className="mobile_popupDimmed">
            <div className="mobile_termsPopupDiv">
                <span>
                    <TermsofUse />
                </span>
                <button onClick={() => props.setPopup(false)}>닫기</button>
            </div>
        </div>
    )
}

export const Mobile_TermsofInformationPopup = (props) => {
    return (
        <div className="mobile_popupDimmed">
            <div className="mobile_termsPopupDiv">
                <span>
                    <TermsofInformation />
                </span>
                <button onClick={() => props.setPopup(false)}>닫기</button>
            </div>
        </div>
    )
}


export const Mobile_QuickDealCardPopup = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    // 간편 문의 변수
    const [infoSelect1, setInfoSelect1] = useState(false);
    const [infoSelect2, setInfoSelect2] = useState(false);

    const [isUsePopupVisible, setIsUsePopupVisible] = useState(false);

    return (
        <div className='QuickDeal_Dimmed'>
            {isUsePopupVisible && <TermsofInformation onClose={setIsUsePopupVisible} />}
            <div className='QuickDeal_Section'>
                <div className='QuickDeal_Title'>
                    <h1>즉시 출고 문의</h1>
                </div>
                <div className='QuickDeal_line' />
                <div className='QuickDeal_info'>
                    <div className='QuickDeal_input'>
                        <p>이름</p>
                        <input
                            placeholder=''
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='QuickDeal_input'>
                        <p>연락처</p>
                        <input
                            placeholder=''
                            value={number}
                            type='number'
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className='QuickDeal_agree'>
                        <span style={{ marginTop: 16 }}>
                            {
                                !infoSelect1
                                    ? <img style={{ width: 23, height: 23 }} src={require('../../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                            }
                            <p>개인정보 수집·이용·제공 동의 <span onClick={() => { setIsUsePopupVisible(true); document.body.style.overflowY = 'hidden' }}>(보기)</span></p>
                        </span>

                    </div>
                    <div className='QuickDeal_agree'>
                        <span>
                            {
                                !infoSelect2
                                    ? <img style={{ width: 23, height: 23 }} src={require('../../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                            }
                            <p>개인정보 수집·이용·제공 동의 <span onClick={() => { setIsUsePopupVisible(true); document.body.style.overflowY = 'hidden' }}>(보기)</span></p>
                        </span>

                    </div>
                </div>
                <div className='QuickDeal_button_Section'>
                    <button
                        className='Quick_apply'
                        onClick={async () => {
                            if (name !== '' && number !== '' && infoSelect1 && infoSelect2) {
                                await quickCounselingInsertAxios({
                                    car_code: props.id,
                                    name: name,
                                    phone: number,
                                    type: "즉시 출고",
                                })
                                setName('')
                                setNumber('')
                                alert('상담 신청이 완료되었습니다')
                                props.setPopup(null)
                            }
                        }}
                    >
                        신청하기
                    </button>
                    <button className='Quick_close' onClick={() => { props.setPopup(null); document.body.style.overflowY = 'auto' }}>닫기</button>
                </div>
            </div>

        </div>
    );
}