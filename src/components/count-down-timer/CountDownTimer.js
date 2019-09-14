import React, { useEffect, useState, useCallback } from 'react';
import { generateCountDownTimer }                  from '../../core/services/timer/timer.service';
import CashValue                                   from './cash-value/CashValue';

import {
	CountDownTimerContainerStyled,
	CountDownTimerClockContainerStyled,
	CountDownTimerValueStyled
} from './CountDownTimer.styles';

import OptIn from './opt-in/Opt-in';

export default function CountDownTimer(props) {
	const [cashValue, setCashValue] = useState({
		currency: '£',
		value: '0'
	});
	const [optInLink, setOptInLink] = useState('');
	const [duration, setDuration] = useState(0);
	const [timer, setTimer] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
	});



	const _setDataFromConfig = useCallback(() => {
		if (props.config) {
			setCashValue(props.config.cashValue);
			setOptInLink(props.config.optInLink);
			setDuration(props.config.duration);
			generateCountDownTimer(duration, _timerUpdateCallback);
		}
	}, [props.config, duration]);

	useEffect(() => {
		_setDataFromConfig();
	}, [props.config, _setDataFromConfig]);

	function _timerUpdateCallback(value) {
		console.log(value);
		setTimer(value);
	}

	if (props.config) {
		return (
			<CountDownTimerContainerStyled className="u-flex-column u-align-center">
				<CashValue cashValue={cashValue}/>

				<CountDownTimerClockContainerStyled>
					<CountDownTimerValueStyled>
						{timer.hours}:{timer.minutes}:{timer.seconds}
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