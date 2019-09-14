import { generateCountDownTimer } from '../timer.service';

describe('generateCountDownTimer', () => {
	it('should generate a new timer that when started returns an object with correct properties', (done) => {
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
			expect(actual).not.toBe(0);
			expect(actual).not.toEqual(30);
			expect(actual).toMatchObject(expect.objectContaining(expected));
			expect(mockCallback).toHaveBeenCalledTimes(1);
			done();
		});

		stopTimer = generateCountDownTimer(30, mockCallback);
	});
});