import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import { TheyWorkForUs } from '@thailand-election-2023/database';
import { Party } from '@thailand-election-2023/database/src/models/party';

const Party = () => {
	const router = useRouter();
	const { name } = router.query;

	const [party, setParty] = useState<Party>();

	const fetchData = useCallback(async (): Promise<void> => {
		const data: Party[] = await TheyWorkForUs.Parties.fetchAll({
			where: `(Name,eq,${name})`,
		});
		setParty(data[0]);
	}, [name]);

	useEffect(() => {
		fetchData();
	}, [name]);

	return (
		<Layout title="พรรคนี้มีอะไรมาขายบ้าง">
			<div>
				<div className="flex items-center justify-center">
					<div className="w-[70px] h-[70px] mr-4 ">
						{party && party.Images && party.Images[0] && (
							<img src={party.Images[0].url} alt="party-logo" />
						)}
					</div>
					<p className="font-bold typo-h3">{party?.Name}</p>
				</div>
			</div>
		</Layout>
	);
};

export default Party;
