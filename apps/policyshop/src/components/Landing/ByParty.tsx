import React, { FC } from 'react';
import { ByPartyProps } from '@/types/components';
import CircleTopicWrapper from '@/components/CircleTopicWrapper';
import { Party } from '@thailand-election-2023/database/src/models/party';
import Link from 'next/link';

const ByParty: FC<ByPartyProps> = ({ parties }) => {
	return (
		<div className="container pt-20 mx-auto" id="ByParty">
			<p className="px-4 py-2 font-bold typo-h6 bg-highlight-2">
				ดูนโยบายตามพรรค
			</p>
			<div className="grid justify-center grid-cols-4 m-auto text-center w-fit">
				{parties?.map((d: Party) => (
					<Link
						href={`/party/${d.Name}`}
						className="mt-4 mx-[8px] md:mx-[10px]"
						key={d.Name}
					>
						<CircleTopicWrapper name={d.Name}>
							{d.Images && <img src={d.Images[0].url} alt="party-logo" />}
						</CircleTopicWrapper>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ByParty;
