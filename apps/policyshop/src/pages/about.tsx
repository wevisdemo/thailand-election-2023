import { NextPage } from 'next';
import WvSharer from '@wevisdemo/ui/react/sharer';
import { imgPrefix } from '@/utils/path';
import { useEffect } from 'react';
import Link from 'next/link';
import config from '../../tsconfig.json';
import Layout from '@/components/Layout';

const AboutPage: NextPage = ({}) => {
	useEffect(() => {
		// @ts-ignore
		import('@thailand-election-2023/components');
	}, []);

	const getShareUrl = () => {
		// const host = process.env.SECURE_HOST;
		// const host = window.location.hostname;
		return config.web_url;
	};

	const handleClickDownload = () => {
		window.open(
			'https://sheets.wevis.info/dashboard/#/nc/view/41ebf90e-33f4-43d3-859f-a09034169cfa',
			'__blank'
		);
	};

	const handleClickFeedback = () => {
		window.open('https://airtable.com/shryu4errnlj1LWsM', '__blank');
	};

	const handleClickGithub = () => {
		window.open(
			'https://github.com/wevisdemo/thailand-election-2023',
			'__blank'
		);
	};

	return (
		<>
			<Layout title="กลับไปหน้าค้นหา">
				<main>
					<div className="px-[36px] max-w-[700px] m-auto mt-[60px]">
						<h1 className="font-bold text-center typo-h3">เกี่ยวกับโครงการ</h1>
						<div className="mt-[50px]">
							<h2 className="font-bold typo-h5">เป้าหมาย</h2>
							<p className="mt-[15px]">
								การเลือกตั้ง คือกลไกตามระบอบประชาธิปไตย
								ที่เปิดโอกาสให้ประชาชนซึ่งเป็นเจ้าของอำนาจ เลือก ‘ผู้แทน’
								เข้าไปทำหน้าที่แทนตัวเอง ทุกๆ การเข้าคูหาและทุกๆ กากบาท
								จึงเป็นการตัดสินใจครั้งสำคัญ ว่าเราจะใช้อำนาจของเรา
								เพื่อเปลี่ยนแปลงสังคมและประเทศที่เราอยู่ไปในทิศทางไหน <br />
								<br />
								โปรเจกต์ ‘เลือกตั้งรอบนี้ พรรคคุณพี่ขายอะไรหรอคะ?’ นี้ พวกเรา
								WeVis จึงพยายามรวบรวมข้อมูลนโยบายต่างๆ
								ของพรรคการเมืองที่ลงรับสมัครเลือกตั้ง 66
								มาให้ประชาชนผู้มีสิทธิเลือกตั้งอย่างพวกเราค้นหาได้ง่ายๆ
								ดูว่ามีพรรคไหนเสนอนโยบายที่เราสนใจ ต้องการ
								หรือช่วยให้ชีวิตเราดีขึ้นได้ โดยสามารถเลือกดูตามหมวดหมู่
								คีย์เวิร์ด หรือเปรียบเทียบระหว่างพรรคได้อย่างสะดวก
								<br />
								<br /> ก่อนเข้าคูหา #เลือกตั้ง66 นี้
								พวกเราเลยออยากชวนทุกคนมาลองศึกษาข้อมูลให้ดี
								เพื่อตัดสินใจมอบอำนาจให้กับ ‘ผู้แทน’
								ที่จะเข้าไปในรัฐสภาเพื่อใช้สิทธิและเสียงแทนเราอย่างแท้จริง
							</p>
						</div>
						<div className="mt-[50px]">
							<h2 className="font-bold typo-h5">ที่มาของข้อมูล</h2>
							<ul className="mt-[15px]">
								<li>
									ข้อมูลเบื้องต้นจากเว็บไซต์/โซเชียลมีเดียหลักของแต่ละพรรคการเมือง
								</li>
								<li>
									<a
										className="underline underline-offset-1 decoration-solid text-gray-3"
										target="_blank"
										href="https://drive.google.com/file/d/1HSKv9OjbxbfQbUcWVc5SADhRcwP_sYyt/view"
									>
										เอกสารรายขื่อผู้สมัครรับเลือกตั้งแบบบัญชีรายชื่อ จาก กกต.
									</a>
								</li>
							</ul>
						</div>
						<div className="mt-[50px]">
							<h2 className="font-bold typo-h5">นโยบายการนำข้อมูลไปใช้ต่อ</h2>
							<p className="mt-[15px]">
								ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
								และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
								Attribution-NonCommercial License (CC-BY-NC)
								คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
								แต่ห้ามนำไปใช้เพื่อการค้า สามารถดูรายละเอียดเพิ่มเติมได้ที่{' '}
								<a
									href="wevis.info/terms-of-use"
									className="underline text-gray-3"
								>
									wevis.info/terms-of-use
								</a>
								<br />
								<br /> หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
								ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
								หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team@punchup.world
							</p>
						</div>
						<div className="mt-[50px]">
							<h2 className="font-bold typo-h5">ทีมงานร่วมพัฒนา</h2>
							<div>
								<p className="mt-[15px] font-bold">เขียนโปรแกรม</p>
								<a
									className="underline text-gray-3"
									href="https://github.com/petchill"
								>
									petchill
								</a>
								,{' '}
								<a
									className="underline text-gray-3"
									href="https://github.com/MEEP00H"
								>
									MEEP00H
								</a>
							</div>
							<div>
								<p className="mt-[15px] font-bold">ออกแบบ</p>
								<a
									className="underline text-gray-3"
									href="https://www.linkedin.com/in/sapanya-srisook-693206104/"
								>
									Sapanya Srisook
								</a>
								,{' '}
								<a
									className="underline text-gray-3"
									href="https://www.instagram.com/namsaisupavong/"
								>
									Namsai Supavong
								</a>
							</div>
							<div>
								<p className="mt-[15px] font-bold">สืบค้นและรวบรวมข้อมูล</p>
								<a
									className="underline text-gray-3"
									href="https://www.linkedin.com/in/thanisara-r/"
								>
									Thanisara GG
								</a>
								,{' '}
								<a
									className="underline text-gray-3"
									href="https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/"
								>
									Mean Suphisara
								</a>
								,{' '}
								<a
									className="underline text-gray-3"
									href="https://www.linkedin.com/in/pantira-monsumrith-b42018224/"
								>
									Fhy Pantira
								</a>
							</div>
							<div>
								<p className="mt-[15px] font-bold">บรรณาธิการ</p>
								<a
									className="underline text-gray-3"
									href="https://www.linkedin.com/in/thanisara-r/"
								>
									Thanisara GG
								</a>
							</div>
							<div>
								<p className="mt-[15px] font-bold">ประสานงานและจัดการอื่นๆ</p>
								<a
									className="underline text-gray-3"
									href="https://www.linkedin.com/in/pantira-monsumrith-b42018224/"
								>
									Fhy Pantira
								</a>
								,{' '}
								<a
									className="underline text-gray-3"
									href="https://github.com/Th1nkK1D"
								>
									Th1nkK1D
								</a>
							</div>
						</div>
						<div className="mt-[50px]">
							<h2 className="font-bold typo-h5">หมายเหตุ</h2>
							<p className="mt-[15px]">
								<a
									className="underline text-gray-3"
									href="https://punchup.world/"
								>
									Punch Up
								</a>{' '}
								และ{' '}
								<a className="underline text-gray-3" href="https://wevis.info/">
									WeVis
								</a>{' '}
								ได้รับการสนับสนุนทุนในการดำเนินงานจาก{' '}
								<a
									className="underline text-gray-3"
									href="https://www.ned.org/"
								>
									National Endowment for Democracy (NED)
								</a>{' '}
								ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
								ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
							</p>
						</div>
						<div className="py-[20px] md:py-[50px] flex md:flex-wrap flex-col md:flex-row  justify-center gap-[10px] w-fit m-auto">
							<div
								onClick={handleClickDownload}
								className=" border-[var(--color-black)] border-[3px] rounded-[100px] py-[10px] px-[20px] flex gap-[10px] justify-items-center hover:cursor-pointer"
							>
								<img
									className="w-[20px] h-[20px] my-auto"
									src={`${imgPrefix}/about_page_icon.svg`}
									alt="about_page_icon-1"
								/>
								<p className="font-bold typo-b6">ดาวน์โหลดข้อมูล</p>
							</div>
							<div
								onClick={handleClickFeedback}
								className=" border-[var(--color-black)] border-[3px] rounded-[100px] py-[10px] px-[20px] flex gap-[10px] justify-items-center hover:cursor-pointer"
							>
								<img
									className="w-[20px] h-[20px] my-auto"
									src={`${imgPrefix}/about_page_icon-1.svg`}
									alt="about_page_icon-1"
								/>
								<p className="font-bold typo-b6">Feedback</p>
							</div>
							<div
								onClick={handleClickGithub}
								className=" border-[var(--color-black)] border-[3px] rounded-[100px] py-[10px] px-[20px] flex gap-[10px] justify-items-center hover:cursor-pointer"
							>
								<img
									className="w-[20px] h-[20px] my-auto"
									src={`${imgPrefix}/about_page_icon-2.svg`}
									alt="about_page_icon-1"
								/>
								<p className="font-bold typo-b6">View on Github</p>
							</div>
						</div>
						<div className="grid gap-[10px] justify-center justify-items-center m-auto pt-[20px] md:pt-[40px] pb-[30px] md:pb-[60px]">
							<WvSharer url={getShareUrl()} />
							<p className="font-bold typo-b3">#WeVisElection66</p>
							<Link
								href={'/'}
								className=" border-[var(--color-gray-2)] border-[3px] rounded-[100px] py-[10px] px-[20px] justify-items-center"
							>
								<p className="font-bold typo-b6">กลับไปหน้าค้นหา</p>
							</Link>
						</div>
					</div>
					<election-footer></election-footer>
				</main>
			</Layout>
		</>
	);
};

export default AboutPage;
