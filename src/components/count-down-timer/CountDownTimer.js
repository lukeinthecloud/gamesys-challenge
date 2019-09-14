import React, { useEffect, useState, useCallback } from 'react';
import CashValue                                   from './cash-value/CashValue';

import {
	CountDownTimerContainerStyled,
} from './CountDownTimer.styles';

import OptIn from './opt-in/Opt-in';
import Timer from './timer/Timer';

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
				<Timer duration={duration}/>
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