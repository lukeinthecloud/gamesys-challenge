import axios from 'axios';

async function getConfig(configUrl) {
	try {
		const response = await _get(configUrl);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}


async function _get(url) {
	return axios.get(url)
}

export {
	getConfig
};