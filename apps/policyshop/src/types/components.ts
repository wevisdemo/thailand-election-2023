import { Party } from '@thailand-election-2023/database/src/models/party';

export interface IDropdownOption<T> {
	label: string;
	value: T;
}

export interface IPolicyCard {
	party_name: string;
	party_logo_src: string;
	background_color: string;
	text_image: string;
	description: string;
	category_icon_src: string;
	category_text: string;
}

export interface SquareTopicProps {
	topicName: string | undefined;
}

export interface CircleTopicWrapper {
	children?: React.ReactNode;
	name?: string;
	totalTopic?: number;
}

export interface IPolicyCategory {
	category: string;
	count: number;
	percent: number;
	color: string;
}

export interface ByPartyProps {
	parties?: Party[];
}
