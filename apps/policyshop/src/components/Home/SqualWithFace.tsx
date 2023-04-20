import React, { FC } from 'react';
import { SqualWithFace } from '@/types/home';
import { imgPrefix } from '@/utils/path';

const SqualWithFace: FC<SqualWithFace> = ({ children }) => {
	return (
		<div
			className={`  relative border-[2px] w-full border-gray-2 text-gray-3 rounded-[20px] p-5 px-[10px] my-2 `}
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
