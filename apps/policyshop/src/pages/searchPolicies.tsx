import React, { memo, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { fetchParties, fetchPolicy, shufflePolicies } from '@/utils';
import SearchBar from '@/components/SearchBar';
import Layout from '@/components/Layout';
import RandomButton from '@/components/RandomButton';
import TemplatePolicyList from '@/components/Template/PolicyList';
import { Party, Policy } from '@/types/components';
import * as loadingLottie from '../..//public/loading.json';

interface PropsType {
	policies: Policy[];
	parties: Party[];
}

const SearchPolicies: NextPage<PropsType> = ({ policies, parties }) => {
	const router = useRouter();
	const { topic } = router.query;
	const [isReady, setIsReady] = useState<boolean>(false);
	const [displayPolicies, setDisplayPolicies] = useState<Policy[]>([]);

	useEffect(() => {
		if (topic) {
			setDisplayPolicies(
				policies.filter((p) => p.Title.includes(topic as string))
			);
		}
	}, [topic]);

	useEffect(() => {
		setIsReady(true);
	}, []);

	const onClickShuffle = (): void => {
		setDisplayPolicies((curr) => [...shufflePolicies(curr)]);
	};

	const onClear = (): void => {
		setDisplayPolicies([]);
	};

	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingLottie,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<>
			<main>
				{isReady ? (
					<Layout title="ค้นหานโยบาย">
						<SearchBar onClear={onClear} />
						<TemplatePolicyList
							policyList={displayPolicies}
							partyList={parties}
							page="SearchPolicies"
						>
							<div className="flex justify-end items-center mt-[32px]">
								<RandomButton onClick={onClickShuffle} />
							</div>
						</TemplatePolicyList>
					</Layout>
				) : (
					<Lottie options={lottieOptions}></Lottie>
				)}
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
