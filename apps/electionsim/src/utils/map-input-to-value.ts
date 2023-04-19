import { ScaleAns } from '../stores/input';

export const mapPositiveRatio = {
	[ScaleAns.Scale0]: 0,
	[ScaleAns.Scale10]: 0.1,
	[ScaleAns.Scale30]: 0.3,
	[ScaleAns.Scale50]: 0.5,
	[ScaleAns.Scale70]: 0.7,
	[ScaleAns.Scale90]: 0.9,
	[ScaleAns.Scale100]: 1,
};

export const mapRangeRatio = {
	[ScaleAns.Scale0]: -0.3,
	[ScaleAns.Scale10]: -0.2,
	[ScaleAns.Scale30]: -0.1,
	[ScaleAns.Scale50]: 0,
	[ScaleAns.Scale70]: 0.1,
	[ScaleAns.Scale90]: 0.2,
	[ScaleAns.Scale100]: 0.3,
};
