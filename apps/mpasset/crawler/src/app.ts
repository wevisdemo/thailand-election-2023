import {
	Person,
	fetchDirectorData,
	fetchFromTheyWork,
	fetchShareholderData,
} from './scraper';

import {
	fetchDirectorData as fetchDirectorDataYourCandidate,
	fetchShareholderData as fetchShareholderDataYourCandidate,
} from './scraper-yourcandidate';

import * as fs from 'fs';

const run62 = async () => {
	let { party, people } = await fetchFromTheyWork();

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
	people.forEach((p) => (p.companyType = []));
	await fetchShareholderData(people);
	await fetchDirectorData(people);
};

const run66 = async () => {
	// let { party } = await fetchFromTheyWork();

	// fs.writeFileSync('./public/data/raw_party.json', JSON.stringify(party));
	// fs.writeFileSync('./public/data/raw_people.json', JSON.stringify(people));

	// from local
	// let party = JSON.parse(
	// 	String(fs.readFileSync('./public/data/raw_party.json'))
	// );
	const people = JSON.parse(
		String(
			fs.readFileSync('./public/data/yourcandidate/process/all-person.json')
		)
	) as Person[];

	// console.log(party);
	// console.log(people);

	people.forEach((p) => {
		(p.companyType = []),
			(p.totalValueShare = p.totalValueShare || 0),
			(p.countCompShare = p.countCompShare || 0),
			(p.countDirector = p.countDirector || 0),
			(p.totalPctShare = p.totalPctShare || 0),
			(p.MpType = p.MpType || 'บัญชีรายชื่อ');
	});
	const step = 1000;
	console.log('total-step', Math.ceil(people.length / step));
	for (let i = 0; i < Math.ceil(people.length / step); i++) {
		const start = i * step;
		const end = i * step + step;
		await fetchShareholderDataYourCandidate(people.slice(start, end), start);
		await fetchDirectorDataYourCandidate(people.slice(start, end), start);
	}
};

// runTheyWork();
// run62();
run66();
