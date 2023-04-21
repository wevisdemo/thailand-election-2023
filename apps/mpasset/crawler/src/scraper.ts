import { fetchAllRows } from './utils/nocodb';
import { fetchFromCreden } from './utils/creden';
import * as fs from 'fs';
import * as d3 from 'd3';

const PARTY_VIEW_ID = '40065196-c978-4d7a-b3fb-fb84694383a7';
const PEOPLE_VIEW_ID = '572c5e5c-a3d8-440f-9a70-3c4c773543ec';

interface ImageAttachment {
	title: string;
	url: string;
	mimetype: string;
}

export interface Party {
	Id: number;
	Name: string;
	Color: string | null;
	PartyType: string | null;
	IsActive: boolean | null;
	Images: ImageAttachment[] | string | null;
}

export interface Person {
	Id: number;
	Title: string;
	Name: string;
	IsMp: boolean;
	IsSenator: boolean;
	IsActive: boolean;

	// custom field
	Images: ImageAttachment[] | string | null;
	PeoplePartyHistory?: NestedPeoplePartyHistory[];
	Party: {
		Id: number;
		Name: string;
		Color?: string | null;
		Images?: string | null;
	} | null;
	countDirector: number;
	countCompShare: number;
	totalValueShare: number;
	totalPctShare: number;
	companyType: string[];
}

export interface NestedPeoplePartyHistory {
	EstablishedDate: string;
	Party: {
		Id: number;
		Name: string;
	};
}

export const fetchFromThetWork = async (): Promise<{
	party: Party[];
	people: Person[];
}> => {
	console.log(`Fetch Party`);
	let party = await fetchAllRows<Party>(PARTY_VIEW_ID, {
		fields: 'Id,Name,Color,PartyType,Images,IsActive',
	});

	party.forEach((p) => {
		if (p.Images && p.Images.length) {
			if (Array.isArray(p.Images)) p.Images = p.Images[0].url;
		}
	});
	party = party.filter((p) => p.IsActive === true);

	console.log(`Fetch People`);
	let people = await fetchAllRows<Person>(PEOPLE_VIEW_ID, {
		fields:
			'Id,Name,Title,IsMp,IsSenator,IsActive,IsCabinet,MpType,MpProvince,MpZone,MPList,Images,PeoplePartyHistory',
		'nested[PeoplePartyHistory][fields]': 'Party,EstablishedDate',
	});

	people.forEach((p) => {
		if (p.Images && p.Images.length) {
			if (Array.isArray(p.Images)) p.Images = p.Images[0].url;
			if (Array.isArray(p.PeoplePartyHistory)) {
				p.Party = p.PeoplePartyHistory[p.PeoplePartyHistory.length - 1]?.Party;
				delete p.PeoplePartyHistory;
			}
		}
	});
	// people = people.filter((p) => p.IsActive === true);
	people = people.map((p) => {
		if (!p.Party?.Id) {
			return { ...p, Party: null };
		}
		const relatedParty = party.find(
			(d) => p.Party !== null && d.Id && d.Id === p.Party.Id
		);

		if (relatedParty) {
			return {
				...p,
				Party: {
					...p.Party,
					Color: relatedParty.Color,
					Images:
						typeof relatedParty.Images === 'string'
							? relatedParty.Images
							: null,
				},
			};
		} else {
			return p;
		}
	});

	return {
		party,
		people,
	};
};

export interface ShareholderData {
	Lastname: string;
	value_share: number;
	Nationality: string;
	pct_share: number;
	count_share: number;
	Firstname: string;
	person?: Person;
}

export interface CredenResult {
	financial: {
		year: string;
		income: number;
	}[];
	value_share: number;
	reg_date: string;
	count_shareholder: number;
	pct_share: number;
	company_name_th: string;
	company_id: string;
	obj_tname: string;
	company_name_en: string;
	tsic: string;
	cap_amt: number;
	company_value: number;
	company_type_th: string;
	submit_obj_big_type: string;
	full_address: string;
	company_shareholder?: ShareholderData[];
}
[];

type CredenResponse = {
	success: boolean;
	msg?: string;
	data: CredenResult[];
};

export const delayedFetch = (request: Function, delay: number) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			request()
				.then((res: Promise<CredenResponse>) => resolve(res))
				.catch((err: any) => reject(err));
		}, delay);
	});
};

const searchPeople = (people: Person[], name: string) => {
	return people.find(
		(p) =>
			name.split(' ')[0] === p.Name.split(' ')[0] &&
			name.split(' ')[1] === p.Name.split(' ')[1]
	);
};

export const fetchShareholderData = async (people: Person[]) => {
	const request: any[] = [];
	people.forEach((p, i) => {
		request.push(
			delayedFetch(() => fetchFromCreden(p.Name, 'shareholder'), i * 100)
		);
	});

	let company: CredenResult[] = [];
	let peopleProcess: Person[] = people;

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
								`./public/data/creden/shareholder/${String(fullname).replaceAll(
									' ',
									'-'
								)}.json`,
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
				`./public/data/people.json`,
				JSON.stringify(peopleProcess)
			);
		});

	fs.writeFileSync(
		`./public/data/creden/all-company-shareholder.json`,
		JSON.stringify(company)
	);
};

export const fetchDirectorData = async (people: Person[]) => {
	const request: any[] = [];
	people.forEach((p, i) => {
		request.push(
			delayedFetch(() => fetchFromCreden(p.Name, 'director'), i * 100)
		);
	});

	let company: CredenResult[] = [];
	let peopleProcess: Person[] = people;

	await Promise.all(request)
		.then((value) => {
			if (value.length > 0) {
				value.forEach((v, i) => {
					const { result, fullname } = v;

					// fetch shareholder data if director company already exit in shareholder -> removed it
					// remove duplicate company from shareholder
					let shareholderData: CredenResult[] = fs.existsSync(
						`./public/data/creden/shareholder/${String(fullname).replaceAll(
							' ',
							'-'
						)}.json`
					)
						? JSON.parse(
								String(
									fs.readFileSync(
										`./public/data/creden/shareholder/${String(
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
								`./public/data/creden/director/${String(fullname).replaceAll(
									' ',
									'-'
								)}.json`,
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
				`./public/data/people.json`,
				JSON.stringify(peopleProcess)
			);
		});

	fs.writeFileSync(
		`./public/data/creden/all-company-director.json`,
		JSON.stringify(company)
	);
};
