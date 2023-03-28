import { fetchAllRows } from './utils/nocodb';
import { fetchFromCreden } from './utils/creden';
import fs from 'fs';

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

	Images: ImageAttachment[] | string | null;
	PeoplePartyHistory?: NestedPeoplePartyHistory[];
	Party: {
		Id: number;
		Name: string;
		Color?: string | null;
		Images?: string | null;
	} | null;
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
		fields: 'Id,Name,Title,IsMP,IsSenator,IsActive,Images,PeoplePartyHistory',
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
	people = people.filter((p) => p.IsActive === true);
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

export const fetchShareholderData = async (people: Person[]) => {
	let request = [];
	people.forEach((p) => {
		request.push(fetchFromCreden(p.Name));
	});

	let company = [];
	await Promise.all(request).then((value) => {
		if (value.length > 0) {
			value.forEach((v) => {
				const { data, fullname } = v;
				company.push(JSON.parse(data));
				fs.writeFileSync(
					`./public/data/creden/${String(fullname).replace(' ', '-')}.json`,
					data
				);
			});
		}
	});

	fs.writeFileSync(
		`./public/data/creden/company.json`,
		JSON.stringify(company)
	);
};
