import React                      from 'react';
import { generateCountDownTimer } from '../../core/services/timer/timer.service';
import {
	CountDownTimerCashValueContainerStyled,
	CountDownCashValueMessageStyled,
	CountDownTimerCashValueImageStyled,
	CountDownTimerContainerStyled,
	CountDownTimerButtonContainerStyled,
	CountDownTimerLinkStyled,
	CountDownTimerClockContainerStyled,
	CountDownTimerValueStyled
}                                 from './CountDownTimer.styles';

export default function CountDownTimer() {
	useEffect(() => {
		const startTimer = generateCountDownTimer();
	});

	return (
		<CountDownTimerContainerStyled className="u-flex-column u-align-center">

			<CountDownTimerCashValueContainerStyled className="u-flex-column u-align-center">
				<CountDownTimerCashValueImageStyled
					src="https://www.starspins.com/api/content/offer/campaign/welcome-bundle/__assets/styles/images/starspins/select/scale-2/box-bottom.png"/>

				<CountDownCashValueMessageStyled>
					Get your free cash_value now
				</CountDownCashValueMessageStyled>
			</CountDownTimerCashValueContainerStyled>

			<CountDownTimerClockContainerStyled>
				<CountDownTimerValueStyled>
					00:00:00
				</CountDownTimerValueStyled>
			</CountDownTimerClockContainerStyled>

			<CountDownTimerButtonContainerStyled>
				<CountDownTimerLinkStyled className="button-primary" href="https://google.com" target="_blank">
					Opt In
				</CountDownTimerLinkStyled>
			</CountDownTimerButtonContainerStyled>

		</CountDownTimerContainerStyled>
	);
}