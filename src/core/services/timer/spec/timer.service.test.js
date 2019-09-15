import { generateCountDownTimer } from '../timer.service';

describe('generateCountDownTimer', () => {
	it('should generate a new timer that when started returns an object with correct properties with seconds', (done) => {
		const expected = {
			hours: expect.any(String),
			minutes: expect.any(String),
			seconds: expect.any(String)
		};

		let actual = null;
		let stopTimer = null;

		const mockCallback = jest.fn((values) => {
			actual = values;
			stopTimer();
			expect(actual.seconds).not.toBe('00');
			expect(actual.seconds).not.toEqual('30');
			expect(actual).toMatchObject(expect.objectContaining(expected));
			expect(mockCallback).toHaveBeenCalledTimes(1);
			done();
		});

		stopTimer = generateCountDownTimer(30, mockCallback);
	});

	it('should generate a new timer that when started returns an object with correct properties with date string', (done) => {
		const expected = {
			hours: expect.any(String),
			minutes: expect.any(String),
			seconds: expect.any(String)
		};

		let actual = null;
		let stopTimer = null;

		// Note: very far ahead date that would expire eventually
		const dateString = "Sat Sep 18 2040 21:04:33 GMT+0100 (British Summer Time)";

		const mockCallback = jest.fn((values) => {
			actual = values;
			stopTimer();
			expect(actual.hours).not.toBe('00');
			expect(actual).toMatchObject(expect.objectContaining(expected));
			expect(mockCallback).toHaveBeenCalledTimes(1);
			done();
		});

		stopTimer = generateCountDownTimer(dateString, mockCallback);
	});

	it('should generate a new timer that when started returns an object with correct properties with date number', (done) => {
		const expected = {
			hours: expect.any(String),
			minutes: expect.any(String),
			seconds: expect.any(String)
		};

		let actual = null;
		let stopTimer = null;

		// Note: very far ahead date that would expire eventually
		const dateNumber = 2231611473000;

		const mockCallback = jest.fn((values) => {
			actual = values;
			stopTimer();
			expect(actual.hours).not.toBe('00');
			expect(actual).toMatchObject(expect.objectContaining(expected));
			expect(mockCallback).toHaveBeenCalledTimes(1);
			done();
		});

		stopTimer = generateCountDownTimer(dateNumber, mockCallback);
	});

	it('Should return valid object but all are 0 if invalid date time sent', (done) => {
		const expected = {
			hours: expect.any(String),
			minutes: expect.any(String),
			seconds: expect.any(String)
		};

		let actual = null;
		let stopTimer = null;

		// Note: very far ahead date that would expire eventually
		const dateNumber = 'Invalid Date Time';

		const mockCallback = jest.fn((values) => {
			actual = values;
			stopTimer();
			expect(actual.hours).toBe('00');
			expect(actual.minutes).toBe('00');
			expect(actual.seconds).toBe('00');
			expect(actual).toMatchObject(expect.objectContaining(expected));
			expect(mockCallback).toHaveBeenCalledTimes(1);
			done();
		});

		stopTimer = generateCountDownTimer(dateNumber, mockCallback);
	});
});