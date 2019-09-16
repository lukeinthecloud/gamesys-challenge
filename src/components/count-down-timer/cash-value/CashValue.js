import React             from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	CountDownCashValueMessageStyled,
	CountDownTimerCashValueContainerStyled,
	CountDownTimerCashValueImageStyled
}                        from '../CountDownTimer.styles';

import { maxWidthSM, retinaDisplay } from '../../../styles/media-queries.styles';

export default function CashValue(props) {
	const largeImage = 'https://www.starspins.com/api/content/offer/campaign/welcome-bundle/__assets/styles/images/starspins/select/scale-2/box-bottom.png';
	const smallImage = 'https://www.starspins.com/api/content/offer/campaign/welcome-bundle/__assets/styles/images/starspins/select/scale-1/box-bottom.png';
	const matchMaxWidthSM = useMediaQuery({query: `(${maxWidthSM})`});
	const matchRetinaDisplay = useMediaQuery({query: `(${retinaDisplay})`});

	function _displayHeaderImage() {
		if (!matchMaxWidthSM || matchRetinaDisplay) {
			return (
				<CountDownTimerCashValueImageStyled src={largeImage}/>
			)
		} else {
			return (
				<CountDownTimerCashValueImageStyled src={smallImage}/>
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