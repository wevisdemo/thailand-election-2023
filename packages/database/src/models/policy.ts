import { NestedParty } from './party';

export interface Policy {
	Id: number;
	Title: string;
	Topic: string;
	Explain: string;
	Source: string;
	Party: NestedParty;
}
