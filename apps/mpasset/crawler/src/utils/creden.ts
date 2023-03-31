import axios from 'axios';

const CREDEN_API = 'https://api2.hjkl.ninja/get_detail_company_by_fullname';
const CREDEN_API_KEY = 'r4Sf9J6ewdrFUgGGtjuiUx4yc26ZTeWP';

export const fetchFromCreden = async (
	fullname: string,
	type: 'shareholder' | 'director'
) => {
	const body: string = JSON.stringify({
		fullname,
		type,
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
			if (response.status === 200) return JSON.stringify(response.data);
			else return JSON.stringify({ success: false });
		})
		.catch((error) => {
			console.log(error);
			return JSON.stringify({ success: false });
		});

	return { result, fullname };
};
