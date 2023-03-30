import React, { FC } from 'react';

const Intro: FC<any> = ({ party }) => {
	console.log(party, 'party');
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
			<button className="typo-b4 border-[3px] mt-4 border-black rounded-full w-fit mx-auto py-2 px-4">
				รู้จักพรรคนี้เพิ่มเติม
			</button>
			<div className="mt-8 text-center typo-b5">
				<p>ข้อมูลนี้อัปเดตในวันที่ xx/xx/xxxx</p>
				<p className="ml-4 ">ส่งข้อมูลให้ทีมงานเพื่ออัปเดตเพิ่มเติมที่</p>
				<p>team@punchup.world</p>
			</div>
		</div>
	);
};

export default Intro;
