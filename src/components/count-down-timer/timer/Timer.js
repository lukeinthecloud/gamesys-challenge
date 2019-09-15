import React, { useEffect, useState, useCallback }                                    from 'react';
import { generateCountDownTimer }                                        from '../../../core/services/timer/timer.service';
import { CountDownTimerClockContainerStyled, CountDownTimerValueStyled } from '../CountDownTimer.styles';

export default function Timer(props) {
	const [timer, setTimer] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
	});

	const _timerUpdateCallback = useCallback((value) => {
		setTimer(value);
		props.updateTimerCompleteStatus(value.complete);
	}, [props]);

	useEffect(() => {
		generateCountDownTimer(props.duration, _timerUpdateCallback);
	}, [props.duration, _timerUpdateCallback]);

	return (
		<CountDownTimerClockContainerStyled>
			<CountDownTimerValueStyled>
				{timer.hours}:{timer.minutes}:{timer.seconds}
			</CountDownTimerValueStyled>
		</CountDownTimerClockContainerStyled>
	)
}