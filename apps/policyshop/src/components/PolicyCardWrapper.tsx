import { Policy } from '@/types/components';
import { FunctionComponent, useEffect, useRef } from 'react';
import PolicyCard from './PolicyCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Party } from '@thailand-election-2023/database';
import SearchNotFound from './SearchNotFound';

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
				{policyList.length > 0 ? (
					<Masonry className="!gap-[16px] [&>*]:!gap-[16px]">
						{policyList.map((item, index) => (
							// <div key={`first-card-${index}`} className="w-full m-auto card">
							<PolicyCard
								key={`first-card-${index}`}
								policyInfo={item}
								partyInfo={findParty(item.Party.Name)}
							/>
							// </div>
						))}
					</Masonry>
				) : (
					<SearchNotFound />
				)}
			</ResponsiveMasonry>
			{/* <div ref={refx} className="flex"></div> */}
		</>
	);
};

export default PolicyCardWrapper;
