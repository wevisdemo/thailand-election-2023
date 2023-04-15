import React from 'react';
import { ArrowsType1, ArrowsType2, ArrowsType3 } from '@/components/Arrows';
import CircleWrapper from '@/components/Home/CircleWrapper';
import SquareWrapper from '@/components/Home/SquareWrapper';
import { imgPrefix } from '@/utils/path';
import { onCloseModal } from '@/utils';

const ModalSeeMore = () => {
	return (
		<div
			className="fixed w-full hidden py-12 text-center inset-0 z-[99] h-auto overflow-scroll "
			id="ModalSeeMore"
		>
			<div
				onClick={() => onCloseModal()}
				className="fixed inset-0 opacity-60 z-[-1]"
				style={{
					background:
						'linear-gradient(0deg, rgba(9, 9, 9, 0.6), rgba(9, 9, 9, 0.6)), #FBF8F4',
				}}
			/>
			<div className="typo-b4 border-[3px] border-black rounded-[10px] relative mx-2   md:mx-auto  bg-white md:max-w-[650px] py-8 px-4 ">
				<button
					className="absolute top-0 right-0 m-3 "
					onClick={() => onCloseModal()}
				>
					<img src={`${imgPrefix}/close.svg`} alt="close" />
				</button>
				<div className="flex flex-col items-center h-full mx-auto mt-3 ">
					<p className="font-bold typo-h6">เส้นทางการผลักดันนโยบาย</p>
					<p className="mt-8 ">
						เมื่อฤดูกาลการเลือกตั้งมาถึง ทุกพรรคก็จะเริ่มออกมาหาเสียง
						ออกมาขายนโยบายต่าง ๆ ของตัวเอง
					</p>
					<p className="mt-8 ">
						ประชาชนอย่างเราเลือกช็อปนโยบายของพรรคได้ตามชอบ
					</p>
					<p className="mt-8 ">
						แล้วจริง ๆ แล้วนโยบายต่าง ๆ จะทำจริงได้จริงไหม? จะแน่ใจได้อย่างไรว่า
						พี่เขาไม่ได้มาหลอกขายฝัน
					</p>
					<p className="mt-8 font-bold ">
						ลองมาดูเส้นทางที่นโยบายหนึ่งๆ จะถูกทำจริงกันดีกว่า
					</p>
					<ArrowsType1 styles=" my-9" />
					<p>หลังเลือกตั้ง ถ้าพรรคที่คุณเลือกเป็น...</p>
					<div className="flex mt-4 ">
						<div className="border-r-[3px] border-gray-3 border-dashed">
							<CircleWrapper
								title="ฝ่าย<br/>รัฐบาล"
								styles="bg-highlight-2 mx-[16px] "
							/>
						</div>

						<CircleWrapper
							title="ฝ่ายค้าน/<br/>อิสระ"
							styles="bg-highlight-3 mx-[16px] "
						/>
					</div>
					<SquareWrapper
						styles="mt-8"
						bgColor="bg-highlight-2"
						borderType="border-dashed"
					>
						<p className="font-bold typo-b2">ฝ่ายรัฐบาล</p>
						<p className=" typo-b4">
							ตั้ง ครม. และฝ่ายบริหารมาบริหารประเทศ ดูแลกระทรวงต่างๆ
						</p>
					</SquareWrapper>
					<ArrowsType2 />
					<SquareWrapper bgColor="bg-highlight-2" borderType="border-dashed">
						<p className=" typo-b4">
							จากนั้นฝ่ายบริหาร หยิบนโยบายที่เคยขาย มาแต่งตัว แปลงร่างให้เป็น...
						</p>
					</SquareWrapper>
					<ArrowsType3 />
					<div className="flex space-x-[24px] w-full  border-b-[3px] border-gray-3 border-dashed pb-8">
						<div className="flex flex-col items-center flex-1">
							<SquareWrapper
								bgColor="bg-highlight-2"
								borderType="border-dashed"
							>
								<div className="bulletSeeMore typo-b6">1</div>
								<p className="font-bold typo-b4">กฎหมาย</p>
							</SquareWrapper>
							<ul className="my-4 list-disc list-inside ">
								<li>ไม่เคยมีกฎหมายเกี่ยวกับเรื่องนี้</li>
								<li>จะทำเรื่องนี้ได้ต้องแก้กฎหมาย</li>
							</ul>
							<ArrowsType2 />
							<SquareWrapper
								bgColor="bg-highlight-2"
								borderType="border-dashed"
								styles=" text-left "
							>
								<p className="font-bold typo-b4">เสนอกฎหมาย ให้ผ่านสภา ส.ส.</p>
								<ul className="mt-2 list-decimal list-inside ">
									<li>รับร่างกฎหมาย</li>
									<li>ตั้งกรรมาธิการ</li>
									<li>ลงมติเห็นชอบ</li>
								</ul>
							</SquareWrapper>
							<ArrowsType2 />
							<SquareWrapper
								bgColor="bg-highlight-2"
								borderType="border-dashed"
								styles=" text-left "
							>
								<p className="font-bold typo-b4">เสนอกฎหมาย ให้ผ่านสภา ส.ว.</p>
								<ul className="mt-2 list-decimal list-inside ">
									<li>รับหลักการ</li>
									<li>ตั้งกรรมาธิการ</li>
									<li>ลงมติเห็นชอบ</li>
								</ul>
							</SquareWrapper>
							<ArrowsType2 />
							<SquareWrapper
								bgColor="bg-highlight-2"
								borderType="border-dashed"
							>
								<p className="font-bold typo-b4">
									เสนอกฎหมาย ให้ผ่านศาลรัฐธรรมนูญ
								</p>
							</SquareWrapper>
							<ArrowsType2 />
							<SquareWrapper
								bgColor="bg-highlight-2"
								borderType="border-dashed"
							>
								<p className="font-bold typo-b4">กษัตริย์ลงปรมาภิไธย</p>
							</SquareWrapper>
							<ArrowsType2 />
							<SquareWrapper
								bgColor="bg-highlight-2"
								borderType="border-dashed"
							>
								<p className="font-bold typo-b4">กลายเป็นกฎหมาย</p>
							</SquareWrapper>
							<ArrowsType2 />
							<SquareWrapper bgColor="bg-black" styles=" text-highlight-2">
								<p className="font-bold typo-b4">ทำได้จริง!</p>
							</SquareWrapper>
						</div>
						<div className="flex flex-col items-center flex-1 ">
							<SquareWrapper
								bgColor="bg-highlight-2"
								borderType="border-dashed"
							>
								<div className="bulletSeeMore typo-b6">2</div>
								<p className="font-bold typo-b4">
									กฎกระทรวง ระเบียบข้อบังคับต่างๆ
								</p>
							</SquareWrapper>
							<ArrowsType2 />
							<SquareWrapper bgColor="bg-black" styles=" text-highlight-2">
								<p className="font-bold typo-b4 ">
									ฝ่ายบริหารและครม. ประชุมกันแล้วบังคับใช้ใน ราชการได้เลย
								</p>
							</SquareWrapper>
						</div>
					</div>
					<SquareWrapper
						bgColor="bg-highlight-3"
						borderType="border-dashed"
						styles="mt-8"
					>
						<p className="font-bold typo-b4 ">
							พรรคฝ่ายค้าน หรือพรรคอิสระ ยังมีโอกาสผลักดันนโยบายมั้ย?
						</p>
						<p className="mt-2 ">
							จะลำบากหน่อย แต่ก็ยังพอผลักดันนโยบายตัวเองได้อยู่
							<br />
							ผ่านการเสนอนโยบายให้เป็นกฎหมาย
						</p>
						<p className="mt-1 ">
							ความยากก็คือ อาจจะโดนตีตกง่าย ๆ เพราะมี ส.ส.หรือส.ว. โหวตให้ไม่พอ
						</p>
					</SquareWrapper>
					<ArrowsType2 />
					<SquareWrapper
						bgColor="bg-black"
						styles=" text-highlight-3 text-start"
					>
						<p className="font-bold typo-b4 ">
							หน้าที่หลักของฝ่ายค้านคือ การติดตาม ตรวจสอบ
							นโยบายของฝ่ายรัฐบาลผ่านวิธีการต่าง ๆ
						</p>
						<ul className="mt-2 list-disc list-inside ">
							<li>การตั้งกระทู้ถาม</li>
							<li>เข้าไปเป็นกรรมาธิการ</li>
							<li>อภิปรายไม่ไว้วางใจ</li>
						</ul>
					</SquareWrapper>
					<div className="mt-8 font-bold typo-h7">
						<p>เพราะฉะนั้นถ้าชอบนโยบายของพรรคไหน</p>
						<p className="mt-8 ">
							อย่าลืมโหวตให้พรรคนั้นมี ส.ส. ในสภาให้ได้มากที่สุด
						</p>
						<p className="mt-8 ">อาจจะไม่ถึงฝั่งฝันได้เป็นรัฐบาล</p>
						<p className="mt-8 ">
							แต่ก็ยังเป็นตัวแทนเราให้พวกเขาเข้าไปผลักดัน ตรวจสอบ
							ติดตามนโยบายที่เราถูกใจ
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalSeeMore;
