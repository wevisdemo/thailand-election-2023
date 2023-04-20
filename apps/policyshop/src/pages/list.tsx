import Dropdown from '@/components/Dropdown';
import HowToLabel from '@/components/HowToLabel';
import Clipboard from '@/components/Clipboard';
import RandomButton from '@/components/RandomButton';
import TemplatePolicyList from '@/components/Template/PolicyList';
import { IDropdownOption, Party, Policy } from '@/types/components';
import { fetchPolicy, fetchParties, shufflePolicies } from '@/utils';
import { GetStaticProps, NextPage } from 'next';
import { memo, useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { hotTopicList } from '@/utils/data';

interface PropsType {
	policies: Policy[];
	parties: Party[];
}

const ListPage: NextPage<PropsType> = ({ policies, parties }) => {
	const partyNameList: string[] = parties.reduce((pre, curr) => {
		const isExist = pre.find((partyName) => curr.Name === partyName);
		if (!isExist) {
			return [...pre, curr.Name];
		}
		return pre;
	}, [] as string[]);

	const topicList: string[] = policies.reduce((pre, curr) => {
		const isExist = pre.find((topic) => curr.Topic === topic);
		if (!isExist) {
			return [...pre, curr.Topic];
		}
		return pre;
	}, [] as string[]);

	const router = useRouter();
	const [displayPolicies, setDisplayPolicies] = useState<Policy[]>(policies);
	const [optionParties, setOptionParties] = useState<IDropdownOption<string>[]>(
		[]
	);
	const [optionTopics, setOptionTopics] = useState<IDropdownOption<string>[]>(
		[]
	);
	const [selectedParty, setSelectedParty] =
		useState<IDropdownOption<string> | null>(null);
	const [selectedTopic, setSelectedTopic] =
		useState<IDropdownOption<string> | null>(null);

	const { hot: hotQuery, topic: topicQuery, party: partyQuery } = router.query;
	const title = hotQuery ? 'นโยบายประเด็นร้อน' : 'นโยบายตามประเด็น';

	interface PolicyGroupByTopic {
		topic: string;
		policies: Policy[];
	}

	const onClickShuffle = () => {
		setDisplayPolicies((curr) => [...shufflePolicies(curr)]);
	};

	const replaceUrl = (query: string) => {
		const url = '/list' + (query ? `?${query}` : '');
		router.push(url, undefined, {
			shallow: true,
		});
	};

	const policiesGroupByTopic: PolicyGroupByTopic[] = policies.reduce(
		(pre, curr) => {
			const topicIndex = pre.findIndex((policy) => policy.topic === curr.Topic);
			if (topicIndex === -1) {
				pre = [...pre, { topic: curr.Topic, policies: [curr] }];
			} else {
				pre[topicIndex] = {
					topic: curr.Topic,
					policies: [...pre[topicIndex].policies, curr],
				};
			}
			return pre;
		},
		[] as PolicyGroupByTopic[]
	);

	const fetchTopicOption = () => {
		let policyOptions: IDropdownOption<string>[] = policiesGroupByTopic.map(
			(item) => {
				const label = `${item.topic} (${item.policies.length})`;
				return { label: label, value: item.topic };
			}
		);
		const defaultPolicyOption: IDropdownOption<string> = {
			label: `นโยบายทั้งหมด (${policies.length})`,
			value: 'นโยบายทั้งหมด',
		};
		policyOptions = [...policyOptions, defaultPolicyOption];

		// if hot fetch only hot topic
		if (hotQuery) {
			policyOptions = policyOptions.filter((option) =>
				hotTopicList.includes(option.value || '')
			);
		}

		const topicOptionMatch = policyOptions.find(
			(option) => option.value === topicQuery
		);

		if (topicQuery && topicOptionMatch) {
			setSelectedTopic(topicOptionMatch);
		} else {
			setSelectedTopic(defaultPolicyOption);
		}
		setOptionTopics(policyOptions);
	};

	const fetchPartyOption = () => {
		let partyOptions: IDropdownOption<string>[] = parties.map((party) => {
			const policiesMatchPartyAndTopic = policies.filter((policy) => {
				const partyMatch = policy.Party.Name === party.Name;
				let topicMatch = true;
				if (topicQuery) {
					topicMatch = policy.Topic === topicQuery;
				}
				return partyMatch && topicMatch;
			});
			const label = `${party.Name} (${policiesMatchPartyAndTopic.length})`;
			return { label: label, value: party.Name };
		});
		const matchTopicPolicies = policiesGroupByTopic.find(
			(item) => item.topic === topicQuery
		);
		const partyPolicyLength = matchTopicPolicies
			? matchTopicPolicies.policies.length
			: policies.length;
		const defaultPartyOption: IDropdownOption<string> = {
			label: `ดูของทุกพรรค (${partyPolicyLength})`,
			value: 'ดูของทุกพรรค',
		};
		partyOptions = [...partyOptions, defaultPartyOption];
		setOptionParties(partyOptions);

		// update
		const partyOptionMatch = partyOptions.find(
			(option) => option.value === partyQuery
		);

		if (partyQuery && partyOptionMatch) {
			setSelectedParty(partyOptionMatch);
		} else {
			setSelectedParty(defaultPartyOption);
		}
	};

	const fetchOption = () => {
		fetchTopicOption();
		fetchPartyOption();
	};

	const fetchData = () => {
		let filterPolicies = policies;
		const partyOptionMatch = optionParties.find(
			(option) => option.value === partyQuery
		);
		if (partyQuery?.toString() && partyOptionMatch) {
			filterPolicies = filterPolicies.filter(
				(policy) => policy.Party.Name === partyQuery
			);
		}
		const topicOptionMatch = optionTopics.find(
			(option) => option.value === topicQuery
		);
		if (topicQuery?.toString() && topicOptionMatch) {
			filterPolicies = filterPolicies.filter(
				(policy) => policy.Topic === topicQuery?.toString()
			);
		}

		if (hotQuery?.toString()) {
			filterPolicies = filterPolicies.filter((policy) =>
				hotTopicList.includes(policy.Topic)
			);
		}

		setDisplayPolicies(filterPolicies);
	};

	const generateQuery = (
		partyName: string,
		topic: string,
		hot: boolean
	): string => {
		let query = '';
		// validate
		if (topicList.find((item) => item === topic)) {
			query += `topic=${topic}&`;
		}
		if (partyNameList.find((item) => item === partyName)) {
			query += `party=${partyName}&`;
		}
		if (hot) {
			query += `hot=true&`;
		}
		return query;
	};
	useEffect(() => {}, []);

	useEffect(() => {
		fetchOption();
	}, [topicQuery, partyQuery]);

	useEffect(() => {
		fetchData();
		const query = generateQuery(
			selectedParty?.value || '',
			selectedTopic?.value || '',
			!!hotQuery
		);

		if (query) {
			replaceUrl(query);
		}
	}, [selectedParty, selectedTopic]);

	return (
		<>
			<main>
				<Layout title={title}>
					<HowToLabel />
					<Clipboard />
					{selectedTopic && selectedParty && (
						<TemplatePolicyList
							policyList={displayPolicies}
							partyList={parties}
						>
							<div className="flex flex-col md:flex-row gap-[16px]">
								<Dropdown
									options={optionTopics}
									currentOption={selectedTopic}
									onSelect={setSelectedTopic}
								/>
								<Dropdown
									options={optionParties}
									currentOption={selectedParty}
									onSelect={setSelectedParty}
								/>
							</div>
							<div className="flex justify-end items-center mt-[32px]">
								<RandomButton onClick={onClickShuffle} />
							</div>
						</TemplatePolicyList>
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
	policies = shufflePolicies(policies); // shuffle

	return {
		props: {
			policies,
			parties,
		},
	};
};

export default memo(ListPage);
