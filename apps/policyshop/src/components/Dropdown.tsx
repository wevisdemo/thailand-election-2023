import { IDropdownOption } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

interface PropsType {
	options: IDropdownOption[];
	currentOption: IDropdownOption | null;
	onSelect: (option: IDropdownOption) => void;
	placeholder?: string;
}

const Dropdown: FunctionComponent<PropsType> = ({
	options,
	currentOption,
	onSelect,
	placeholder,
}) => {
	const ddRef = useRef<HTMLDivElement>(null);
	const [expand, setExpand] = useState<boolean>(false);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ddRef.current && !ddRef.current.contains(event.target as Node)) {
				setExpand(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ddRef]);

	const onChangeOption = (option: IDropdownOption) => {
		onSelect(option);
		setExpand(false);
	};

	const getLabel = (): string => {
		if (!currentOption) {
			return placeholder || 'เลือกตัวเลือก';
		}
		return currentOption.label;
	};

	return (
		<div className="relative w-full" ref={ddRef}>
			<div
				className="flex justify-between px-[16px] py-[10px] bg-[var(--color-white)] border-[3px] border-[var(--color-black)] rounded-[50px] hover:cursor-pointer"
				onClick={() => setExpand(!expand)}
			>
				<span
					className={
						currentOption !== null
							? 'text-[var(--color-black)]'
							: 'text-[var(--color-gray-3)]'
					}
				>
					{getLabel()}
				</span>
				<img
					className="dropdown-arrow"
					src={`${imgPrefix}/Chevron.svg`}
					alt="dropdown-arrow"
					style={{ transform: `${expand ? 'rotate(180deg)' : 'none'}` }}
				/>
			</div>
			{expand && (
				<div className="absolute w-full max-h-[300px] overflow-y-auto mt-[12px] p-[15px] bg-[var(--color-white)] border-[3px] border-[var(--color-black)] rounded-[10px]">
					{options.map((item, index) => {
						return (
							<div
								className="[&:not(:first-child)]:border-t-[1px] border-[var(--color-black)] py-[5px] hover:cursor-pointer hover:bg-[var(--color-gray-1)]"
								key={`option-${index}`}
								onClick={() => onChangeOption(item)}
							>
								{item.label}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
