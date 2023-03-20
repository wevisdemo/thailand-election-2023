import { NestedPerson } from './person';
import { NestedVotelog } from './votelog';

export interface PeopleVote {
	Id: number;
	Status: string;
	Votelog: NestedVotelog;
	Person: NestedPerson;
}

export type NestedPeopleVote = Pick<PeopleVote, 'Id' | 'Status'>;
