import { ImageAttachment } from './image';

export interface Party {
	Name: string;
	Color: string | null;
	PartyType: string | null;
	PartyOrdinal: string | null;
	PartyGroup: string;
	Description: string;
	EstablishedDate: string;
	DissolvedDate: string | null;
	Speaker: string | null;
	FirstDeputySpeaker: string | null;
	SecondDeputySpeaker: string | null;
	Whip: string | null;
	OppositionLeader: string | null;
	PartyLeader: string | null;
	PartySecretary: string | null;
	Website: string | null;
	Facebook: string | null;
	Twitter: string | null;
	IsActive: boolean | null;
	Id: number;
	EnName: string | null;
	Images: ImageAttachment[] | null;
}

export type NestedParty = Pick<Party, 'Id' | 'Name'>;
