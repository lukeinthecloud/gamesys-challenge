import mockAxios from 'axios';

import { getConfig } from '../config.service';

describe('getConfig', () => {
	it('returns JSON value from call', async () => {
		const expected = {
			duration: 30,
			cashValue: {
				currency: '£',
				value: '10'
			},
			optInLink: 'https://www.starspins.com/'
		};

		mockAxios.get.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					duration: 30,
					cashValue: {
						currency: '£',
						value: '10'
					},
					optInLink: 'https://www.starspins.com/'
				}
			})
		);

		const testConfigUrl = 'http://some-api-endpoint.com';
		const actual = await getConfig(testConfigUrl);

		expect(mockAxios.get).toHaveBeenCalledTimes(1);
		expect(actual).toStrictEqual(expected);
	});
});

