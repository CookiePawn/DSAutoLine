import React, { useState, useEffect } from 'react';
import '../styles/FastFAQSticky.css';
import { TermsofInformationPopup } from '../components/PopUp';
import { fastFAQAxios } from '../services/Request';

const FastFAQSticky = (props) => {
    // 간편 문의 변수
    const [infoSelect1, setInfoSelect1] = useState(true);
    const [infoSelect2, setInfoSelect2] = useState(true);

    // insert
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [car, setCar] = useState('');

    const [load, setLoad] = useState(0);

    const [isUsePopupVisible, setIsUsePopupVisible] = useState(false);


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
            try {

                const namePattern = /^[가-힣]{2,}$/; // 한글 2자 이상
                const phonePattern = /^010\d{8}$/; // '010'으로 시작하고 총 11자리
                const isRepeatingNumbers = (number) => {
                    // 동일한 숫자가 8자리 반복되는 경우
                    return /^(\d)\1{7}$/.test(number);
                };

                if (name.trim() === '') {
                    alert('이름을 입력해주세요.');
                    return;
                }

                if (!namePattern.test(name.trim())) {
                    alert('이름은 한글 2자 이상으로 입력해주세요.');
                    return;
                }

                if (phone.trim() === '') {
                    alert('전화번호를 입력해주세요.');
                    return;
                }

                if (!phonePattern.test(phone.trim())) {
                    alert('전화번호는 "010"으로 시작하며 총 11자리여야 합니다.');
                    return;
                }

                if (isRepeatingNumbers(phone.trim().slice(3))) {
                    alert('전화번호는 동일한 숫자를 반복할 수 없습니다.');
                    return;
                }

                await fastFAQAxios({
                    name: name,
                    phone: phone,
                    car_name: car,
                });
    
                if (window.wcs) {
                    if (!window.wcs_add) window.wcs_add = {};
                    window.wcs_add['wa'] = 's_54bd969202cb'; // 우측 상담 신청하기(웹)
    
                    const _conv = {
                        value: '100', // 원하는 전환 값
                        type: 'lead', // 전환 타입 설정
                    };
                    window.wcs.trans(_conv);
                    console.log('Naver conversion script executed');
                }

                // Google Ads conversion script
                if (typeof window.gtag === 'function') {
                    window.gtag('event', 'conversion', {
                        'send_to': 'AW-16793145665/JOZVCIm3-IUaEMGizMc-',
                        'value': 1.0,
                        'currency': 'KRW',
                    });
                    console.log('Google Ads conversion script executed');
                } else {
                    console.warn('Google Ads gtag function is not available');
                }
    
                alert('상담 신청이 완료되었습니다.');
                setCar('');
                setName('');
                setPhone('');
            } catch (error) {
                console.error('Data submission failed:', error);
                alert('서버에 문제가 발생했습니다. 다시 시도해주세요.');
            }
        } else {
            alert('내용이 입력되지 않았습니다.');
        }
    };
    

    return (
        <section className="mainPage_QuickFAQSection">
            {isUsePopupVisible && <TermsofInformationPopup onClose={setIsUsePopupVisible} />}
            <span>
                <span style={load !== 0 ? { height: document.body.clientHeight - props.height } : null}>
                    <div>
                        <img src={require('../assets/img/dsautoline/DSAUTOLINE.png')} alt="Quick FAQ Icon" />
                        <h1>간편 견적서 상담</h1>
                        <h3>빠르고 간편하게 견적서을 확인해보세요.</h3>
                        <div>
                            <h4>모델</h4>
                            <input value={car} onChange={(e) => setCar(e.target.value)} placeholder='ex) 현대 디 올 뉴 그랜저'/>
                        </div>
                        <div>
                            <h4>이름</h4>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='ex) 홍길동'/>
                        </div>
                        <div>
                            <h4>연락처</h4>
                            <input 
                                value={phone}                                 
                                maxLength={11} 
                                placeholder='ex) 01012345678'
                                type="text"
                                onChange={(e) => {
                                    const onlyNums = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 허용
                                    setPhone(onlyNums.slice(0, 11)); // 최대 11자 제한
                                }}
                            />
                        </div>
                        <span>
                            {
                                !infoSelect1
                                    ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                            }
                            <p><span>(필수)</span> 개인정보 제 3자 제공 동의 <span onClick={() => { setIsUsePopupVisible(true); document.body.style.overflowY = 'hidden' }}>[보기]</span></p>
                        </span>
                        <span>
                            {
                                !infoSelect2
                                    ? <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                                    : <img style={{ width: 23, height: 23 }} src={require('../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                            }
                            <p><span>(필수)</span> 개인정보 수집ㆍ이용ㆍ제공 동의 <span onClick={() => { setIsUsePopupVisible(true); document.body.style.overflowY = 'hidden' }}>[보기]</span></p>
                        </span>
                        <button
                            onClick={clickFunction}
                        >
                            상담신청하기
                        </button>
                        <img src={require('../assets/img/dsautoline/phone_001.png')} onClick={clickFunction}/>
                    </div>
                </span>
            </span>
        </section>
    );
};

export default FastFAQSticky;
