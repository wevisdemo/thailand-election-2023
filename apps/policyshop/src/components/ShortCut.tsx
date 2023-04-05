import { FC } from 'react';
import { ArrowsType1, ArrowsType4 } from './Arrows';
import Link from 'next/link';
import { onOpenModal } from '@/utils';

interface ButtonWrapperPropsType {
	children: React.ReactNode;
	bgColor: string;
	alignItem?: string;
	styles?: string;
}

const ButtonWrapper: FC<ButtonWrapperPropsType> = ({
	children,
	bgColor,
	alignItem,
	styles,
}) => {
	return (
		<button
			className={`border-[3px] border-black mb-1 text-start rounded-[24px] w-full  px-4 py-2 flex ite justify-between ${bgColor} ${alignItem} ${styles}`}
		>
			{children}
		</button>
	);
};

const ShortCut: FC = () => {
	return (
		<div className=" p-4 max-w-[728px] mx-auto flex flex-col ">
			<p className="mb-2 font-bold typo-b6 ">ทางลัด</p>
			<a href="#HotTopicPolicy">
				<ButtonWrapper bgColor="bg-highlight-2" alignItem="items-center">
					<p>นโยบายประเด็นร้อน คัดมาแล้ว</p>
					<ArrowsType1 />
				</ButtonWrapper>
			</a>
			<a href="#ByTopic">
				<ButtonWrapper bgColor="bg-highlight-3" alignItem="items-center">
					<p>ดูนโยบายตามประเด็น</p>
					<ArrowsType1 />
				</ButtonWrapper>
			</a>
			<a href="#ByParty">
				<ButtonWrapper bgColor="bg-highlight-2" alignItem="items-center">
					<p>แต่ละพรรคมีนโยบายอะไรมาขายบ้าง</p>
					<ArrowsType1 />
				</ButtonWrapper>
			</a>
			<div className="flex space-x-[4px]">
				<Link href={`/compare`} className="flex-1 ">
					<ButtonWrapper bgColor="bg-highlight-3" styles="w-full">
						<p>
							เปรียบเทียบน
							<br className="hidden md:block" />
							โยบายพรรคต่อพรรค
						</p>
						<ArrowsType4 styles="p-1" />
					</ButtonWrapper>
				</Link>
				<div className="flex-1" onClick={() => onOpenModal()}>
					<ButtonWrapper bgColor="bg-highlight-2">
						<p>
							ดูยังไงว่านโยบายไหนจะทำได้จริง <br className="hidden md:block" />
							นโยบายไหน อาจขายฝัน
						</p>
						<ArrowsType4 styles="p-1" />
					</ButtonWrapper>
				</div>
			</div>
		</div>
	);
};

export default ShortCut;
