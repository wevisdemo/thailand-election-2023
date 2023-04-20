import * as React from 'react';

export interface CircleWrapperProps {
	title: string;
	styles?: string;
}

export interface SquareWrapperProps {
	children: React.ReactNode;
	styles?: string;
	bgColor?: string;
	borderType?: string;
}

export interface ArrowsProps {
	styles?: string;
}

export interface SqualWithFace {
	children: React.ReactNode;
}
