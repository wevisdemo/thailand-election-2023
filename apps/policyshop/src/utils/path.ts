export const imgPrefix = '/policyshop';

interface Dictionary {
	[key: string]: string;
}

export const getTopicIconSrc = (topic: string) => {
	const mapper: Dictionary = {
		เศรษฐิกิจ: `${imgPrefix}/icon/category/economic.svg`,
	};
	return mapper[topic] || '';
};
