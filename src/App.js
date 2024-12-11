import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//PC
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EventDetailPage from './pages/EventDetailPage';
import EnterPage from './pages/EnterPage';
import QuickFAQPage from './pages/QuickFAQPage';
import HotDealPage from './pages/HotDealPage';
import QuickDealPage from './pages/QuickDealPage';
import OptionPage from './pages/OptionPage';
import ReviewPage from './pages/ReviewPage';
import ReviewMorePage from './pages/ReviewMorePage';
import ReviewAddPage from './pages/ReviewAddPage';
import AdminPage from './pages/AdminPage';


//Mobile
import Mobile_MainPage from './pages/mobile/Mobile_MainPage';
import Mobile_HotDeal from './pages/mobile/Mobile_HotDeal';
import Mobile_Event from './pages/mobile/Mobile_Event';
import Mobile_EventMore from './pages/mobile/Mobile_EventMore';
import Mobile_Review from './pages/mobile/Mobile_Review';
import Mobile_ReviewAdd from './pages/mobile/Mobile_ReviewAdd';
import Mobile_ReviewMore from './pages/mobile/Mobile_ReviewMore';
import Mobile_QuickFAQ from './pages/mobile/Mobile_QuickFAQ';
import Mobile_QuickDeal from './pages/mobile/Mobile_QuickDeal';
import Mobile_Option from './pages/mobile/Mobile_Option'
import Mobile_Enter from './pages/mobile/Mobile_Enter';
import Mobile_Admin from './pages/mobile/Mobile_Admin';

function App() {
	useEffect(() => {
		document.body.style.overflowX = 'hidden';
	}, [])

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	// 팝업 상태 관리
	const [showPopup, setShowPopup] = useState(false);

	// 카카오톡 버튼 클릭 핸들러
	const handleKakaoButtonClick = () => {
		if (window.wcs) {
			if (!window.wcs_add) window.wcs_add = {};
			window.wcs_add['wa'] = 's_54bd969202cb';

			const _conv = {
				value: '100', // 원하는 전환 값
				type: 'lead', // 전환 타입 설정
			};
			window.wcs.trans(_conv);
			console.log('Naver conversion script executed');
		}
	};

	// 페이지 로드 시 팝업 표시 조건 확인
	useEffect(() => {
		const popupLastClosed = localStorage.getItem('popupLastClosed');
		const now = new Date().getTime();
		// 24시간(1일) 기준
		const oneDay = 24 * 60 * 60 * 1000;

		if (!popupLastClosed || now - popupLastClosed > oneDay) {
		setShowPopup(true); // 24시간이 지났으면 팝업 표시
		}
	}, []);

	// "하루 동안 보지 않기" 버튼 핸들러
	const handleHideForADay = () => {
		const now = new Date().getTime();
		localStorage.setItem('popupLastClosed', now); // 현재 시간을 저장
		setShowPopup(false); // 팝업 닫기
	};

	// "닫기" 버튼 핸들러
	const handleClosePopup = () => {
		setShowPopup(false); // 팝업 닫기
	};

	return (
		<Router>
			<div style={{position: 'relative'}}>

				{/* 광고 팝업 */}
				{showPopup && (
				<div className="popup">
					<a href="https://dsautoline.com/event/CgPiO452QGTbDersPhav" target="_blank" rel="noopener noreferrer">
						<img
						src={require('./assets/img/advertisement.png')} // 광고 이미지 경로
						alt="광고 팝업"						
						className="advertisement-img"
						/>
					</a>
					<div className="popup-button-container">
					<button className="popup-button" onClick={handleHideForADay}>
						하루 동안 보지 않기
					</button>
					<button className="popup-button" onClick={handleClosePopup}>
						닫기
					</button>
					</div>
				</div>
				)}

				<a
					id="chat-channel-button"
					href="https://pf.kakao.com/_NsEhn/chat"
					target="_blank"
					rel="noopener noreferrer"
					style={{
						position: 'fixed',
						bottom: 20,
						right: 20,
						zIndex: 2000,
					}}
					onClick={handleKakaoButtonClick} // 클릭 핸들러 추가
				>
					<img src={require('./assets/img/kakaotalk/consult_small_yellow_pc.png')} alt="카카오톡 채널 채팅하기 버튼" />
				</a>
				<Routes>
					{/* 메인 페이지 */}
					<Route path="/" element={isMobile ? <Mobile_MainPage /> : <MainPage />} />

					{/* 이벤트 페이지 */}
					<Route path="/Event" element={isMobile ? <Mobile_Event /> : <EventPage />} />
					<Route path="/Event/:id" element={isMobile ? <Mobile_EventMore /> : <EventDetailPage />} />

					{/* 회사소개 페이지 */}
					<Route path="/Enter" element={isMobile ? <Mobile_Enter /> : <EnterPage />} />

					{/* 빠른 간편 문의 페이지 */}
					<Route path='/QuickFAQ' element={isMobile ? <Mobile_QuickFAQ /> : <QuickFAQPage />} />

					{/* 한정 특가 페이지 */}
					<Route path='/HotDeal' element={isMobile ? <Mobile_HotDeal /> : <HotDealPage />} />

					{/* 즉시 출고 페이지 */}
					<Route path='/QuickDeal' element={isMobile ? <Mobile_QuickDeal /> : <QuickDealPage />} />

					{/* 옵션 선택 페이지 */}
					<Route path='/Option/:id' element={isMobile ? <Mobile_Option /> : <OptionPage />} />

					{/* 리뷰 페이지 */}
					<Route path='/Review' element={isMobile ? <Mobile_Review /> : <ReviewPage />} />
					<Route path='/ReviewMore/:id' element={isMobile ? <Mobile_ReviewMore /> : <ReviewMorePage />} />
					<Route path='/ReviewAdd' element={isMobile ? <Mobile_ReviewAdd /> : <ReviewAddPage />} />

					{/* 관리자 페이지 */}
					<Route path='/zyNQVJcTYyiNwS4or4oJ' element={isMobile ? <Mobile_Admin /> : <AdminPage />} />

				</Routes>
			</div>
		</Router>
	);
}

export default App;
