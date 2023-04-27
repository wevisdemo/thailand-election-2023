import { readdirSync } from 'fs';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = () => {
	const iconFiles = readdirSync('static/party-icons');

	const availablePartyIcons = [
		...new Set(
			iconFiles.map((name) => name.replace('.svg', '').replace('_black', ''))
		),
	];

	return { availablePartyIcons };
};
