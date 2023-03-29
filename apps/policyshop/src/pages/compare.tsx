import CompareFilter from '@/components/Compare/Filter';
import Layout from '@/components/Layout';
import PolicyCardWrapper from '@/components/PolicyCardWrapper';
import RandomButton from '@/components/RandomButton';
import { Policy } from '@/types/components';
import { fetchPolicy } from '@/utils/fetchData';
import { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

interface PropsType {
	policies: Policy[];
}

const ComparePage: NextPage<PropsType> = ({ policies }) => {
	const [displayPolicies1, setDisplayPolicies1] = useState<Policy[]>([]);
	const [displayPolicies2, setDisplayPolicies2] = useState<Policy[]>([]);

	useEffect(() => {}, []);

	return (
		<Layout title="เปรียบเทียบนโยบาย">
			<>
				<CompareFilter
					policies={policies}
					setDisplayPolicies1={setDisplayPolicies1}
					setDisplayPolicies2={setDisplayPolicies2}
				/>
				<div className="flex justify-between items-center mt-[24px]">
					<p>เรียงตาม</p>
					<RandomButton onClick={() => {}} />
				</div>
				<div className="mt-[16px]">
					<PolicyCardWrapper
						policyList={displayPolicies1}
						secondList={displayPolicies2}
					/>
				</div>
			</>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<PropsType> = async (context) => {
	const policies = await fetchPolicy();
	return {
		props: { policies },
	};
};

export default ComparePage;
