import React, { useEffect, useState, useCallback } from 'react';
import CashValue                                   from './CashValue/CashValue';

import {
	CountDownTimerContainerStyled,
	CountDownTimerClockContainerStyled,
	CountDownTimerValueStyled
}            from './CountDownTimer.styles';

import OptIn from './opt-in/Opt-in';

export default function CountDownTimer(props) {
	const [cashValue, setCashValue] = useState({
		currency: '£',
		value: '0'
	});
	const [optInLink, setOptInLink] = useState('');
	const [duration, setDuration] = useState(0);

	const _setDataFromConfig = useCallback(() => {
		if (props.config) {
			setCashValue(props.config.cashValue);
			setOptInLink(props.config.optInLink);
			setDuration(props.config.duration);
		}
	}, [props.config]);

	useEffect(() => {
		_setDataFromConfig();
	}, [props.config, _setDataFromConfig]);

	if (props.config) {
		return (
			<CountDownTimerContainerStyled className="u-flex-column u-align-center">

				<CashValue cashValue={cashValue}/>

				<CountDownTimerClockContainerStyled>
					<CountDownTimerValueStyled>
						00:00:00
					</CountDownTimerValueStyled>
				</CountDownTimerClockContainerStyled>

				<OptIn link={optInLink}/>

			</CountDownTimerContainerStyled>
		);
	} else {
		return (
			<CountDownTimerContainerStyled className="u-flex-column u-align-center">
			</CountDownTimerContainerStyled>
		);
	}
}