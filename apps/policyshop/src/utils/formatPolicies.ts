import { IDropdownOption, Policy } from '@/types/components';
export const formatPolicies = (
	rawData: Policy[],
	chooseParty: IDropdownOption<string> | null,
	chooseTopic: IDropdownOption<string> | null
) => {
	const policies = rawData?.filter((p: Policy) => {
		if (
			chooseParty &&
			chooseTopic &&
			chooseParty?.label != 'ดูของทุกพรรค' &&
			chooseTopic?.label != 'นโยบายทั้งหมด'
		) {
			return (
				p.Party.Name == chooseParty?.label && p.Topic === chooseTopic?.label
			);
		}
		if (chooseParty && chooseParty?.label != 'ดูของทุกพรรค') {
			return p.Party.Name == chooseParty?.label;
		}
		if (chooseTopic && chooseTopic?.label != 'นโยบายทั้งหมด') {
			return p.Topic === chooseTopic?.label;
		}
		return rawData;
	});
	return policies;
};
