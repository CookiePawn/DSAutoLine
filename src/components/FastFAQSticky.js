import React, { useState, useEffect } from 'react';
import '../styles/FastFAQSticky.css';
import { OptionPagePopUp, TermsofInformationPopup } from '../components/PopUp';
import { fastFAQAxios } from '../services/Request';

const FastFAQSticky = (props) => {
    // 간편 문의 변수
    const [infoSelect1, setInfoSelect1] = useState(false);
    const [infoSelect2, setInfoSelect2] = useState(false);

    // insert
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [car, setCar] = useState('');

    const [load, setLoad] = useState(0);
    const [nextStat, setNextStat] = useState(false);

    const [isUsePopupVisible, setIsUsePopupVisible] = useState(false);
    const [isInformationPopupVisible, setIsInformationPopupVisible] = useState(false);


    const handleOpenInformationPopup = () => {
        setIsInformationPopupVisible(true);
    };

    const handleCloseInformationPopup = () => {
        setIsInformationPopupVisible(false);
    };

    useEffect(() => {
        // 페이지 높이를 업데이트하는 함수
        const updateHeight = () => {
            setLoad(document.documentElement.scrollHeight);
        };

        // 처음 렌더링 시 높이 업데이트
        updateHeight();

        // MutationObserver 설정
        const observer = new MutationObserver(updateHeight);

        // body에 대해 감지할 요소와 설정
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
        });

        // 컴포넌트 언마운트 시 옵저버를 해제
        return () => {
            observer.disconnect();
        };
    }, []); // 빈 배열로 한번만 실행

    const clickFunction = async () => {
        if (infoSelect1 && infoSelect2 && name !== '' && phone !== '' && car !== '') {
            await fastFAQAxios({
                name: name,
                phone: phone,
                car_name: car,
            });
            setNextStat(true);
            document.body.style.overflow = 'hidden';
        }
    };

    return (
        <section className="mainPage_QuickFAQSection">
            {nextStat && <OptionPagePopUp />}
            <span>
                <span style={load !== 0 ? { height: document.body.clientHeight - props.height } : null}>
                    <div>
                        <span style={{ marginTop: 23, marginBottom: 25 }}>
                            <img src={require('../assets/img/popup/quickFAQIcon.png')} alt="Quick FAQ Icon" />
                            <h3>간편하게 문의해보세요</h3>
                        </span>
                        <span>
                            <h4>이름</h4>
                            <input value={name} onChange={(e) => setName(e.target.value)} />
                        </span>
                        <span>
                            <h4>연락처</h4>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={11} />
                        </span>
                        <span>
                            <h4>차종</h4>
                            <input value={car} onChange={(e) => setCar(e.target.value)} />
                        </span>
                        <span>
                            {
                                !infoSelect1
                                    ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                            }
                            <p>개인정보 수집·이용·제공 동의 <span onClick={() => {setIsUsePopupVisible(true); document.body.style.overflowY='hidden'}}>(보기)</span></p>
                            {isUsePopupVisible && <TermsofInformationPopup onClose={setIsUsePopupVisible} />}
                        </span>
                        <span style={{ marginTop: 16 }}>
                            {
                                !infoSelect2
                                    ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                            }
                            <p>개인정보 수집·이용·제공 동의 <span onClick={() => {setIsUsePopupVisible(true); document.body.style.overflowY='hidden'}}>(보기)</span></p>
                            {isInformationPopupVisible && <TermsofInformationPopup onClose={setIsUsePopupVisible} />}
                        </span>
                        <div
                            style={(infoSelect1 && infoSelect2 && name !== '' && phone !== '' && car !== '') ? null : { backgroundColor: '#dbdbdb', cursor: 'auto' }}
                            onClick={clickFunction}
                        >
                            상담신청하기
                        </div>
                    </div>
                </span>
            </span>
        </section>
    );
};

export default FastFAQSticky;
