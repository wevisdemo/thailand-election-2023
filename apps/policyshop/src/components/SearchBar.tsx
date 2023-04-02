import { imgPrefix } from '@/utils/path';
import { SearchBarProps } from '@/types/components';
import React, { FC } from 'react';
import Link from 'next/link';

const SearchBar: FC<SearchBarProps> = () => {
	let inputValue: string = '';
	return (
		<div className="relative px-4 md:px-0 ">
			<input
				type="text"
				className="typo-b4 inputSearchPolicies"
				placeholder="ค้นหานโยบายด้วยคีย์เวิร์ด"
				onChange={(e) => (inputValue = e.target.value)}
				onSubmit={() => console.log('test')}
			/>
			<div className="absolute top-[50%] right-[1%] flex translate-y-[-50%] ">
				<img src={`${imgPrefix}/clear.svg`} alt="child" className="mr-2" />
				{/* <Link href={`/searchPolicies?search=${inputValue}`}> */}
				<img src={`${imgPrefix}/search.svg`} alt="child" className="mr-2 " />
				{/* </Link> */}
			</div>
		</div>
	);
};

export default SearchBar;
