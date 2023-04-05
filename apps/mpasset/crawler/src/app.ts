import * as d3 from 'd3';
import {
	fetchDirectorData,
	fetchFromThetWork,
	fetchShareholderData,
} from './scraper';

import * as fs from 'fs';

console.log('yeah');
console.log(d3.schemeAccent);

const run = async () => {
	let { party, people } = await fetchFromThetWork();

	fs.writeFileSync('./public/data/raw_party.json', JSON.stringify(party));
	fs.writeFileSync('./public/data/raw_people.json', JSON.stringify(people));

	// from local
	// let party = JSON.parse(
	// 	String(fs.readFileSync('./public/data/raw_party.json'))
	// );
	// const people = JSON.parse(
	// 	String(fs.readFileSync('./public/data/raw_people.json'))
	// );

	// console.log(party);
	// console.log(people);

	await fetchShareholderData(people);
	await fetchDirectorData(people);
};

run();
