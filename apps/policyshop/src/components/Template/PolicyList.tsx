import { Policy } from '@/types/components';
import { FunctionComponent } from 'react';
import PolicyCardWrapper from '../PolicyCardWrapper';
import RandomButton from '../RandomButton';

interface PropsType {
	policyList: Policy[];
	children?: React.ReactNode;
}

const TemplatePolicyList: FunctionComponent<PropsType> = ({
	policyList,
	children,
}) => {
	return (
		<div>
			<div className="grid gap-[8px]">{children}</div>
			{/* <div className="flex justify-between items-center mt-[32px]">
				<p>เรียงตาม</p>
				<RandomButton onClick={() => {}} />
			</div>
			<p className="mt-[16px] px-[16px]">
				ส่งข้อมูลให้ทีมงานเพื่ออัปเดตเพิ่มเติมที่ team@punchup.world
			</p> */}
			<div className="mt-[16px]">
				<PolicyCardWrapper policyList={policyList} />
			</div>
		</div>
	);
};

export default TemplatePolicyList;
