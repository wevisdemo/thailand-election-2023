import React, { FC } from 'react';
import Link from 'next/link';
import { imgPrefix } from '@/utils/path';

interface SearchNotFoundType {
	page?: 'SearchPolicies' | string | undefined;
}
const SearchNotFound: FC<SearchNotFoundType> = ({ page }) => {
	return (
		<div className="mx-auto mt-20 text-center typo-b4">
			<img
				className="mx-auto mb-5 "
				src={`${imgPrefix}/sad-face.svg`}
				alt="arrow"
			/>
			{page === 'SearchPolicies' ? (
				<div>
					ไม่พบนโยบายตามคีย์เวิร์ดที่ค้นหา
					<br /> กรุณาเปลี่ยนคำ
					<br /> หรือกลับ
					<Link href={'/'} className="font-bold underline ">
						หน้าแรก
					</Link>
				</div>
			) : (
				<div>ไม่มีนโยบายประเด็นนี้</div>
			)}
		</div>
	);
};

export default SearchNotFound;
