import { get } from '../communication/communicaton.service';

async function getConfig(configUrl) {
	try {
		const response = await get(configUrl);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export {
	getConfig
};