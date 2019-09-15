import React                                                           from 'react';
import { CountDownTimerLinkContainerStyled, CountDownTimerLinkStyled } from '../CountDownTimer.styles';


export default function OptIn(props) {
	return (
		<CountDownTimerLinkContainerStyled>
			<CountDownTimerLinkStyled className="button-primary" href={props.link} target="_blank">
				Opt In
			</CountDownTimerLinkStyled>
		</CountDownTimerLinkContainerStyled>
	)
}