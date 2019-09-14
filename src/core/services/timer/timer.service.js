function generateCountDownTimer(time) {
	let endDate = new Date();

	if (typeof time === 'string') {
		endDate = new Date(time);
	} else {
		endDate.setSeconds(endDate.getSeconds() + time);
	}

	const endTime = endDate.getTime();

	// Note: thought instead of creating a class or exposing multiple
	// methods in the module to make use of currying to allow you to instantiate and start
	// your new timer as well as a way to stop it
	return (updateCallback) => {
		const interval = _startCountDown(endTime, updateCallback);
		return () => {
			_stopTimer(interval);
		};
	}
}

function _startCountDown(endTime, updateCallback) {
	const interval = setInterval(() => {
		const now = new Date().getTime();
		const timeDifference = endTime - now;
		if (timeDifference <= 0) {
			_stopTimer(interval);
			return;
		}

		const timeValues = _getTimeValues(timeDifference);

		// Note: This can take multiple approaches, I decided that a callback was the most simple
		// RxJS/PubSub is an option or redux observables but would be overkill in this instance.
		updateCallback(timeValues);
	}, 1000);

	return interval;
}

function _getTimeValues(timeDifference) {
	const daysCalculationValue = 1000 * 60 * 60 * 24;
	const hoursCalculationValue = 1000 * 60 * 60;
	const minutesCalculationValue = 1000 * 60;

	const days = Math.floor(timeDifference / daysCalculationValue);
	const hours = Math.floor((timeDifference % daysCalculationValue) / hoursCalculationValue);
	const minutes = Math.floor((timeDifference % hoursCalculationValue) / minutesCalculationValue);
	const seconds = Math.floor((timeDifference % minutesCalculationValue) / 1000);

	return {
		days,
		hours,
		minutes,
		seconds
	}
}

function _stopTimer(interval) {
	clearInterval(interval);
}

export {
	generateCountDownTimer
}
