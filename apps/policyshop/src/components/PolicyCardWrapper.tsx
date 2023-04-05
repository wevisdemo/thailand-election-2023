import { Policy } from '@/types/components';
import { FunctionComponent, useEffect, useRef } from 'react';
import PolicyCard from './PolicyCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Party } from '@thailand-election-2023/database';

interface PropsType {
	policyList: Policy[];
	partyList: Party[];
}

const PolicyCardWrapper: FunctionComponent<PropsType> = ({
	policyList,
	partyList,
}) => {
	const findParty = (partyName: string) => {
		const result = partyList.find((party) => party.Name === partyName);
		return result || null;
	};

	return (
		<>
			<ResponsiveMasonry columnsCountBreakPoints={{ 360: 2, 900: 3 }}>
				<Masonry className="!gap-[16px] [&>*]:!gap-[16px]">
					{policyList.map((item, index) => (
						// <div key={`first-card-${index}`} className="card m-auto w-full">
						<PolicyCard
							key={`first-card-${index}`}
							policyInfo={item}
							partyInfo={findParty(item.Party.Name)}
						/>
						// </div>
					))}
				</Masonry>
			</ResponsiveMasonry>
			{/* <div ref={refx} className="flex"></div> */}
		</>
	);
};

export default PolicyCardWrapper;
