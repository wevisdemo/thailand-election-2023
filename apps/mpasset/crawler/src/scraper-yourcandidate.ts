import * as d3 from 'd3';
import * as fs from 'fs';
import { CredenResult, Person, delayedFetch } from './scraper';
import { fetchFromCreden } from './utils/creden';

const searchPeople = (people: Person[], name: string) => {
	return people.find(
		(p) =>
			name.split(' ')[0] === p.Name.split(' ')[0] &&
			name.split(' ')[1] === p.Name.split(' ')[1]
	);
};

export const fetchShareholderData = async (people: Person[], step: number) => {
	const request: any[] = [];
	people.forEach((p, i) => {
		request.push(
			delayedFetch(() => fetchFromCreden(p.Name, 'shareholder'), i * 100)
		);
	});

	let company: CredenResult[] = [];
	let peopleProcess: Person[] = people;

	console.log('shareholder-step: ', step);

	await Promise.all(request)
		.then((value) => {
			if (value.length > 0) {
				value.forEach((v, i) => {
					const { result, fullname } = v;

					if (result) {
						const { success, data } = JSON.parse(result) as {
							success: boolean;
							msg?: string;
							data: CredenResult[];
						};

						let totalValueShare = 0;

						if (success && data && Array.isArray(data)) {
							const shareholderData = data.map((d) => ({
								...d,
								company_shareholder: d.company_shareholder
									? d.company_shareholder.map((c) => ({
											...c,
											person: searchPeople(
												people,
												`${c.Firstname} ${c.Lastname}`
											),
									  }))
									: undefined,
							}));

							company = [...company, ...shareholderData];

							fs.writeFileSync(
								`./public/data/yourcandidate/creden/shareholder/${String(
									fullname
								).replaceAll(' ', '-')}.json`,
								JSON.stringify(shareholderData)
							);

							// sum value share of all company
							totalValueShare = shareholderData.reduce(
								(acc, cur) => acc + Number(cur.value_share),
								0
							);

							peopleProcess[i].totalValueShare = totalValueShare;
							peopleProcess[i].countCompShare = shareholderData
								? shareholderData.length
								: 0;
							peopleProcess[i].companyType = [
								...peopleProcess[i].companyType,
								...shareholderData.map((d) => d.submit_obj_big_type),
							];
						}
					}
				});
			}
		})
		.then(() => {
			peopleProcess.sort((a, b) => b.totalValueShare - a.totalValueShare);

			let max =
				d3.max(peopleProcess.slice(1), (d) => Number(d.totalValueShare)) || 100;
			let scalePercentage = d3.scaleLinear().domain([0, max]).range([0, 100]);
			peopleProcess.forEach((p) => {
				p.totalPctShare = scalePercentage(p.totalValueShare);
			});

			fs.writeFileSync(
				`./public/data/yourcandidate/people${step}.json`,
				JSON.stringify(peopleProcess)
			);
		});

	fs.writeFileSync(
		`./public/data/yourcandidate/creden/all-company-shareholder${step}.json`,
		JSON.stringify(company)
	);
};

export const fetchDirectorData = async (people: Person[], step: number) => {
	const request: any[] = [];
	people.forEach((p, i) => {
		request.push(
			delayedFetch(() => fetchFromCreden(p.Name, 'director'), i * 100)
		);
	});

	let company: CredenResult[] = [];
	let peopleProcess: Person[] = people;

	console.log('director-step: ', step);

	await Promise.all(request)
		.then((value) => {
			if (value.length > 0) {
				value.forEach((v, i) => {
					const { result, fullname } = v;

					// fetch shareholder data if director company already exit in shareholder -> removed it
					// remove duplicate company from shareholder
					let shareholderData: CredenResult[] = fs.existsSync(
						`./public/data/yourcandidate/creden/shareholder/${String(
							fullname
						).replaceAll(' ', '-')}.json`
					)
						? JSON.parse(
								String(
									fs.readFileSync(
										`./public/data/yourcandidate/creden/shareholder/${String(
											fullname
										).replaceAll(' ', '-')}.json`
									)
								)
						  )
						: [];

					if (result) {
						const { success, data } = JSON.parse(result) as {
							success: boolean;
							msg?: string;
							data: CredenResult[];
						};

						if (success && data && Array.isArray(data)) {
							const directorData = data.filter((d) =>
								shareholderData.find((f) => f.company_id === d.company_id)
									? false
									: true
							);

							company = [...company, ...directorData];
							fs.writeFileSync(
								`./public/data/yourcandidate/creden/director/${String(
									fullname
								).replaceAll(' ', '-')}.json`,
								JSON.stringify(directorData)
							);

							peopleProcess[i].countDirector = directorData
								? directorData.length
								: 0;
							peopleProcess[i].companyType = [
								...peopleProcess[i].companyType,
								...directorData.map((d) => d.submit_obj_big_type),
							];
						}
					}
				});
			}
		})
		.then(() => {
			fs.writeFileSync(
				`./public/data/yourcandidate/people${step}.json`,
				JSON.stringify(peopleProcess)
			);
		});

	fs.writeFileSync(
		`./public/data/yourcandidate/creden/all-company-director${step}.json`,
		JSON.stringify(company)
	);
};
