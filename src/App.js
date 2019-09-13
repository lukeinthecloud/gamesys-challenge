import React         from 'react';
import './App.css';
import OptIn         from './containers/OptIn';
import { getConfig } from './core/services/communication/communicaton.service';

function App() {
	intitialize();

	async function intitialize() {
		let data = await getConfig('http://localhost:3000/config.json');
	}

	return (
		<div className="App">
			<OptIn/>
		</div>
	);
}

export default App;
