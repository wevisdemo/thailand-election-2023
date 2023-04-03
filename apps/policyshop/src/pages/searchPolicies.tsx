import React from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';

const SearchPolicies = () => {
	const router = useRouter();
	const { search } = router.query;
	return (
		<div className="fixed inset-0 top-0 left-0 bg-white">
			<SearchBar />
		</div>
	);
};

export default SearchPolicies;
