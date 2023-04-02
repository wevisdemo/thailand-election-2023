import { Policy } from '@thailand-election-2023/database';

export const shufflePolicies = (policies: Policy[]): Policy[] => {
	const result = policies.sort(() => Math.random() - 0.5);
	return result;
};
