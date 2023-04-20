import { Party, Policy } from '@/types/components';
import { TopicType, getSmallTopicIconUrl } from '@/utils/data';
import { getTopicIconSrc, imgPrefix } from '@/utils/path';
import { FunctionComponent } from 'react';
interface PropsType {
	policyInfo: Policy;
	partyInfo: Party | null;
}

const PolicyCard: FunctionComponent<PropsType> = ({
	policyInfo,
	partyInfo,
}) => {
	var md = require('markdown-it')();

	const getLogoUrl = (): string => {
		if (!partyInfo?.Images) {
			return '';
		}
		if (partyInfo.Images.length === 0) {
			return '';
		}
		return partyInfo.Images[0].url;
	};

	return (
		<div className="bg-[var(--color-white)] border-[1px] border-[var(--color-gray-2)] rounded-[10px] overflow-hidden h-fit w-full max-w-[155px] md:max-w-[232px] mx-auto">
			<div className="p-[12px] ">
				<div className="flex items-center">
					{getLogoUrl() && (
						<img
							className="w-[22px] rounded-full"
							src={getLogoUrl()}
							alt="party-logo"
						/>
					)}

					<span className="ml-[4px] typo-b7 font-bold">
						{policyInfo.Party.Name}
					</span>
				</div>
				<div
					className={`relative mt-[8px] w-full pb-[100%] h-0 rounded-[5px] bg-red-400`}
					style={{
						backgroundColor: partyInfo?.Color || 'var(--color-gray-3)',
					}}
				>
					<span
						className={
							'card-title absolute px-[4px] top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-center typo-b4 text-[var(--color-white)] font-bold'
						}
					>
						{policyInfo.Title}
					</span>
				</div>
				{policyInfo.Explain && (
					<div
						className="mt-[8px] typo-b5 list"
						dangerouslySetInnerHTML={{
							__html: md.render(policyInfo.Explain || '-'),
						}}
					/>
				)}
			</div>
			<div className="py-[8px] px-[16px] flex items-center bg-[var(--color-highlight-1)]">
				{getSmallTopicIconUrl(policyInfo.Topic as TopicType) && (
					<img
						className="w-[20px]"
						src={getSmallTopicIconUrl(policyInfo.Topic as TopicType)}
						alt="cat-icon"
					/>
				)}
				<span className="ml-[4px] typo-b7">{policyInfo.Topic}</span>
			</div>
		</div>
	);
};

export default PolicyCard;
