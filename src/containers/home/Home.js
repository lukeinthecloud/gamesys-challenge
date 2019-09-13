import React                   from 'react';
import OptIn                   from '../../components/opt-in/OptIn';
import { HomeContainerStyled } from './styles/Home.styles';

export default function Home() {
	return (
		<HomeContainerStyled>
			<OptIn/>
		</HomeContainerStyled>
	);
}