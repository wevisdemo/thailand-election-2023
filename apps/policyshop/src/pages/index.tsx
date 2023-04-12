import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import IntroPolicy from '@/components/Landing/IntroPolicy';
import HotTopicPolicy from '@/components/Landing/HotTopicPolicy';
import ByTopic from '@/components/Landing/ByTopic';
import ByParty from '@/components/Landing/ByParty';
import { TheyWorkForUs } from '@thailand-election-2023/database';
import { Party } from '@thailand-election-2023/database/src/models/party';
import { Policy } from '@thailand-election-2023/database/src/models/policy';
import { fetchParties, fetchPolicy, groupBy } from '@/utils';
import { GroupByTopics, IDropdownOption } from '@/types/components';
import ShortCut from '@/components/ShortCut';
import AutoComplete from '@/components/Compare/AutoComplete';
import WvSharer from '@wevisdemo/ui/react/sharer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next';
import { imgPrefix } from '@/utils/path';
import Metadata from '@/components/Metadata';

interface PropsType {
	policies: Policy[];
	parties: Party[];
}

const Landing: NextPage<PropsType> = ({ policies, parties }) => {
	const [hotParties, setHotParties] = useState<Party[]>([]);
	const [topics, setTopics] = useState<GroupByTopics>({});
	const [selectedPartyOption, setSelectedPartyOption] =
		useState<IDropdownOption<string> | null>(null);
	const router = useRouter();

	const fetchParties = async (): Promise<void> => {
		const data: Party[] = await TheyWorkForUs.Parties.fetchAll({
			where: '(PartyType,eq,พรรค)',
		});
		//mock get hot parties
		setHotParties(parties.slice(0, 8)); // TODO: refactor when hot party has defined
	};

	const getPartyOptions = (): IDropdownOption<string>[] => {
		const options = parties
			.map((party) => ({
				label: party.Name,
				value: party.Name,
			}))
			.sort((i, j) => (i.label < j.label ? -1 : 1));

		return options.map((option) => {
			const partyPolicies = policies.filter(
				(policy) => policy.Party.Name === option.value
			);
			const newLabel = `${option.label} (${partyPolicies.length})`;
			return {
				label: newLabel,
				value: option.value,
			};
		});
	};

	const onSelectParty = (option: IDropdownOption<string>) => {
		setSelectedPartyOption(option);
		router.push(`/party/${option.value}`);
	};

	const fetchPolicies = async (): Promise<void> => {
		setTopics(groupBy(policies, 'Topic'));
	};
	useEffect(() => {
		fetchParties();
		fetchPolicies();
	}, []);
	return (
		<>
			<Metadata />
			<main>
				<Layout title="landing">
					<IntroPolicy />
					<div className="max-w-[728px] mx-auto">
						<ShortCut />
						<HotTopicPolicy topics={topics} />
						<ByTopic topics={topics} />
						<ByParty parties={hotParties} />

						<div className="mt-[16px] px-4 md:px-0">
							<AutoComplete
								options={getPartyOptions()}
								currentOption={selectedPartyOption}
								onSelect={onSelectParty}
								placeholder="เลือกพรรค"
							/>
						</div>
						<div className="flex flex-col items-center my-[40px]">
							<div className="flex mb-[10px]">
								<WvSharer url="/" />
							</div>
							<p className="font-bold typo-b3">#WeVisElection66</p>
							<Link href={'/about'}>
								<div className="font-bold py-[10px] px-[20px] border-[3px] rounded-[50px] w-fit mt-[10px]">
									เกี่ยวกับโครงการ
								</div>
							</Link>
						</div>
					</div>
					<election-footer></election-footer>
				</Layout>
			</main>
		</>
	);
};

export default Landing;

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
