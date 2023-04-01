import { Policy } from '@/types/components';
import { FunctionComponent, useEffect, useRef } from 'react';
import PolicyCard from './PolicyCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface PropsType {
	policyList: Policy[];
}

const PolicyCardWrapper: FunctionComponent<PropsType> = ({ policyList }) => {
	const refx = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log(policyList);
	}, [policyList]);

	return (
		<>
			<ResponsiveMasonry columnsCountBreakPoints={{ 360: 2, 900: 3 }}>
				<Masonry className="!gap-[16px] [&>*]:!gap-[16px]">
					{policyList.map((item, index) => (
						// <div key={`first-card-${index}`} className="card m-auto w-full">
						<PolicyCard key={`first-card-${index}`} policyInfo={item} />
						// </div>
					))}
				</Masonry>
			</ResponsiveMasonry>
			{/* <div ref={refx} className="flex"></div> */}
		</>
	);
};

export default PolicyCardWrapper;
