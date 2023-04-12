import React, { memo, useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fetchParties, fetchPolicy, shufflePolicies } from '@/utils';
import SearchBar from '@/components/SearchBar';
import Layout from '@/components/Layout';
import RandomButton from '@/components/RandomButton';
import TemplatePolicyList from '@/components/Template/PolicyList';
import { Party, Policy } from '@/types/components';
import Metadata from '@/components/Metadata';

interface PropsType {
	policies: Policy[];
	parties: Party[];
}

const SearchPolicies: NextPage<PropsType> = ({ policies, parties }) => {
	const router = useRouter();
	const { topic } = router.query;
	const [displayPolicies, setDisplayPolicies] = useState<Policy[]>([]);

	useEffect(() => {
		if (topic) {
			setDisplayPolicies(
				policies.filter((p) => p.Title.includes(topic as string))
			);
		}
	}, [topic]);

	const onClickShuffle = (): void => {
		setDisplayPolicies((curr) => [...shufflePolicies(curr)]);
	};

	const onClear = (): void => {
		setDisplayPolicies([]);
	};

	return (
		<>
			<Metadata />
			<main>
				<Layout title="ค้นหานโยบาย">
					<SearchBar onClear={onClear} />
					<TemplatePolicyList policyList={displayPolicies} partyList={parties}>
						<div className="flex justify-between items-center mt-[32px]">
							<p>เรียงตาม</p>
							<RandomButton onClick={onClickShuffle} />
						</div>
					</TemplatePolicyList>
					{!topic && displayPolicies && (
						<div className="mt-20 text-center typo-b4">
							ไม่พบนโยบายที่คุณค้นหา
							<br /> กรุณาเปลี่ยนคำค้นหา
							<br /> หรือกลับ
							<Link href={'/'} className="font-bold underline ">
								หน้าแรก
							</Link>
						</div>
					)}
				</Layout>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropsType> = async (context) => {
	let policies = await fetchPolicy();
	const parties = await fetchParties();

	policies = policies.map((policy) => {
		if (!policy.Topic) {
			return { ...policy, Topic: 'ไม่ระบุ' };
		}
		return policy;
	});

	return {
		props: {
			policies,
			parties,
		},
	};
};

export default memo(SearchPolicies);
