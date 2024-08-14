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
import ReviewPage from './pages/ReviewPage';
import ReviewMorePage from './pages/ReviewMorePage';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/Event" element={<EventPage />} />
					<Route path="/Event/:id" element={<EventDetailPage />} />
					<Route path="/Enter" element={<EnterPage />} />
					<Route path='/QuickFAQ' element={<QuickFAQPage />} />
					<Route path='/HotDeal' element={<HotDealPage />} />
					<Route path='/QuickDeal' element={<QuickDealPage />} />
					<Route path='/Option' element={<OptionPage />} />
					<Route path='/Review' element={<ReviewPage />} />
					<Route path='/ReviewMore' element={<ReviewMorePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
