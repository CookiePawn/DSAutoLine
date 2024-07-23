import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import GNB from './components/GNB';
import MainPage from './pages/MainPage';
import EventPage from './pages/EventPage';
import EnterPage from './pages/EnterPage';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/Event" element={<EventPage />} />
					<Route path="/Enter" element={<EnterPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
 