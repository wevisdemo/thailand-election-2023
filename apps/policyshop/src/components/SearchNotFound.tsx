import React, { FC } from 'react';
import Link from 'next/link';
import { imgPrefix } from '@/utils/path';

const SearchNotFound: FC = () => {
	return (
		<div className="mx-auto mt-20 text-center typo-b4">
			<img
				className="mx-auto mb-5 "
				src={`${imgPrefix}/sad-face.svg`}
				alt="arrow"
			/>
			ไม่พบนโยบายตามคีย์เวิร์ดที่ค้นหา
			<br /> กรุณาเปลี่ยนคำ
			<br /> หรือกลับ
			<Link href={'/'} className="font-bold underline ">
				หน้าแรก
			</Link>
		</div>
	);
};

export default SearchNotFound;
