import React from 'react';
import { useRouter } from 'next/router';
import { imgPrefix } from '@/utils/path';
import Layout from '@/components/Layout';

const Party = () => {
	const router = useRouter();
	const { name } = router.query;

	return (
		<Layout title="พรรคนี้มีอะไรมาขายบ้าง">
			<div>{name}</div>
		</Layout>
	);
};

export default Party;
