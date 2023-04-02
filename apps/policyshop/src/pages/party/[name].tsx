import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { Policy, Party, IDropdownOption, SetPaths } from '@/types/components';
import {
	fetchParties,
	fetchPolicy,
	formatOption,
	groupBy,
	shufflePolicies,
} from '@/utils';
import Intro from '@/components/Party/Intro';
import PercentPolicies from '@/components/Party/percentPolicies';
import TemplatePolicyList from '@/components/Template/PolicyList';
import Dropdown from '@/components/Dropdown';
import RandomButton from '@/components/RandomButton';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await fetchParties();
	let setPaths: SetPaths[] = [];
	data.map((party) =>
		setPaths.push({
			params: {
				name: party.Name,
			},
		})
	);
	return {
		paths: setPaths,
		fallback: false,
	};
};

const PartyPage: NextPage = () => {
	const router = useRouter();
	const { name } = router.query;
	const [party, setParty] = useState<Party>();
	const [policies, setPolicies] = useState<Policy[]>([]);
	const [hotPolicies, setHotPolicies] = useState<Policy[]>([]);
	const [optionPolicies, setOptionPolicies] = useState<
		IDropdownOption<string>[]
	>([]);
	const [chooseTopic, setChooseTopic] =
		useState<IDropdownOption<string> | null>(null);

	const formatParty = useCallback(async (): Promise<void> => {
		const data: Party[] = await fetchParties();
		const selectedParty: Party[] = data.filter((party) => party.Name === name);
		setParty(selectedParty[0]);
	}, [name]);

	const formatPolicies = useCallback(async (): Promise<void> => {
		const data: Policy[] = await fetchPolicy();
		const policyList: Policy[] = data.filter((p) => p.Party.Name === name);
		const options: IDropdownOption<string>[] = formatOption(
			Object.keys(groupBy(policyList, 'Topic')),
			'policies'
		);

		setPolicies(policyList);
		setHotPolicies(policyList.slice(0, 1));

		await setOptionPolicies([{ label: 'นโยบายทั้งหมด' }, ...options]);
	}, [name]);

	const handleHotPolicies = () => {
		setHotPolicies(policies);
	};

	const onClickShuffle = () => {
		setPolicies((curr) => [...shufflePolicies(curr)]);
	};

	useEffect(() => {
		if (name) {
			formatParty();
			formatPolicies();
		}
	}, [name]);

	return (
		<Layout title="พรรคนี้มีอะไรมาขายบ้าง">
			<div id="header">
				<Intro party={party} />
				<PercentPolicies />
				<div className="py-10 mt-10 border-y border-highlight-2">
					<div className="flex items-center justify-between ">
						<p className="font-bold typo-h7">นโยบายไฮไลท์</p>
						<button className="typo-b4" onClick={handleHotPolicies}>
							ดูทั้งหมด
						</button>
					</div>
					<TemplatePolicyList policyList={hotPolicies} />
				</div>
				<p className="mt-10 font-bold typo-h6">นโยบายตามประเด็น</p>
				<TemplatePolicyList policyList={policies}>
					<Dropdown
						options={optionPolicies}
						currentOption={chooseTopic}
						onSelect={setChooseTopic}
					/>
					<div className="flex justify-between items-center mt-[32px]">
						<p>เรียงตาม</p>
						<RandomButton onClick={onClickShuffle} />
					</div>
				</TemplatePolicyList>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default PartyPage;
