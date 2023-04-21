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
import ModalInfo from '@/components/Party/ModalInfo';
import Metadata from '@/components/Metadata';

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

interface PropsType {
	parties: Party[];
	policies: Policy[];
	upToDate: string;
}

const PartyPage: NextPage<PropsType> = ({ parties, policies, upToDate }) => {
	const router = useRouter();
	const { name } = router.query;
	const [party, setParty] = useState<Party>();
	const [displayPolicies, setDisplayPolicies] = useState<Policy[]>(policies);
	const [hotPolicies, setHotPolicies] = useState<Policy[]>([]);
	const [optionPolicies, setOptionPolicies] = useState<
		IDropdownOption<string>[]
	>([]);
	const [chooseTopic, setChooseTopic] =
		useState<IDropdownOption<string> | null>(null);

	const formatParty = useCallback(async (): Promise<void> => {
		const data: Party[] = parties;
		const selectedParty: Party[] = data.filter((party) => party.Name === name);
		setParty(selectedParty[0]);
	}, [name]);

	const formatPolicies = useCallback(async (): Promise<void> => {
		const data: Policy[] = policies;
		const policyList: Policy[] = data.filter((p) => p.Party.Name === name);
		const options: IDropdownOption<string>[] = formatOption(
			Object.keys(groupBy(policyList, 'Topic')),
			'policies'
		);

		setDisplayPolicies(policyList);
		setHotPolicies(policyList.slice(0, 1));

		await setOptionPolicies([{ label: 'นโยบายทั้งหมด' }, ...options]);
	}, [name]);

	const handleHotPolicies = () => {
		setHotPolicies(displayPolicies);
	};

	const onClickShuffle = () => {
		setDisplayPolicies((curr) => [...shufflePolicies(curr)]);
	};

	useEffect(() => {
		if (name) {
			formatParty();
			formatPolicies();
		}
	}, [name]);

	return (
		<>
			<Metadata />
			<main>
				<Layout title="พรรคนี้มีอะไรมาขายบ้าง">
					<div className="relative ">
						<ModalInfo party={party} />
						<Intro party={party} upToDate={upToDate} />
						<div className="mt-[10px]">
							<PercentPolicies policies={displayPolicies} />
						</div>
						<div className="py-10 mt-10 border-y border-highlight-2">
							<div className="flex items-center justify-between ">
								<p className="font-bold typo-h7">นโยบายไฮไลท์</p>
								<button className="typo-b4" onClick={handleHotPolicies}>
									ดูทั้งหมด
								</button>
							</div>
							<TemplatePolicyList
								policyList={hotPolicies}
								partyList={parties}
							/>
						</div>
						<p className="mt-10 font-bold typo-h6">นโยบายตามประเด็น</p>
						<TemplatePolicyList
							policyList={displayPolicies}
							partyList={parties}
						>
							<Dropdown
								options={optionPolicies}
								currentOption={chooseTopic}
								onSelect={setChooseTopic}
							/>
							<div className="flex justify-end items-center mt-[32px]">
								<RandomButton onClick={onClickShuffle} />
							</div>
						</TemplatePolicyList>
					</div>
				</Layout>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps<PropsType> = async () => {
	let policies = await fetchPolicy();
	const parties = await fetchParties();
	const upToDate = new Date().toLocaleDateString('TH-th');

	policies = policies.map((policy) => {
		if (!policy.Topic) {
			return { ...policy, Topic: 'ไม่ระบุ' };
		}
		return policy;
	});
	return {
		props: { parties, policies, upToDate },
	};
};

export default PartyPage;
