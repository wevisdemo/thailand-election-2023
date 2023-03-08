import { createTableProvider } from './table-provider';

export const TheyWorkForUs = {
	Parties: createTableProvider('40065196-c978-4d7a-b3fb-fb84694383a7'),
	People: createTableProvider('572c5e5c-a3d8-440f-9a70-3c4c773543ec', {
		'nested[PeoplePartyHistory][fields]': 'Parties,EstablishedDate',
	}),
	VoteLog: createTableProvider('e06d1465-2786-4799-9c0f-a20f4cf71ec4'),
	PeopleVotes: createTableProvider('e58433cc-f4fd-499b-926d-05431412cbba'),
};
