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
	const [timerComplete, setTimerComplete] = useState(false);

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

	function updateTimerCompleteStatus(value) {
		setTimerComplete(value);
	}

	function showClock() {
		if (!timerComplete) {
			return (
				<>
					<CashValue cashValue={cashValue}/>
					<Timer duration={duration} updateTimerCompleteStatus={updateTimerCompleteStatus}/>
					<OptIn link={optInLink}/>
				</>
			)
		} else {
			return (
				<Timer duration={duration} updateTimerCompleteStatus={updateTimerCompleteStatus}/>
			);
		}
	}

	if (props.config) {
		return (
			<CountDownTimerContainerStyled className="u-flex-column u-align-center">
				{showClock()}
			</CountDownTimerContainerStyled>
		);
	} else {
		return (
			<CountDownTimerContainerStyled className="u-flex-column u-align-center">
			</CountDownTimerContainerStyled>
		);
	}
}