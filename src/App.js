import React         from 'react';
import './App.css';
import { getConfig } from './core/services/communication/communicaton.service';

function App() {
	intitialize();

	async function intitialize() {
		let data = await getConfig('http://localhost:3000/config.json');
	}

	return (
		<div className="App">

		</div>
	);
}

export default App;
