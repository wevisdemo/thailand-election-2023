import { createTableProvider } from './table-provider';
import { Party } from './models/party';
import { Person } from './models/person';
import { Votelog } from './models/votelog';
import { PeopleVote } from './models/people-vote';
import { Policy } from './models/policy';

export const TheyWorkForUs = {
	Parties: createTableProvider<Party>('40065196-c978-4d7a-b3fb-fb84694383a7'),
	People: createTableProvider<Person>('572c5e5c-a3d8-440f-9a70-3c4c773543ec', {
		'nested[PeoplePartyHistory][fields]': 'Party,EstablishedDate',
	}),
	VoteLog: createTableProvider<Votelog>('e06d1465-2786-4799-9c0f-a20f4cf71ec4'),
	PeopleVotes: createTableProvider<PeopleVote>(
		'e58433cc-f4fd-499b-926d-05431412cbba'
	),
	Policies: createTableProvider<Policy>('4842fd3b-4f2c-45c7-b7e2-92f7e2e60ab2'),
};

export * from './models/party';
export * from './models/person';
export * from './models/votelog';
export * from './models/people-vote';
export * from './models/policy';
