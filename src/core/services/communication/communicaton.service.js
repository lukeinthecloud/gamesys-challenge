import axios from 'axios';

// Note: just a small abstraction over a request library,
//  could easily swap this with a fetch or whatever choice
async function get(url) {
	return axios.get(url)
}

export {
	get
}