import React, { useState, useEffect } from "react";
import { fastFAQAxios } from '../../services/Request'

const Mobile_MainPage_FastFAQ = (props) => {
    // 간편 문의 변수
    const [infoSelect1, setInfoSelect1] = useState(true);
    const [infoSelect2, setInfoSelect2] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [car, setCar] = useState('');

    const clickFunction = async () => {
        if (window.wcs) {
			if (!window.wcs_add) window.wcs_add = {};
			window.wcs_add['wa'] = 's_54bd969202cb';//우측 상담 신청하기(모바일)

			const _conv = {
				value: '100', // 원하는 전환 값
				type: 'lead', // 전환 타입 설정
			};
			window.wcs.trans(_conv);
			console.log('Naver conversion script executed');
		}

        if (infoSelect1 && infoSelect2 && name !== '' && phone !== '' && car !== '') {

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
            alert('상담 신청이 완료되었습니다')
            setCar('')
            setName('')
            setPhone('')
        } else {
            alert('내용이 입력되지 않았습니다')
        }
    };

    return (
        <section className="mobile_main_FastFAQSection">
            <h3>간편하게 문의해보세요</h3>
            <input placeholder="모델" value={car} onChange={(e) => setCar(e.target.value)} />
            <input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
            <input 
                placeholder='연락처("-" 없이 입력)' 
                type="text"
                inputmode="numeric" 
                pattern="[0-9]*"
                maxLength={11} 
                value={phone} 
                onChange={(e) => {
                    const onlyNums = e.target.value.replace(/[^0-9]/g, ''); // 숫자만 허용
                    setPhone(onlyNums.slice(0, 11)); // 최대 11자 제한
                }} 
            />
            <span>
                {
                    !infoSelect1
                        ? <img src={require('../../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                        : <img src={require('../../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect1(!infoSelect1)} />
                }
                <p>개인정보 제 3자 제공 동의 <span  onClick={() => props.setTerms(true)}>(보기)</span></p>
            </span>
            <span>
                {
                    !infoSelect2
                        ? <img src={require('../../assets/img/functionIcon/optionPage_nonSelectBox.png')} alt="Select Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                        : <img src={require('../../assets/img/functionIcon/optionPage_SelectBox.png')} alt="Selected Box" onClick={() => setInfoSelect2(!infoSelect2)} />
                }
                <p>개인정보 수집·이용·제공 동의 <span  onClick={() => props.setTerms(true)}>(보기)</span></p>
            </span>
            <div
                style={(infoSelect1 && infoSelect2 && name !== '' && phone !== '' && car !== '') ? null : { backgroundColor: '#dbdbdb', cursor: 'auto' }}
                onClick={clickFunction}
            >
                상담신청하기
            </div>
        </section>
    )
}

export default Mobile_MainPage_FastFAQ