import { FC } from 'react';
import { imgPrefix } from '@/utils/path';

interface ClipboardType {
	styles?: string;
}

const Clipboard: FC<ClipboardType> = ({ styles }) => {
	return (
		<div className={`text-center typo-b6 mb-9 ${styles}`}>
			<p>ส่งข้อมูลให้ทีมงานเพื่ออัปเดตเพิ่มเติมที่อีเมล</p>
			<div className="flex mx-auto items-center w-fit space-x-[16px] mt-1">
				<p className="font-bold ">team@punchup.world</p>
				<button
					className=" bg-gray-2 flex items-center rounded-[20px] px-2 py-1"
					onClick={() => {
						navigator.clipboard.writeText('team@punchup.world');
					}}
				>
					<img
						src={`${imgPrefix}/clipboard.svg`}
						alt="child"
						className="mr-1 "
					/>
					<p className="typo-b7">ก็อปปี้</p>
				</button>
			</div>
		</div>
	);
};

export default Clipboard;
