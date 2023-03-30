import React, { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import TemplatePolicyList from '@/components/Template/PolicyList';
import { IDropdownOption, Policy, Party } from '@/types/components';
import {
	groupBy,
	replaceUrl,
	formatPolicies,
	formatOption,
	fetchParties,
	fetchPolicy,
} from '@/utils';
import Dropdown from '@/components/Dropdown';

export async function getStaticPaths() {
	const data = await fetchPolicy();
	const titles = ['นโยบายประเด็นร้อน', 'แบ่งตามประเด็น'];
	const topics = ['นโยบายทั้งหมด', ...Object.keys(groupBy(data, 'Topic'))];
	let setPaths: any[] = [];

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
}

export async function getStaticProps(context: any) {
	const { params } = context;
	return {
		props: { params },
	};
}

const Topic = () => {
	const router = useRouter();
	const { title, topic, party } = router.query;
	const [rawData, setRawData] = useState<Policy[]>([]);
	const [policies, setPolicies] = useState<Policy[]>([]);
	const [optionParties, setOptionParties] = useState<IDropdownOption<any>[]>(
		[]
	);
	const [optionPolicies, setOptionPolicies] = useState<IDropdownOption<any>[]>(
		[]
	);
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
			{topic && policies && (
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
				</TemplatePolicyList>
			)}
		</Layout>
	);
};

export default memo(Topic);
