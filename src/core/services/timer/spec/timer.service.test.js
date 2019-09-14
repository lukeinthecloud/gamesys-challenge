import { generateCountDownTimer } from '../timer.service';

describe('generateCountDownTimer', () => {
	it('should generate a new timer that when started returns an object with correct properties', (done) => {
		const expected = {
			days: expect.any(Number),
			hours: expect.any(Number),
			minutes: expect.any(Number),
			seconds: expect.any(Number)
		};

		let actual = null;

		const mockCallback = jest.fn((values) => {
			actual = values;
			stopTimer();
			expect(actual).not.toEqual(0);
			expect(actual).not.toEqual(30);
			expect(actual).toMatchObject(expect.objectContaining(expected));
			expect(mockCallback).toHaveBeenCalledTimes(1);
			done();
		});

		const startTimer = generateCountDownTimer(30);

		const stopTimer = startTimer(mockCallback);
	});
});