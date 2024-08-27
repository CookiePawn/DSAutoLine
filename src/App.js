import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EventDetailPage from './pages/EventDetailPage';
import EnterPage from './pages/EnterPage';
import QuickFAQPage from './pages/QuickFAQPage';
import HotDealPage from './pages/HotDealPage';
import QuickDealPage from './pages/QuickDealPage';
import OptionPage from './pages/OptionPage';
import EstimatedPage from './pages/EstimatedPage'
import ReviewPage from './pages/ReviewPage';
import ReviewMorePage from './pages/ReviewMorePage';
import ReviewAddPage from './pages/ReviewAddPage';
import AdminPage from './pages/AdminPage';

function App() {
	useEffect(() => {
		const fetchData = async () => {
			document.body.style.overflowX = 'hidden';
		}
		fetchData()
	  }, [])

	  
	return (
		<Router>
			<div>
				<Routes>
					{/* 메인 페이지 */}
					<Route path="/" element={<MainPage />} />

					{/* 이벤트 페이지 */}
					<Route path="/Event" element={<EventPage />} />
					<Route path="/Event/:id" element={<EventDetailPage />} />

					{/* 회사소개 페이지 */}
					<Route path="/Enter" element={<EnterPage />} />

					{/* 빠른 간편 문의 페이지 */}
					<Route path='/QuickFAQ' element={<QuickFAQPage />} />

					{/* 한정 특가 페이지 */}
					<Route path='/HotDeal' element={<HotDealPage />} />

					{/* 즉시 출고 페이지 */}
					<Route path='/QuickDeal' element={<QuickDealPage />} />

					{/* 옵션 선택 페이지 */}
					<Route path='/Option/:id' element={<OptionPage />} />
					<Route path='/Estimated/:id' element={<EstimatedPage />} />

					{/* 리뷰 페이지 */}
					<Route path='/Review' element={<ReviewPage />} />
					<Route path='/ReviewMore/:id' element={<ReviewMorePage />} />
					<Route path='/ReviewAdd' element={<ReviewAddPage />} />

					{/* 관리자 페이지 */}
					<Route path='/Admin' element={<AdminPage />} />

				</Routes>
			</div>
		</Router>
	);
}

export default App;
