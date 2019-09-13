import React from 'react';
import {
	CountDownTimerCashValueContainerStyled,
	CountDownCashValueMessageStyled,
	CountDownTimerCashValueImageStyled,
	CountDownTimerContainerStyled,
	CountDownTimerButtonContainerStyled,
	CountDownTimerButtonStyled,
	CountDownTimerClockContainerStyled,
	CountDownTimerValueStyled
}            from './CountDownTimer.styles';

export default function CountDownTimer() {
	return (
		<CountDownTimerContainerStyled className="u-flex-column u-align-center">

			<CountDownTimerCashValueContainerStyled className="u-flex-column u-align-center">
				<CountDownTimerCashValueImageStyled src="https://www.starspins.com/api/content/offer/campaign/welcome-bundle/__assets/styles/images/starspins/select/scale-2/box-bottom.png" />

				<CountDownCashValueMessageStyled>
					This is the Cash Value Message
				</CountDownCashValueMessageStyled>
			</CountDownTimerCashValueContainerStyled>

			<CountDownTimerClockContainerStyled>
				<CountDownTimerValueStyled>
					00 : 00 : 00
				</CountDownTimerValueStyled>
			</CountDownTimerClockContainerStyled>

			<CountDownTimerButtonContainerStyled>
				<CountDownTimerButtonStyled>

				</CountDownTimerButtonStyled>
			</CountDownTimerButtonContainerStyled>

		</CountDownTimerContainerStyled>
	);
}