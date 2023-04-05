import React, { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import TemplatePolicyList from '@/components/Template/PolicyList';
import { IDropdownOption, Policy, Party, SetPaths } from '@/types/components';
import {
	groupBy,
	replaceUrl,
	formatPolicies,
	formatOption,
	fetchParties,
	fetchPolicy,
	shufflePolicies,
} from '@/utils';
import Dropdown from '@/components/Dropdown';
import HowToLabel from '@/components/HowToLabel';
import Clipboard from '@/components/Clipboard';
import RandomButton from '@/components/RandomButton';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
	const data = await fetchPolicy();
	const titles = ['นโยบายประเด็นร้อน', 'แบ่งตามประเด็น'];
	const topics = ['นโยบายทั้งหมด', ...Object.keys(groupBy(data, 'Topic'))];
	let setPaths: SetPaths[] = [];
	titles.map((title) =>
		topics.map((topic) => {
			setPaths.push({
				params: {
					title,
					topic,
				},
			});
		})
	);
	return {
		paths: setPaths,
		fallback: false,
	};
};

const Topic: NextPage = () => {
	const router = useRouter();
	const { title, topic, party } = router.query;
	const [rawData, setRawData] = useState<Policy[]>([]);
	const [policies, setPolicies] = useState<Policy[]>([]);
	const [optionParties, setOptionParties] = useState<IDropdownOption<string>[]>(
		[]
	);
	const [optionPolicies, setOptionPolicies] = useState<
		IDropdownOption<string>[]
	>([]);
	const [chooseParty, setChooseParty] =
		useState<IDropdownOption<string> | null>(null);
	const [chooseTopic, setChooseTopic] =
		useState<IDropdownOption<string> | null>(null);

	const setPolicy = async (): Promise<void> => {
		const data: Policy[] = await fetchPolicy();
		await setRawData(data);
		const options = formatOption(
			Object.keys(groupBy(data, 'Topic')),
			'policies'
		);

		await setOptionPolicies([{ label: 'นโยบายทั้งหมด' }, ...options]);
	};

	const setParties = async (): Promise<void> => {
		const data: Party[] = await fetchParties();
		const options = formatOption(data, 'parties');
		await setOptionParties([{ label: 'ดูของทุกพรรค' }, ...options]);
	};

	const onClickShuffle = () => {
		setPolicies((curr) => [...shufflePolicies(curr)]);
	};

	useEffect(() => {
		setPolicy();
		setParties();
	}, []);

	useEffect(() => {
		if (topic) setChooseTopic({ label: `${topic}` });
		if (party) setChooseParty({ label: `${party}` });
	}, [topic, party]);

	useEffect(() => {
		if (rawData) {
			setPolicies(formatPolicies(rawData, chooseParty, chooseTopic));
		}
		if ((title && chooseTopic) || chooseParty) {
			replaceUrl(router, title, chooseTopic?.label, chooseParty?.label);
		}
	}, [rawData, chooseParty, chooseTopic]);

	return (
		<Layout title={title}>
			<HowToLabel />
			<Clipboard />
			{/* {topic && policies && (
				<TemplatePolicyList policyList={policies}>
					<Dropdown
						options={optionParties}
						currentOption={chooseParty}
						onSelect={setChooseParty}
					/>
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
			)} */}
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default memo(Topic);
