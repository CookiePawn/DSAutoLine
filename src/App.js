import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

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
import PopupWindow from './components/PopupWindow'; // 팝업 컴포넌트 import

function App() {
	useEffect(() => {
		document.body.style.overflowX = 'hidden';
	}, [])

	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

	return (
		<Router>
			<div style={{position: 'relative'}}>

				{/* 광고 팝업 */}
				<PopupWindow />

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
