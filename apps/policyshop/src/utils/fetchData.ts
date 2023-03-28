import { TheyWorkForUs } from '@thailand-election-2023/database';
import { Party, Policy } from '@/types/components';

export const fetchParties = async (): Promise<Party[]> => {
	const data: Party[] = await TheyWorkForUs.Parties.fetchAll({
		where: `(PartyType,eq,พรรค)`,
	});
	return data;
};

export const fetchPolicy = async (): Promise<Policy[]> => {
	const data: Policy[] = await TheyWorkForUs.Policies.fetchAll({});
	return data;
};
