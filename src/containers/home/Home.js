import React                   from 'react';
import CountDownTimer          from '../../components/opt-in/CountDownTimer';
import { HomeContainerStyled } from './Home.styles';

export default function Home() {
	return (
		<HomeContainerStyled>
			<CountDownTimer/>
		</HomeContainerStyled>
	);
}