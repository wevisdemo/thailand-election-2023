import { Party } from '@/types/components';
export const formatOption = (data: string[] | Party[], name: string) => {
	return data.map((p: any) => {
		return {
			label: name === 'parties' ? p.Name : p,
		};
	});
};
