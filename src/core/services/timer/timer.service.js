const defaultCompleteValue = {
	hours: '00',
	minutes: '00',
	seconds: '00',
	complete: true
};

function generateCountDownTimer(time, updateCallback) {
	let endDate = new Date();

	if (_isValidDateType(time)) {
		endDate = new Date(time);
	} else {
		endDate.setSeconds(endDate.getSeconds() + time);
	}

	const endTime = endDate.getTime();

	const interval = _startCountDown(endTime, updateCallback);

	// Note: thought instead of creating a class or exposing multiple
	//       methods in the module to make use of currying to allow you to instantiate and start
	//       your new timer as well as a have a way to stop it when you like
	return () => {
		clearInterval(interval);

		// Note: we return this else we go into a recursive loop (if the stop was in the callback)
		return defaultCompleteValue;
	};
}

function _startCountDown(endTime, updateCallback) {
	// Note: generally most people would use a library, as interval is not totally accurate, however
	//  I could not fully justify the need for one and this seemed like the most simple and effective solution.
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

	const daysInHoursRawValue = Math.floor(timeDifference / daysCalculationValue * 24);

	const hoursRawValue = Math.floor((timeDifference % daysCalculationValue) / hoursCalculationValue + daysInHoursRawValue);
	const minutesRawValue = Math.floor((timeDifference % hoursCalculationValue) / minutesCalculationValue);
	const secondsRawValue = Math.floor((timeDifference % minutesCalculationValue) / 1000);

	const hours = _setTimeFormatting(hoursRawValue);
	const minutes = _setTimeFormatting(minutesRawValue);
	const seconds = _setTimeFormatting(secondsRawValue);

	return {
		hours,
		minutes,
		seconds,
		complete: false
	}
}

function _setTimeFormatting(value) {
	if (value === 0) {
		return '00';
	} else if (value < 10) {
		return `0${value}`;
	}

	return `${value}`
}

function _isValidDateType(time) {
	return typeof time === 'string' || `${time}`.length >= 13;
}

function _stopTimer(interval) {
	clearInterval(interval);
}

export {
	generateCountDownTimer
}
