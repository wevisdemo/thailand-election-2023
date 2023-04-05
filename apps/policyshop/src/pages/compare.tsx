import Clipboard from '@/components/Clipboard';
import CompareFilter from '@/components/Compare/Filter';
import ComparePolicyCardWrapper from '@/components/Compare/PolicyCardWrapper';
import Layout from '@/components/Layout';
import PolicyCard from '@/components/PolicyCard';
import RandomButton from '@/components/RandomButton';
import { Party, Policy } from '@/types/components';
import { shufflePolicies } from '@/utils';
import { fetchParties, fetchPolicy } from '@/utils/fetchData';
import { GetStaticProps, NextPage } from 'next';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

interface PropsType {
	policies: Policy[];
	parties: Party[];
}

const ComparePage: NextPage<PropsType> = ({ policies, parties }) => {
	const [displayPolicies1, setDisplayPolicies1] = useState<Policy[]>([]);
	const [displayPolicies2, setDisplayPolicies2] = useState<Policy[]>([]);

	const onClickShuffle = () => {
		setDisplayPolicies1((curr) => [...shufflePolicies(curr)]);
		setDisplayPolicies2((curr) => [...shufflePolicies(curr)]);
	};

	return (
		<Layout title="เปรียบเทียบนโยบาย">
			<Clipboard styles="mt-[32px]" />
			<>
				<CompareFilter
					policies={policies}
					setDisplayPolicies1={setDisplayPolicies1}
					setDisplayPolicies2={setDisplayPolicies2}
				/>
				<div className="flex justify-between items-center mt-[24px]">
					<p>เรียงตาม</p>
					<RandomButton onClick={onClickShuffle} />
				</div>
				<div className="mt-[16px]">
					<ComparePolicyCardWrapper
						policyList={displayPolicies1}
						secondList={displayPolicies2}
						partyList={parties}
					/>
				</div>
			</>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PropsType> = async (context) => {
	const policies = await fetchPolicy();
	const parties = await fetchParties();
	return {
		props: { policies, parties },
	};
};

export default ComparePage;
