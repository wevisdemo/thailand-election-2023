import { imgPrefix } from '@/utils/path';
import { FunctionComponent } from 'react';

interface PropsType {
	onClick: () => void;
}

const RandomButton: FunctionComponent<PropsType> = ({ onClick }) => {
	return (
		<div
			className="flex justify-between items-center w-fit py-[8px] px-[16px] border-[1px] border-[var(--color-black)] rounded-[16px] hover:cursor-pointer"
			onClick={onClick}
		>
			<p className="typo-b4">แรนด้อมใหม่</p>
			<img
				src={`${imgPrefix}/shuffle.svg`}
				alt="shuffle"
				className="ml-[8px]"
			/>
		</div>
	);
};

export default RandomButton;
