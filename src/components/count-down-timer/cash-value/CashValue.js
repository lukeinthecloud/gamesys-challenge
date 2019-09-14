import React from 'react';
import {
	CountDownCashValueMessageStyled,
	CountDownTimerCashValueContainerStyled,
	CountDownTimerCashValueImageStyled
}            from '../CountDownTimer.styles';


export default function CashValue(props) {
	return (
		<CountDownTimerCashValueContainerStyled className="u-flex-column u-align-center">
			<CountDownTimerCashValueImageStyled
				src="https://www.starspins.com/api/content/offer/campaign/welcome-bundle/__assets/styles/images/starspins/select/scale-2/box-bottom.png"/>

			<CountDownCashValueMessageStyled>
				Get your free {props.cashValue.currency}{props.cashValue.value} now
			</CountDownCashValueMessageStyled>
		</CountDownTimerCashValueContainerStyled>
	)
}