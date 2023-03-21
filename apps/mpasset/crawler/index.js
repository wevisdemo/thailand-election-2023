import fs from 'fs';
import * as d3 from 'd3';

const fetchFromNoco = async () => {
	// auth token
	const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQHB1bmNodXAud29ybGQiLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6IjEiLCJyb2xlcyI6InVzZXIsc3VwZXIiLCJ0b2tlbl92ZXJzaW9uIjoiMjQwMjVmZWQ0Y2E3MTQ1ODQxYTc0YTEzMTFlNTA2ODU0OGJlNmRmMzZiYmFlMmYwYjI5OGVlZjUwYzc4NjJmMTNkNGZiNDUwNmUxODEzOGMiLCJpYXQiOjE2NzgxNzI4MjgsImV4cCI6MTY3ODIwODgyOH0.F_b0kyLyRxEl8DH4MSb8cmRscSFdLD6eZiUn9MAC3xo`;

	console.log('yes');

	const url = `https://sheets.wevis.info/api/v1/db/data/v1/They-Work-For-Us/PersonPartyHistory?limit=1000shuffle=0&offset=0`;
	const options = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json;charset=UTF-8',
			'xc-auth': TOKEN,
		},
	};

	await fetch(url, options)
		.then((res) => res.json())
		.then((data) => {
			const dir = '../public/data';
			if (!fs.existsSync(dir))
				fs.mkdir(dir, { recursive: true }, (err) => console.log(err));

			fs.writeFileSync(`${dir}/PersonPartyHistory.json`, JSON.stringify(data));
		});
};

const processData = () => {
	let data = fs.readFileSync('../public/data/PersonPartyHistory.json');
	let { list } = JSON.parse(data);

	let parties = [];
	list = list.map((d) => {
		return {
			...d,
			SearchParties: d.SearchParties === null ? 'อิสระ' : d.SearchParties,
			child: d.SearchPerson,
			parent: d.SearchParties === null ? 'อิสระ' : d.SearchParties,
		};
	});

	list.forEach((d) => {
		parties.push(d.SearchParties);
	});
	parties = Array.from(new Set(parties.filter((p) => p !== null)));
	// add all party
	parties.forEach((p) => {
		list.push({
			child: p,
			parent: 'party',
		});
	});

	// add root party
	list.push({ child: 'party', parent: '' });

	fs.writeFileSync(
		`../public/data/PersonPartyHistoryProcess.json`,
		JSON.stringify(list)
	);

	// console.log(list);
};

const testStratify = () => {
	const data = [
		{ child: 'a', parent: '' },
		{ child: 'b', parent: 'a' },
		{ child: 'c', parent: 'a' },
		{ child: 'd', parent: 'a' },
		{ child: 'e', parent: 'b' },
		{ child: 'f', parent: 'c' },
		{ child: 'g', parent: 'c' },
		{ child: 'h', parent: 'd' },
		{ child: 'i', parent: 'h' },
	];

	const stratify = d3
		.stratify()
		.id((d) => d.child)
		.parentId((d) => d['parent']);
	console.log(stratify(data, (err) => console.log(err)));
};

const runFunction = async () => {
	// await fetchFromNoco();
	await processData();
	// await testStratify();
};

runFunction();
