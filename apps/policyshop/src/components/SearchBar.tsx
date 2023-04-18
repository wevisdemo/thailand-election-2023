import { imgPrefix } from '@/utils/path';
import { SearchBarProps } from '@/types/components';
import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SearchBar: FC<SearchBarProps> = ({ onClear }) => {
	const [message, setMessage] = useState<string | string[] | undefined>(
		undefined
	);
	const router = useRouter();
	const { topic: topicQuery } = router.query;
	const url = '/searchPolicies';

	const linkToSearch = (): void => {
		const input = document.getElementById(
			'searchBar'
		) as HTMLInputElement | null;
		router.push(`${url}?topic=${input?.value}`, undefined, {});
		setMessage(input?.value);
	};

	const clearInput = (): void => {
		setMessage('');
		if (onClear) onClear();
		router.push(url, undefined, {});
	};

	const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			linkToSearch();
		}
	};

	useEffect(() => {
		if (topicQuery) setMessage(topicQuery);
	}, [topicQuery]);

	return (
		<div className="relative mx-4 md:mx-0 ">
			<input
				type="text"
				className="typo-b4 inputSearchPolicies"
				id="searchBar"
				placeholder="ค้นหานโยบายด้วยคีย์เวิร์ดอื่นๆ"
				onChange={(t) => setMessage(t.target.value)}
				onKeyDown={onKeyDownInput}
				value={message || ''}
			/>
			<div className="absolute top-[50%] right-[20px] flex translate-y-[-50%] ">
				{message && (
					<button className="mr-2 " onClick={clearInput}>
						<img src={`${imgPrefix}/clear.svg`} alt="clear button" />
					</button>
				)}
				<button onClick={linkToSearch}>
					<img src={`${imgPrefix}/search.svg`} alt="search button" />
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
