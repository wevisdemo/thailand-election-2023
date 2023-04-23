import React, { FC } from 'react';
import { Party } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import { ArrowsType6 } from '../Arrows';

interface PartyListType {
	party_list: any;
	party: Party | undefined;
}

const PartyList: FC<PartyListType> = ({ party_list, party }) => {
	const onCloseModal = (): void => {
		const elem = document.getElementById('PartyListModal') as HTMLElement;
		if (elem) elem!.style.display = 'none';
	};

	const clickItem = (item: any) => {
		const path = item.PastMP
			? 'https://theyworkforus.wevis.info/people/' +
			  item.Name.replaceAll(' ', '-')
			: 'https://www.google.com/search?q=' + item.Name;
		window.open(path, '_blank');
	};

	const sortPartyList = (list: any) => {
		return list.sort(
			(a: any, b: any) => parseFloat(a.Number) - parseFloat(b.Number)
		);
	};

	return (
		<div
			className="fixed w-full  py-12  inset-0 z-[99] h-auto overflow-scroll hidden  "
			id="PartyListModal"
		>
			{party_list && (
				<div className="typo-b4 border-[3px] border-black rounded-[10px] relative mx-2   md:mx-auto  bg-white md:max-w-[650px] p-5 ">
					<button
						className="absolute top-0 right-0 m-3 "
						onClick={() => onCloseModal()}
					>
						<img src={`${imgPrefix}/close.svg`} alt="close" />
					</button>
					<p className="font-bold typo-b4">บัญชีรายชื่อพรรค{party?.Name}</p>
					<div className="flex mt-1 typo-b6 text-gray-3">
						<div className=" bg-highlight-1 w-fit">ไฮไลท์</div> =
						เคยมีตำแหน่งในสภาสมัยที่แล้ว
					</div>
					<div>
						<div
							id="header"
							className="flex mt-1 font-bold typo-b6 text-gray-3"
						>
							<div className="w-[45px]">ลำดับ</div>
							<div>ชื่อ</div>
						</div>
						{sortPartyList(party_list.PartyList).map((p: any) => (
							<button
								className={`flex items-center pr-2 justify-between w-full border-b typo-b4 border-b-gray-2 ${
									p.PastMP ? 'bg-highlight-1' : ''
								}`}
								onClick={() => clickItem(p)}
								key={p.Name}
							>
								<div id="body" className={`flex  py-[5px]  `}>
									<div className="w-[45px] pl-2 ">{p.Number}</div>
									<div>{p.Name}</div>
								</div>
								<ArrowsType6 />
							</button>
						))}
					</div>
				</div>
			)}
			<div
				className="fixed inset-0 opacity-60 z-[-1]"
				onClick={() => onCloseModal()}
				style={{
					background:
						'linear-gradient(0deg, rgba(9, 9, 9, 0.6), rgba(9, 9, 9, 0.6)), #FBF8F4',
				}}
			/>
		</div>
	);
};

export default PartyList;
