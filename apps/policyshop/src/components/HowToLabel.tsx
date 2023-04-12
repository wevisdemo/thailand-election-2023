import { imgPrefix } from '@/utils/path';
import { FC } from 'react';
import { onOpenModal } from '@/utils';

const HowToLabel: FC = () => {
	return (
		<div className="flex items-center justify-between py-3 px-4  font-bold typo-b5 bg-highlight-3 mb-8 mt-2 rounded-[10px]">
			<div className="flex">
				<img src={`${imgPrefix}/child.svg`} alt="child" className="mr-2 " />
				<p>เส้นทางการผลักดันนโยบาย</p>
			</div>
			<button className="underline " onClick={() => onOpenModal()}>
				อ่านต่อ
			</button>
		</div>
	);
};

export default HowToLabel;
