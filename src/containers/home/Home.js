import React, { useEffect, useState, useCallback } from 'react';
import CountDownTimer                              from '../../components/count-down-timer/CountDownTimer';
import { getConfig }                               from '../../core/services/config/config.service';
import { HomeContainerStyled }                     from './Home.styles';

export default function Home() {
	const [config, setConfig] = useState(null);

	const configCall = useCallback(async () => {
		const countDownConfig = await getConfig(process.env.REACT_APP_CONFIG);
		setConfig(countDownConfig);
	}, []);

	useEffect(() => {
		configCall();
	}, [configCall]);

	return (
		<HomeContainerStyled>
			<CountDownTimer config={config}/>
		</HomeContainerStyled>
	);
}