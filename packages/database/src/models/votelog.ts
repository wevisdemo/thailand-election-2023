import { NestedPeopleVote } from './people-vote';

export interface Votelog {
	Title: string;
	IsActive: boolean;
	LegalTitle: string;
	Meeting: string;
	VoteDate: string;
	IsPassed: boolean;
	DescriptionTh: string;
	Document0Title: string;
	Document0Link: string;
	Document1Title: string | null;
	Document1Link: string | null;
	MeetingId: string;
	Reference: string;
	Id: number;
	PeopleVotes: NestedPeopleVote[];
}

export type NestedVotelog = Pick<Votelog, 'Id' | 'Title'>;
