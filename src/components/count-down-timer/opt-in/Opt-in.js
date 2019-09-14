import React                                                             from 'react';
import { CountDownTimerButtonContainerStyled, CountDownTimerLinkStyled } from '../CountDownTimer.styles';


export default function OptIn(props) {
	return (
		<CountDownTimerButtonContainerStyled>
			<CountDownTimerLinkStyled className="button-primary" href={props.link} target="_blank">
				Opt In
			</CountDownTimerLinkStyled>
		</CountDownTimerButtonContainerStyled>
	)
}