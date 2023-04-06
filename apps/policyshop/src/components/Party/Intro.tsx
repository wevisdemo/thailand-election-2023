import Link from 'next/link';
import React, { FC } from 'react';
import Clipboard from '../Clipboard';
import HowToLabel from '../HowToLabel';

const Intro: FC<any> = ({ party }) => {
	return (
		<div className="flex flex-col justify-center">
			<div className="flex items-center justify-center">
				<div className="w-[70px] h-[70px] mr-4   ">
					{party && party.Images && party.Images[0] && (
						<img
							src={party.Images[0].url}
							alt="party-logo"
							className="rounded-full"
						/>
					)}
				</div>
				<p className="font-bold typo-h3">{party?.Name}</p>
			</div>
			<div className="flex mx-auto mb-10 space-x-3 w-fit">
				<button className="typo-b4 border-[3px] mt-4 border-black rounded-full w-fit mx-auto py-2 px-4">
					รู้จักพรรคนี้เพิ่มเติม
				</button>
				<Link
					href={`/compare`}
					className="typo-b4 border-[3px] mt-4 border-black rounded-full w-fit mx-auto py-2 px-4"
				>
					เทียบนโยบาย
				</Link>
			</div>
			<HowToLabel />
			<div className="mt-2 text-center typo-b5">
				<p>ข้อมูลนี้อัปเดตในวันที่ xx/xx/xxxx</p>
				<Clipboard />
			</div>
		</div>
	);
};

export default Intro;
