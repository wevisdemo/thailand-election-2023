import { Policy } from '@thailand-election-2023/database';
import { imgPrefix } from './path';

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

export const hotTopicList = [
	'เศรษฐกิจ/ภาษี',
	'กองทัพ/ความมั่นคง',
	'สวัสดิการ',
	'แรงงาน/ค่าแรง',
	'กระจายอำนาจ/ท้องถิ่น',
	'รัฐธรรมนูญ/สิทธิเสรีภาพ',
];

export type HotTopicType =
	| 'เศรษฐกิจ/ภาษี'
	| 'กองทัพ/ความมั่นคง'
	| 'สวัสดิการ'
	| 'แรงงาน/ค่าแรง'
	| 'กระจายอำนาจ/ท้องถิ่น'
	| 'รัฐธรรมนูญ/สิทธิเสรีภาพ';

export type TopicType =
	| 'กระจายอำนาจ/ท้องถิ่น'
	| 'กระบวนการยุติธรรม'
	| 'กองทัพ/ความมั่นคง'
	| 'การศึกษา'
	| 'เกษตร/ที่ดินทำกิน'
	| 'ความเท่าเทียม'
	| 'คอร์รัปชัน/อาชญากรรม'
	| 'ต่างประเทศ'
	| 'บริหารราชการ'
	| 'รัฐธรรมนูญ/สิทธิเสรีภาพ'
	| 'แรงงาน/ค่าแรง'
	| 'วัฒนธรรม/กีฬา/ท่องเที่ยว'
	| 'เศรษฐกิจ/ภาษี'
	| 'สวัสดิการ'
	| 'สัญญาร่วมพรรคการเมือง'
	| 'สาธารณสุข/สุขภาพ'
	| 'สาธารณูปโภค/พัฒนาเมือง'
	| 'สิ่งแวดล้อม'
	| 'อื่นๆ';

export const getSmallTopicIconUrl = (key: TopicType) => {
	const dict: TopicMapIcon = {
		'กระจายอำนาจ/ท้องถิ่น': '/icon/topic/distribution-small.svg',
		กระบวนการยุติธรรม: '/icon/topic/justice-small.svg',
		'กองทัพ/ความมั่นคง': '/icon/topic/security-small.svg',
		'เกษตร/ที่ดินทำกิน': '/icon/topic/agriculture-small.svg',
		'คอร์รัปชัน/อาชญากรรม': '/icon/topic/corruption-small.svg',
		บริหารราชการ: '/icon/topic/management-small.svg',
		'รัฐธรรมนูญ/สิทธิเสรีภาพ': '/icon/topic/right-small.svg',
		'แรงงาน/ค่าแรง': '/icon/topic/worker-small.svg',
		'วัฒนธรรม/กีฬา/ท่องเที่ยว': '/icon/topic/culture-small.svg',
		'เศรษฐกิจ/ภาษี': '/icon/topic/economy-small.svg',
		สวัสดิการ: '/icon/topic/welfare-small.svg',
		สัญญาร่วมพรรคการเมือง: '/icon/topic/promise-small.svg',
		'สาธารณสุข/สุขภาพ': '/icon/topic/health-small.svg',
		'สาธารณูปโภค/พัฒนาเมือง': '/icon/topic/infrastructure-small.svg',
		ความเท่าเทียม: '/icon/topic/equality-small.svg',
		ต่างประเทศ: '/icon/topic/foreign-small.svg',
		การศึกษา: '/icon/topic/education-small.svg',
		สิ่งแวดล้อม: '/icon/topic/environment-small.svg',
		อื่นๆ: '/icon/topic/others-small.svg',
	};
	if (dict[key]) return `${imgPrefix}${dict[key]}`;
	return '';
};

export const getMediumTopicIconUrl = (key: TopicType) => {
	const dict: TopicMapIcon = {
		'กระจายอำนาจ/ท้องถิ่น': '/icon/topic/distribution-medium.svg',
		กระบวนการยุติธรรม: '/icon/topic/justice-medium.svg',
		'กองทัพ/ความมั่นคง': '/icon/topic/security-medium.svg',
		'เกษตร/ที่ดินทำกิน': '/icon/topic/agriculture-medium.svg',
		'คอร์รัปชัน/อาชญากรรม': '/icon/topic/corruption-medium.svg',
		บริหารราชการ: '/icon/topic/management-medium.svg',
		'รัฐธรรมนูญ/สิทธิเสรีภาพ': '/icon/topic/right-medium.svg',
		'แรงงาน/ค่าแรง': '/icon/topic/worker-medium.svg',
		'วัฒนธรรม/กีฬา/ท่องเที่ยว': '/icon/topic/culture-medium.svg',
		'เศรษฐกิจ/ภาษี': '/icon/topic/economy-medium.svg',
		สวัสดิการ: '/icon/topic/welfare-medium.svg',
		สัญญาร่วมพรรคการเมือง: '/icon/topic/promise-medium.svg',
		'สาธารณสุข/สุขภาพ': '/icon/topic/health-medium.svg',
		'สาธารณูปโภค/พัฒนาเมือง': '/icon/topic/infrastructure-medium.svg',
		ความเท่าเทียม: '/icon/topic/equality-medium.svg',
		ต่างประเทศ: '/icon/topic/foreign-medium.svg',
		การศึกษา: '/icon/topic/education-medium.svg',
		สิ่งแวดล้อม: '/icon/topic/environment-medium.svg',
		อื่นๆ: '/icon/topic/others-medium.svg',
	};
	if (dict[key]) return `${imgPrefix}${dict[key]}`;
	return '';
};

export const getBigTopicIconUrl = (key: HotTopicType) => {
	const dict: HotTopicMapIcon = {
		'กระจายอำนาจ/ท้องถิ่น': '/icon/topic/distribution-big.svg', //
		'กองทัพ/ความมั่นคง': '/icon/topic/security-big.svg', //
		'รัฐธรรมนูญ/สิทธิเสรีภาพ': '/icon/topic/right-big.svg', //
		'แรงงาน/ค่าแรง': '/icon/topic/worker-big.svg', //
		'เศรษฐกิจ/ภาษี': '/icon/topic/economy-big.svg', //
		สวัสดิการ: '/icon/topic/welfare-big.svg', //
	};
	if (dict[key]) return `${imgPrefix}${dict[key]}`;
	return '';
};
