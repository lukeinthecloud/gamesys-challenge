import React                   from 'react';
import CountDownTimer          from '../../components/count-down-timer/CountDownTimer';
import { HomeContainerStyled } from './Home.styles';

export default function Home() {
	return (
		<HomeContainerStyled>
			<CountDownTimer/>
		</HomeContainerStyled>
	);
}