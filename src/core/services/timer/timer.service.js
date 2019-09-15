const defaultCompleteValue = {
	hours: '00',
	minutes: '00',
	seconds: '00',
	complete: true
};

const endTimeStorageKey = 'endTime';

function generateCountDownTimer(time, updateCallback) {
	const endTime = _checkForExistingEndTime(time);

	sessionStorage.setItem(endTimeStorageKey, endTime.toString());
	const interval = _startCountDown(endTime, updateCallback);

	return () => {
		_stopTimer(interval);
		return defaultCompleteValue;
	};
}

function clearStorage() {
	sessionStorage.removeItem(endTimeStorageKey);
}

function _startCountDown(endTime, updateCallback) {
	const interval = setInterval(() => {
		const timeDifference = _getTimeDiffeence(endTime);

		if (timeDifference <= 0) {
			_stopTimer(interval);
			updateCallback(defaultCompleteValue);
			return;
		}

		const timeValues = _getTimeValues(timeDifference);

		updateCallback(timeValues);
	}, 1000);

	return interval;
}

function _getTimeDiffeence(endTime) {
	const now = new Date().getTime();
	const timeDifference = endTime - now;

	return timeDifference;
}

function _checkForExistingEndTime(time) {
	const storedTime = sessionStorage.getItem(endTimeStorageKey);
	let endDate = null;

	if (!storedTime) {
		endDate = _determineDateType(time);
	} else {
		endDate = _convertStoredTimeToDate(storedTime);
	}

	const endTime = endDate.getTime();

	return endTime;
}

function _determineDateType(time) {
	let endDate = new Date();
	if (_isValidDateType(time)) {
		endDate = new Date(time);
	} else {
		endDate.setSeconds(endDate.getSeconds() + time);
	}

	if (!_isValidDate(endDate)) {
		console.error('Error:', `Received and invalid time of: ${time}`);
		return new Date();
	}

	return endDate;
}

function _convertStoredTimeToDate(storedTime) {
	const parsedEndDate = parseInt(storedTime, 10);
	const endDate = new Date(parsedEndDate);
	return endDate
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

function _isValidDate(endDate) {
	return endDate instanceof Date && !isNaN(endDate);
}

function _stopTimer(interval) {
	clearInterval(interval);
	clearStorage();
}

export {
	generateCountDownTimer,
	// Note: exposing this in case we wanted to re-initiate the timer if there was an API update
	clearStorage
}
