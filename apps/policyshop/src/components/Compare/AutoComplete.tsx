import { IDropdownOption } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

interface PropsType {
	options: IDropdownOption<any>[];
	currentOption: IDropdownOption<any> | null;
	onSelect: (option: IDropdownOption<any>) => void;
	placeholder?: string;
}

const AutoComplete: FunctionComponent<PropsType> = ({
	options,
	currentOption,
	onSelect,
	placeholder,
}) => {
	const ddRef = useRef<HTMLDivElement>(null);
	const [showList, setShowList] = useState<boolean>(true);
	const [value, setValue] = useState<string>(currentOption?.value || '');
	const [expand, setExpand] = useState<boolean>(false);
	const [displayOptions, setDisplayOptions] = useState<IDropdownOption<any>[]>(
		[]
	);

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

	const labelClass = (): string => {
		return currentOption !== null
			? 'text-[var(--color-black)]'
			: 'text-[var(--color-gray-3)]';
	};

	const getLabel = (): string => {
		if (!currentOption) {
			return placeholder || 'เลือกตัวเลือก';
		}
		return currentOption.label;
	};

	const onChangeOption = (option: IDropdownOption<any>) => {
		onSelect(option);
		setExpand(false);
	};

	const onClickDD = () => {
		if (!expand) {
			setExpand(true);
			setShowList(true);
		}
	};

	const onClickArrow = () => {
		if (expand) {
			setExpand(false);
			setShowList(true);
		}
	};

	const getBorderColor = (): string => {
		let borderColor = 'var(--color-black)';
		if (expand) {
			borderColor = 'var(--color-highlight-2)';
		}
		return borderColor;
	};

	useEffect(() => {
		if (!showList) {
			const regex = new RegExp(
				value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
				'igm'
			);
			const newOptions = options.filter((option) => option.value.match(regex));
			setDisplayOptions(newOptions);
		} else {
			setDisplayOptions(options);
		}
	}, [value, options, showList]);

	return (
		<div className="relative w-full" ref={ddRef}>
			<div
				className={`flex items-center justify-between px-[16px] py-[10px] bg-[var(--color-white)] border-[3px] rounded-[50px]`}
				onClick={() => onClickDD()}
				style={{ borderColor: getBorderColor() }}
			>
				<input
					placeholder={placeholder}
					className="w-full"
					type="text"
					value={value}
					onChange={(e) => {
						setShowList(false);
						setValue(e.target.value);
					}}
				/>
				<img
					src={`${imgPrefix}/Chevron.svg`}
					alt="dropdown-arrow"
					className="hover:cursor-pointer"
					style={{
						transform: `${expand ? 'rotate(180deg)' : 'none'}`,
					}}
					onClick={() => onClickArrow()}
				/>
			</div>
			{expand && (
				<div className="absolute w-full max-h-[300px] overflow-y-auto z-50 mt-[12px] p-[15px] bg-[var(--color-highlight-1)] border-[3px] border-[var(--color-black)] rounded-[10px]">
					{displayOptions.length === 0 ? (
						<p>ไม่พบข้อมูล</p>
					) : (
						displayOptions.map((item, index) => {
							return (
								<div
									key={`option-${index}`}
									className="hover:cursor-pointer hover:bg-[var(--color-highlight-2)] rounded-[10px]"
								>
									<div
										className="p-[5px]"
										key={`option-${index}`}
										onClick={() => onChangeOption(item)}
									>
										{item.label}
									</div>
									{index !== options.length - 1 && (
										<hr className="border-t-[1px] border-[var(--color-highlight-2)] w-[98%] mx-auto" />
									)}
								</div>
							);
						})
					)}
				</div>
			)}
		</div>
	);
};

export default AutoComplete;
