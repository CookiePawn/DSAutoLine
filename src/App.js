import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EnterPage from './pages/EnterPage';
import QuickFAQPage from './pages/QuickFAQPage';
import HotDealPage from './pages/HotDealPage';
import QuickDealPage from './pages/QuickDealPage';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/Event" element={<EventPage />} />
					<Route path="/Enter" element={<EnterPage />} />
					<Route path='/QuickFAQ' element={<QuickFAQPage />} />
					<Route path='/HotDeal' element={<HotDealPage />} />
					<Route path='/QuickDeal' element={<QuickDealPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
 