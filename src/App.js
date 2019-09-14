import React         from 'react';
import './styles/App.css';
import Home          from './containers/home/Home';
import dotenv        from 'dotenv';

function App() {
	dotenv.config();
	return (
		<Home/>
	);
}

export default App;
