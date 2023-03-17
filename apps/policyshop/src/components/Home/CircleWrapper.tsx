import React, { FC } from 'react';
import { CircleWrapperProps } from '@/types/home';
import { ArrowsType1 } from '../Arrows';

const CircleWrapper: FC<CircleWrapperProps> = ({ title, styles }) => {
	return (
		<div
			className={`border-[3px]  font-bold  border-black rounded-full w-[140px] h-[140px] flex items-center flex-col  justify-center ${styles}`}
		>
			<div
				dangerouslySetInnerHTML={{
					__html: title,
				}}
			/>
			<ArrowsType1 styles="mt-3" />
		</div>
	);
};

export default CircleWrapper;
