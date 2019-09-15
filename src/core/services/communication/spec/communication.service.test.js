import mockAxios     from 'axios';
import { get } from '../communicaton.service';

describe('get', () => {
	it('returns resolved on valid get request', async () => {
		const expected = 'resolved';

		mockAxios.get.mockImplementationOnce(() =>
			Promise.resolve('resolved')
		);

		const testUrl = 'http://some-api-endpoint.com';
		const actual = await get(testUrl);

		expect(actual).toEqual(expected);
	});

	it('returns reject on invalid get request', async () => {
		const expected = 'rejected';

		mockAxios.get.mockImplementationOnce(() =>
			Promise.reject('rejected')
		);

		const testUrl = 'http://some-api-endpoint.com';
		await get(testUrl)
			.catch((error) => {
				expect(error).toEqual(expected);
			});
	});
});