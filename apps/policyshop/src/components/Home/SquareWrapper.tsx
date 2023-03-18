import React, { FC } from 'react';
import { SquareWrapperProps } from '@/types/home';

const SquareWrapper: FC<SquareWrapperProps> = ({
	children,
	styles,
	bgColor,
	borderType,
}) => {
	return (
		<div
			className={` ${styles} ${bgColor} ${borderType} border-[3px] w-full border-black rounded-[20px] p-4 my-2 `}
		>
			{children}
		</div>
	);
};

export default SquareWrapper;
