import logo from './assets/logo.svg';
import './styles/App.css';
import GNB from './components/GNB'

function App() {
	return (
		<>
			<GNB />
			<div className="App">
				
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						DS AUTO LINE WEB DEV.
					</p>
					<a
						className="App-link"
						href="https://halved-writer-29b.notion.site/DS-AUTO-LINE-WEB-DEV-d7523b1774bc410fbccbb8243b2efcc4"
						target="_blank"
						rel="noopener noreferrer"
					>
						Notion
					</a>
				</header>
			</div>
			<div className='HotSection'>

			</div>
		</>

	);
}

export default App;
