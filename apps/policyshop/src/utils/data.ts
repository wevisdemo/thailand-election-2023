import { Policy } from '@thailand-election-2023/database';

export const shufflePolicies = (policies: Policy[]): Policy[] => {
	const result = policies.sort(() => Math.random() - 0.5);
	return result;
};

type TopicMapIcon = {
	[key in TopicType]: string;
};

type HotTopicMapIcon = {
	[key in HotTopicType]: string;
};

export const hotTopics = [
	'คอร์รัปชัน',
	'เศรษฐกิจ',
	'การศึกษา',
	'ต่างประเทศ',
	'การบริหารราชการ',
	'ความมั่นคง',
];

export type HotTopicType =
	| 'คอร์รัปชัน'
	| 'เศรษฐกิจ'
	| 'การศึกษา'
	| 'ต่างประเทศ'
	| 'การบริหารราชการ'
	| 'ความมั่นคง';

export type TopicType =
	| 'ความมั่นคง'
	| 'ความเท่าเทียม'
	| 'การบริหารราชการ'
	| 'ต่างประเทศ'
	| 'คอร์รัปชัน'
	| 'การศึกษา'
	| 'แรงงาน'
	| 'สิ่งแวดล้อม'
	| 'เศรษฐกิจ'
	| 'การแพทย์'
	| 'อื่นๆ'
	| 'วัฒนธรรม';

export const getSmallTopicIconUrl = (key: TopicType) => {
	const dict: TopicMapIcon = {
		ความมั่นคง: '/icon/topic/security-small.svg',
		ความเท่าเทียม: '/icon/topic/equality-small.svg',
		การบริหารราชการ: '/icon/topic/management-small.svg',
		ต่างประเทศ: '/icon/topic/foreign-small.svg',
		คอร์รัปชัน: '/icon/topic/corruption-small.svg',
		การศึกษา: '/icon/topic/education-small.svg',
		แรงงาน: '/icon/topic/worker-small.svg',
		สิ่งแวดล้อม: '/icon/topic/environment-small.svg',
		เศรษฐกิจ: '/icon/topic/economy-small.svg',
		การแพทย์: '/icon/topic/health-small.svg',
		อื่นๆ: '/icon/topic/others-small.svg',
		วัฒนธรรม: '/icon/topic/curlture-small.svg',
	};
	return dict[key];
};

export const getMediumTopicIconUrl = (key: TopicType) => {
	const dict: TopicMapIcon = {
		ความมั่นคง: '/icon/topic/security-medium.svg',
		ความเท่าเทียม: '/icon/topic/equality-medium.svg',
		การบริหารราชการ: '/icon/topic/management-medium.svg',
		ต่างประเทศ: '/icon/topic/foreign-medium.svg',
		คอร์รัปชัน: '/icon/topic/corruption-medium.svg',
		การศึกษา: '/icon/topic/education-medium.svg',
		แรงงาน: '/icon/topic/worker-medium.svg',
		สิ่งแวดล้อม: '/icon/topic/environment-medium.svg',
		เศรษฐกิจ: '/icon/topic/economy-medium.svg',
		การแพทย์: '/icon/topic/health-medium.svg',
		อื่นๆ: '/icon/topic/others-medium.svg',
		วัฒนธรรม: '/icon/topic/curlture-medium.svg',
	};
	return dict[key];
};

export const getBigTopicIconUrl = (key: HotTopicType) => {
	const dict: TopicMapIcon = {
		ความมั่นคง: '/icon/topic/security-medium.svg',
		ความเท่าเทียม: '/icon/topic/equality-medium.svg',
		การบริหารราชการ: '/icon/topic/management-medium.svg',
		ต่างประเทศ: '/icon/topic/foreign-medium.svg',
		คอร์รัปชัน: '/icon/topic/corruption-medium.svg',
		การศึกษา: '/icon/topic/education-medium.svg',
		แรงงาน: '/icon/topic/worker-medium.svg',
		สิ่งแวดล้อม: '/icon/topic/environment-medium.svg',
		เศรษฐกิจ: '/icon/topic/economy-medium.svg',
		การแพทย์: '/icon/topic/health-medium.svg',
		อื่นๆ: '/icon/topic/others-medium.svg',
		วัฒนธรรม: '/icon/topic/curlture-medium.svg',
	};
	return dict[key];
};
