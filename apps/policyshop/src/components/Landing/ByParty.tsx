import React, { FC, useState } from 'react';
import { ByPartyProps, IDropdownOption } from '@/types/components';
import AutoComplete from '../Compare/AutoComplete';
import router from 'next/router';

const ByParty: FC<ByPartyProps> = ({ partyOptions }) => {
	const [selectedPartyOption, setSelectedPartyOption] =
		useState<IDropdownOption<string> | null>(null);

	const onSelectParty = (option: IDropdownOption<string>) => {
		setSelectedPartyOption(option);
		router.push(`/party/${option.value}`);
	};

	return (
		<div className="container pt-10 mx-auto" id="ByParty">
			<p className="px-4 py-2 font-bold typo-h6 bg-highlight-2">
				นโยบายตามพรรค
			</p>
			<div className="mt-[16px] px-4 md:px-0">
				<AutoComplete
					options={partyOptions}
					currentOption={selectedPartyOption}
					onSelect={onSelectParty}
					placeholder="เลือกพรรค"
				/>
			</div>
		</div>
	);
};

export default ByParty;
