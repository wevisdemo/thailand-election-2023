import { IPolicyCard } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import md from 'markdown-it';
import { FunctionComponent } from 'react';

interface PropsType {
	policyInfo: IPolicyCard;
}

const PolicyCard: FunctionComponent<PropsType> = ({ policyInfo }) => {
	return (
		<div className="bg-[var(--color-white)] border-[1px] border-[var(--color-gray-2)] rounded-[10px] overflow-hidden">
			<div className="p-[12px] ">
				<div className="flex items-center">
					<img
						className="w-[22px]"
						src={policyInfo.party_logo_src}
						alt="party-logo"
					/>
					<span className="ml-[4px] typo-b7 font-bold">
						{policyInfo.party_name}
					</span>
				</div>
				<div
					className={`relative mt-[8px] w-full pb-[100%] h-0 rounded-[5px]`}
					style={{ backgroundColor: policyInfo.background_color }}
				>
					<span className="absolute px-[4px] top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-center typo-b4 text-[var(--color-white)] font-bold">
						{policyInfo.text_image}
					</span>
				</div>
				<div
					className="mt-[8px] typo-b5"
					dangerouslySetInnerHTML={{
						__html: md().render(policyInfo.description),
					}}
				/>
			</div>
			<div className="py-[8px] px-[16px] flex items-center bg-[var(--color-highlight-1)]">
				<img
					className="w-[20px]"
					src={policyInfo.category_icon_src}
					alt="cat-icon"
				/>
				<span className="ml-[4px] typo-b7">{policyInfo.category_text}</span>
			</div>
		</div>
	);
};

export default PolicyCard;
