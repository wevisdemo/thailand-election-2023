import React from 'react';
import { ArrowsType1 } from '@/components/Arrows';
import CircleWrapper from '@/components/Home/CircleWrapper';
import SquareWrapper from '@/components/Home/SquareWrapper';

const home = () => {
	return (
		<div className="py-12 text-center ">
			<div className="typo-b4 max-w-[242px] md:max-w-[650px] mx-auto flex flex-col items-center">
				<p>
					เมื่อฤดูกาลการเลือกตั้งมาถึง ทุกพรรคก็จะเริ่มออกมาหาเสียง
					ออกมาขายนโยบายต่าง ๆ ของตัวเอง
				</p>
				<p className="mt-8 ">ประชาชนอย่างเราเลือกช็อปนโยบายของพรรคได้ตามชอบ</p>
				<p className="mt-8 ">
					แล้วจริง ๆ แล้วนโยบายต่าง ๆ จะทำจริงได้จริงไหม? จะแน่ใจได้อย่างไรว่า
					พี่เขาไม่ได้มาหลอกขายฝัน
				</p>
				<p className="mt-8 font-bold ">
					ลองมาดูเส้นทางที่นโยบายหนึ่งๆ จะถูกทำจริงกันดีกว่า
				</p>
				<ArrowsType1 styles=" my-9" />
				<p>หลังเลือกตั้ง ถ้าพรรคที่คุณเลือกเป็น...</p>
				<div className="flex mt-4">
					<CircleWrapper
						title="ฝ่าย<br/>รัฐบาล"
						styles="bg-highlight-2 mx-[16px] "
					/>
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
				<SquareWrapper bgColor="bg-highlight-2" borderType="border-dashed">
					<p className=" typo-b4">
						จากนั้นฝ่ายบริหาร หยิบนโยบายที่เคยขาย มาแต่งตัว แปลงร่างให้เป็น...
					</p>
				</SquareWrapper>
				<div className="flex space-x-[24px] w-full">
					<div className="flex-1 ">
						<SquareWrapper bgColor="bg-highlight-2" borderType="border-dashed">
							<p className="font-bold typo-b4">กฎหมาย</p>
						</SquareWrapper>
						<ul className="mt-4 list-disc list-inside ">
							<li>ไม่เคยมีกฎหมายเกี่ยวกับเรื่องนี้</li>
							<li>จะทำเรื่องนี้ได้ต้องแก้กฎหมาย</li>
						</ul>
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
						<SquareWrapper bgColor="bg-highlight-2" borderType="border-dashed">
							<p className="font-bold typo-b4">
								เสนอกฎหมาย ให้ผ่านศาลรัฐธรรมนูญ
							</p>
						</SquareWrapper>
						<SquareWrapper bgColor="bg-highlight-2" borderType="border-dashed">
							<p className="font-bold typo-b4">กษัตริย์ลงปรมาภิไธย</p>
						</SquareWrapper>
						<SquareWrapper bgColor="bg-highlight-2" borderType="border-dashed">
							<p className="font-bold typo-b4">กลายเป็นกฎหมาย</p>
						</SquareWrapper>
						<SquareWrapper bgColor="bg-black" styles=" text-highlight-2">
							<p className="font-bold typo-b4">ทำได้จริง!</p>
						</SquareWrapper>
					</div>
					<div className="flex-1 ">
						<SquareWrapper bgColor="bg-highlight-2" borderType="border-dashed">
							<p className="font-bold typo-b4">
								กฎกระทรวง ระเบียบข้อบังคับต่างๆ
							</p>
						</SquareWrapper>
						<SquareWrapper bgColor="bg-black" styles=" text-highlight-2">
							<p className="font-bold typo-b4 ">
								ฝ่ายบริหารและครม. ประชุมกันแล้วบังคับใช้ใน ราชการได้เลย
							</p>
						</SquareWrapper>
					</div>
				</div>
				<SquareWrapper bgColor="bg-highlight-3" borderType="border-dashed">
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
				<SquareWrapper bgColor="bg-black" styles=" text-highlight-3 text-start">
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
	);
};

export default home;
