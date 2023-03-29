import { fetchFromThetWork, fetchShareholderData } from './scraper';
import * as d3 from 'd3';

import * as fs from 'fs';
import * as path from 'path';

console.log('yeah');
console.log(d3.schemeAccent);

const run = async () => {
	// const { party, people } = await fetchFromThetWork();

	// fs.writeFileSync('./public/data/raw_party.json', JSON.stringify(party));
	// fs.writeFileSync('./public/data/raw_people.json', JSON.stringify(people));

	// let party = JSON.parse(
	// 	String(fs.readFileSync('./public/data/raw_party.json'))
	// );
	const people = JSON.parse(
		String(fs.readFileSync('./public/data/raw_people.json'))
	);

	// console.log(party);
	// console.log(people);

	fetchShareholderData(people);
};

run();
