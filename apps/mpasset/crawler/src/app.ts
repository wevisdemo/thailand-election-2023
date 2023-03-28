import { d3 } from 'd3-node';
import { fetchFromThetWork, fetchShareholderData } from './scraper';

import fs from 'fs';
import path from 'path';

console.log('yeah');
console.log(d3.schemeAccent);

const run = async () => {
	// const { party, people } = await fetchFromThetWork();

	// fs.writeFileSync('./public/data/raw_party.json', JSON.stringify(party));
	// fs.writeFileSync('./public/data/raw_people.json', JSON.stringify(people));

	// let party = JSON.parse(
	// 	String(fs.readFileSync('./public/data/raw_party.json'))
	// );
	let people = JSON.parse(
		String(fs.readFileSync('./public/data/raw_people.json'))
	);

	// console.log(party);
	// console.log(people);

	// fetchShareholderData(people);
};

run();
