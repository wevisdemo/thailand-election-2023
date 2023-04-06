import React, { FC } from 'react';
import { imgPrefix } from '@/utils/path';
import CircleTopicWrapper from '@/components/CircleTopicWrapper';
import { ArrowsType5 } from '../Arrows';

const ModalInfo: FC<any> = ({ party }) => {
	type WrapperLinkProps = {
		children: React.ReactNode;
	};
	const WrapperLink: FC<WrapperLinkProps> = ({ children }) => {
		return (
			<button className=" border-b-[2px] border-gray-2 w-full mt-4 flex  items-center justify-between  ">
				{children}
				<ArrowsType5 />
			</button>
		);
	};

	const onCloseModal = (): void => {
		const elem = document.getElementById('ModalInfo') as HTMLElement;
		if (elem) elem!.style.display = 'none';
	};

	return (
		<div
			className="fixed w-full  py-12  inset-0 z-[99] h-auto overflow-scroll hidden "
			id="ModalInfo"
		>
			<div
				className="fixed inset-0 opacity-60 z-[-1]"
				onClick={() => onCloseModal()}
				style={{
					background:
						'linear-gradient(0deg, rgba(9, 9, 9, 0.6), rgba(9, 9, 9, 0.6)), #FBF8F4',
				}}
			/>
			<div className="typo-b4 border-[3px] border-black rounded-[10px] relative mx-2   md:mx-auto  bg-white md:max-w-[650px] p-5 ">
				<button
					className="absolute top-0 right-0 m-3 "
					onClick={() => onCloseModal()}
				>
					<img src={`${imgPrefix}/close.svg`} alt="close" />
				</button>
				{party && (
					<>
						<div className=" text-start">
							<CircleTopicWrapper
								name={party.Name}
								nameStyle="typo-h5 font-bold"
							>
								{party.Images && (
									<img src={party.Images[0].url} alt="party-logo" />
								)}
							</CircleTopicWrapper>
							<p className="typo-b5 text-gray-3">แคนดิเดตนายก</p>
						</div>
						<div className="flex flex-col items-start">
							<WrapperLink>
								<div className="flex">
									<img src={`${imgPrefix}/icon-link-1.svg`} alt="icon-link-1" />
									<p className="ml-2 font-bold typo-b5">
										นโยบายที่เคยขายไว้ ทำได้จริงแค่ไหน
									</p>
								</div>
							</WrapperLink>
							<WrapperLink>
								<div className="flex">
									<img src={`${imgPrefix}/icon-link-2.svg`} alt="icon-link-2" />
									<p className="ml-2 font-bold typo-b5">
										เคยเสนอร่างกฏหมายอะไรบ้าง
									</p>
								</div>
							</WrapperLink>
							<WrapperLink>
								<div className="flex">
									<img src={`${imgPrefix}/icon-link-3.svg`} alt="icon-link-3" />
									<p className="ml-2 font-bold typo-b5">ข้อมูลอื่นๆ</p>
								</div>
							</WrapperLink>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default ModalInfo;
