import axios from 'axios';

const CREDEN_API = 'https://api2.hjkl.ninja/get_detail_company_by_fullname';
const CREDEN_API_KEY = 'r4Sf9J6ewdrFUgGGtjuiUx4yc26ZTeWP';

export const fetchFromCreden = async (fullname: string) => {
	const body: string = JSON.stringify({
		fullname: fullname,
		type: 'shareholder',
	});

	const config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: CREDEN_API,
		headers: {
			apikey: CREDEN_API_KEY,
			'Content-Type': 'application/json',
		},
		data: body,
	};

	const result = await axios
		.request(config)
		.then((response) => {
			return JSON.stringify(response.data);
		})
		.catch((error) => {
			console.log(error);
		});

	return { result, fullname };
};
