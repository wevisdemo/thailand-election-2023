import { ImageAttachment } from './image';
import { NestedPeopleVote } from './people-vote';

export interface Person {
	Title: string;
	Name: string;
	IsMp: boolean;
	IsSenator: boolean;
	IsCabinet: boolean;
	IsActive: boolean;
	MpType: string;
	MpProvince: string | null;
	MpZone: string | null;
	MpList: '22';
	Vote: string | null;
	SenatorMethod: string | null;
	CabinetPosition0: string | null;
	CabinetPosition1: string | null;
	Gender: string;
	Birthdate: string;
	Education: string | null;
	Graduation: string | null;
	Degree: string | null;
	ExOccupation0: string | null;
	ExOccupation1: string | null;
	OccupationGroup: string | null;
	Quotes: string | null;
	QuotesUrl: string | null;
	Asset: string | null;
	Facebook: string | null;
	Twitter: string | null;
	Bio: string | null;
	Id: number;
	Debt: string | null;
	NcpoRelation: boolean;
	Images: ImageAttachment[];
	PeopleVotes: NestedPeopleVote[];
	PeoplePartyHistory: NestedPeoplePartyHistory[];
}

export interface NestedPeoplePartyHistory {
	EstablishedDate: string;
	Party: {
		Id: number;
		Name: string;
	};
}

export type NestedPerson = Pick<Person, 'Id' | 'Name'>;
