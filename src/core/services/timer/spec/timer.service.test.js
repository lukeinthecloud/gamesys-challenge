import { generateCountDownTimer } from '../timer.service';

it('should generate a new timer that when started returns an object with correct properties', () => {
	const expected = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 29
	};

	const startTimer = generateCountDownTimer(30);

	const stopTimer = startTimer((values) => {
		console.log(values);
	});
});