import React, { FC } from 'react';
import { ArrowsType1 } from '../Arrows';
import Lottie from 'lottie-react';
import animationData from '@/components/lotties/policy.json';

const IntroPolicy: FC = () => {
	return (
		<div className="px-4 text-center bg-highlight-3 py-14 ">
			<p className="font-bold typo-h4">
				เลือกตั้งรอบนี้
				<br className=" md:hover:" /> พรรคคุณพี่
				<br className=" md:hover:" /> ขายอะไรหรอคะ?
			</p>
			<p className="mt-2 typo-h7 ">
				เทียบนโยบายหาเสียงเลือกตั้ง ‘66
				มาดูกันว่าพรรคไหนจะเป็นตัวแทนของเราได้บ้าง
			</p>
			<div className="w-[189px] md:w-[250px] mx-auto mt-5">
				<Lottie animationData={animationData} loop={true} />
			</div>
			<ArrowsType1 styles="mx-auto w-fit mt-11 animate-bounce" />
		</div>
	);
};

export default IntroPolicy;
