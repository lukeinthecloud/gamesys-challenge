import React             from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	CountDownCashValueMessageStyled,
	CountDownTimerCashValueContainerStyled,
	CountDownTimerCashValueImageStyled
}                        from '../CountDownTimer.styles';

import { maxWidthSM } from '../../../styles/media-queries.styles';

export default function CashValue(props) {
	const largeImage = 'https://www.starspins.com/api/content/offer/campaign/welcome-bundle/__assets/styles/images/starspins/select/scale-2/box-bottom.png';
	const smallImage = 'https://www.starspins.com/api/content/offer/campaign/welcome-bundle/__assets/styles/images/starspins/select/scale-1/box-bottom.png';
	const matches = useMediaQuery({query: `(${maxWidthSM})`});

	function _displayHeaderImage() {
		if (matches) {
			return (
				<CountDownTimerCashValueImageStyled src={smallImage}/>
			)
		} else {
			return (
				<CountDownTimerCashValueImageStyled src={largeImage}/>
			)
		}
	}

	return (
		<CountDownTimerCashValueContainerStyled className="u-flex-column u-align-center">
			{_displayHeaderImage()}

			<CountDownCashValueMessageStyled>
				Get your free {props.cashValue.currency}{props.cashValue.value} now
			</CountDownCashValueMessageStyled>
		</CountDownTimerCashValueContainerStyled>
	)
}