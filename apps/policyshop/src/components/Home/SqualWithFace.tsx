import React, { FC } from 'react';
import { SqualWithFace } from '@/types/home';
import { imgPrefix } from '@/utils/path';

const SqualWithFace: FC<SqualWithFace> = ({ children }) => {
	return (
		<div
			className={`  relative border-[2px] w-full border-gray-3 text-gray-3 rounded-[20px] p-5 px-2 my-2 `}
		>
			{children}
			<img
				className="h-[35px] absolute bottom-0 translate-y-[60%] right-[10%]"
				src={`${imgPrefix}/face.svg`}
				alt="arrow"
			/>
		</div>
	);
};

export default SqualWithFace;
