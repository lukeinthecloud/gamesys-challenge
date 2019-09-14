import React, { useEffect, useState }                                    from 'react';
import { generateCountDownTimer }                                        from '../../../core/services/timer/timer.service';
import { CountDownTimerClockContainerStyled, CountDownTimerValueStyled } from '../CountDownTimer.styles';


export default function Timer(props) {
	const [timer, setTimer] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
	});

	useEffect(() => {
		if (props.duration) {
			generateCountDownTimer(props.duration, _timerUpdateCallback);
		}

		window.onbeforeunload = function() {
			console.log('hit');
			localStorage.setItem('test', 'test');
			return 'Dude, are you sure you want to refresh? Think of the kittens!';
		};
	}, [props.duration]);

	function _timerUpdateCallback(value) {
		console.log(value);
		setTimer(value);
	}

	return (
		<CountDownTimerClockContainerStyled>
			<CountDownTimerValueStyled>
				{timer.hours}:{timer.minutes}:{timer.seconds}
			</CountDownTimerValueStyled>
		</CountDownTimerClockContainerStyled>
	)
}