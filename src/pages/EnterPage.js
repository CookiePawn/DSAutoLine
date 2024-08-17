import React, { useEffect } from 'react';
import GNB from "../components/GNB";
import Footer from "../components/Footer";
import '../styles/EnterPage.css';
import DSAutoLine from '../assets/img/dsautoline/DSAUTOLINE.png';

const EnterPage = () => {

    useEffect(() => {
        const mapAPI = process.env.REACT_APP_MAP_API;

        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${mapAPI}&autoload=false`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(36.83187125070437, 127.14499934927386),
                        level: 1
                    };
                    const map = new window.kakao.maps.Map(container, options);
                    const markerPosition = new window.kakao.maps.LatLng(36.831875766482334, 127.14499095041695);
                    const marker = new window.kakao.maps.Marker({
                        position: markerPosition
                    });
                    marker.setMap(map);
                    
                });
            }
        };

    }, []);

    return (
        <div>
            <GNB stat={true} page={'회사소개'} />
            <div className="EnterbannerSection">
                <h1>고객님의 <span className="Point">‘마음’</span>을 움직입니다.</h1>
                <p>저희 DS 오토라인은 신뢰와 믿음을 바탕으로 고객님의 마음을 움직이겠습니다.</p>
            </div>
            <div className="EnterTitleSection">
                <img src={DSAutoLine} className="titlelogo" alt="이미지 로딩이 실패하였습니다" />
                <p>렌트/리스 분야에서 여러 경험과 노하우, 신뢰와 믿음을 바탕으로 고객님들의 마음을 움직이는</p>
                <p>컨설팅을 진행해 드리는 자동차 금융서비스 전문 기업입니다.</p>
                <p>다양한 파트너 사와 직, 간접적인 업무 진행을 통해 유통 마진을 줄이고 고객 최우선적 1대1 심</p>
                <p>층상담을 통해 보다 합리적이고 어디에서 쉽게 볼 수 없는 견적서를 드리겠습니다.</p>
            </div>
            <div className="advantageSection">
                <div className="advantage-column">
                    <h1>장기렌트 장점</h1>
                    <ul className="listsytle">
                        <li>1. 낮은 초기비용 or 유지비용</li>
                        <li>2. 유지 관리의 편리</li>
                        <li>3. 개인 사업자 or 법인 사업자 비용처리 가능</li>
                        <li>4. 신용도에 영향 없음</li>
                    </ul>
                </div>
                <div className="advantage-column">
                    <h1>리스 장점</h1>
                    <ul className="listsytle">
                        <li>1. 낮은 초기비용</li>
                        <li>2. 건강보험료, 재산세 할증 부담 없음</li>
                        <li>3. 개인 사업자 or 법인 사업자 비용처리 가능</li>
                        <li>4. 보험경력 유지</li>
                    </ul>
                </div>
            </div>
            <div className="processSection">
                <h1>계약진행절차</h1>
                <div className="circleSection">
                    <div className="circle">리스/렌트 상담</div>
                    <div className="line"></div>
                    <div className="circle">견적서 발송</div>
                    <div className="line"></div>
                    <div className="circle">필요서류 준비</div>
                    <div className="line"></div>
                    <div className="circle">심사 및 승인</div>
                </div>
                <div className="circleSection">
                    <div className="circle">계약 완료</div>
                    <div className="line"></div>
                    <div className="circle">차량 출고</div>
                    <div className="line"></div>
                    <div className="circle">사후관리</div>
                </div>
            </div>
            <div className="GuideSection">
                <h1>DS오토라인 오시는 길</h1>
                <div className='GuideMapSection'>
                    <div id="map"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EnterPage;
