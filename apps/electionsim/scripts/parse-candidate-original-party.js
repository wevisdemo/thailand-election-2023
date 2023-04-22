import { TheyWorkForUs } from '@thailand-election-2023/database';
import { from } from 'arquero';
import fs from 'fs';

const candidates = await TheyWorkForUs.People.fetchAll({
	where: '(MpType,eq,แบ่งเขต)',
	fields: 'Name,MpProvince,MpZone,PeoplePartyHistory',
});

const partyChanges = candidates
	.map(({ Name, MpProvince, MpZone, PeoplePartyHistory }) => ({
		name: Name,
		province: MpProvince,
		electorialDistrictNumber: +MpZone,
		previousParties: PeoplePartyHistory.map(({ Party }) => Party?.Name),
	}))
	.map(({ previousParties, ...rest }) => ({
		...rest,
		fromParty: previousParties[0],
	}));

fs.writeFileSync('./party-original.csv', from(partyChanges).toCSV());
