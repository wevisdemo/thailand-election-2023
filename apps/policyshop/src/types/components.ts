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
	topicName: string | undefined;
}
