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
		<CountDownTimerContainerStyled>

			<CountDownTimerCashValueContainerStyled>
				<CountDownTimerCashValueImageStyled>
				</CountDownTimerCashValueImageStyled>

				<CountDownCashValueMessageStyled>
				</CountDownCashValueMessageStyled>
			</CountDownTimerCashValueContainerStyled>

			<CountDownTimerClockContainerStyled>
				<CountDownTimerValueStyled>
				</CountDownTimerValueStyled>
			</CountDownTimerClockContainerStyled>

			<CountDownTimerButtonContainerStyled>
				<CountDownTimerButtonStyled>
				</CountDownTimerButtonStyled>
			</CountDownTimerButtonContainerStyled>

		</CountDownTimerContainerStyled>
	);
}