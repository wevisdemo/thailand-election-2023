import { useTour } from '@reactour/tour';
import * as d3 from 'd3';
import { useCallback, useMemo, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PersonCustom } from '../../../models/person';
import { usePersonStore } from '../../../store/person';
import { convertToInternationalCurrencySystem } from '../../util/calculation';

type Props = {
	width: number;
	height: number;
	filteredPerson: PersonCustom[];
};

const R = 30;
const LIMITER = 25;
const CIRCLE_MARGIN = 5;
const TOOLTIP_OFFSET = 10;

const MainNav = ({ width, height, filteredPerson }: Props) => {
	const [pagination, setPagination] = useState<{
		currentPage: number;
		itemPerPage: number;
		totalPage: number;
		items: PersonCustom[];
		hasMore: boolean;
	}>({
		currentPage: 0,
		itemPerPage: 40,
		totalPage: 1,
		items: [],
		hasMore: true,
	});

	useMemo(() => {
		const data = filteredPerson.filter(
			(d) => d.countCompShare > 0 || d.countDirector > 0
		);

		setPagination((prev) => ({
			...prev,
			currentPage: 0,
			totalPage: Math.round(data.length / prev.itemPerPage),
			items: data.slice(0, prev.itemPerPage),
		}));
	}, [filteredPerson]);

	const { xScale, getWidth } = useMemo(() => {
		const xScale = d3.scaleLinear().domain([-10, 30]).range([0, width]);

		const getWidth = (totalPctShare: number) => {
			const w =
				totalPctShare <= 0
					? xScale(0) - xScale(totalPctShare)
					: xScale(totalPctShare) - xScale(0);

			return totalPctShare > 10 ? w : w;
		};

		return {
			xScale,
			getWidth,
		};
	}, [width]);

	const fetchMoreData = () =>
		setPagination((prev) =>
			pagination.items.length >= filteredPerson.length
				? { ...prev, hasMore: false }
				: {
						...prev,
						currentPage: prev.currentPage + 1,
						items: prev.items.concat(
							filteredPerson.splice(
								(prev.currentPage + 1) * prev.itemPerPage,
								prev.itemPerPage
							)
						),
				  }
		);

	const { setSelectedPerson, party } = usePersonStore();
	const { currentStep, setCurrentStep } = useTour();
	const tooltipRef = useRef<HTMLDivElement>(null);
	const vizRef = useRef<HTMLDivElement>(null);

	const handleClick = useCallback(
		(d: PersonCustom) => {
			const p = party.find((p) => p.Name === d.PartyName);

			setSelectedPerson(
				p
					? {
							...d,
							Party: {
								Id: p.Id,
								Name: p.Name,
								Color: p.Color,
								Images: Array.isArray(p.Images)
									? `/mpasset/party/${p.Name}.webp`
									: null,
							},
					  }
					: d
			);

			setCurrentStep(currentStep === 0 ? 1 : 5);
		},
		[currentStep, party, setCurrentStep, setSelectedPerson]
	);

	return (
		<div className="relative" ref={vizRef}>
			<InfiniteScroll
				className="tour1-first-step tour3-first-step"
				dataLength={pagination.items.length}
				next={fetchMoreData}
				hasMore={pagination.hasMore}
				loader={<h4>Loading...</h4>}
				height={height}
			>
				<div className="flex flex-col gap-y-[2px]">
					{pagination.items.map((d, index) => {
						const isUnderLimit = d.totalPctShare < LIMITER;
						const xZero = xScale(0);
						const xShare = xScale(d.totalPctShare);
						const personParty = party.find((p) => p.Name === d.PartyName);
						return (
							<div
								className="flex flex-row relative cursor-pointer"
								key={index}
								onClick={() => handleClick(d)}
								onMouseOver={() => {
									if (!tooltipRef.current) return;
									tooltipRef.current.style.visibility = 'visible';
									tooltipRef.current.innerText = d.Name;
								}}
								onMouseLeave={() => {
									if (!tooltipRef.current) return;
									tooltipRef.current.style.visibility = 'hidden';
								}}
								onMouseMove={({ nativeEvent: { pageX, pageY } }) => {
									if (!tooltipRef.current || !vizRef.current) return;
									const { left, top } = vizRef.current.getBoundingClientRect();
									tooltipRef.current.style.left = `${
										pageX - left + TOOLTIP_OFFSET
									}px`;
									tooltipRef.current.style.top = `${
										pageY - top + TOOLTIP_OFFSET
									}px`;
								}}
							>
								<div className="relative h-[30px]">
									{/* avatar */}
									<div
										className="absolute"
										style={{
											left: isUnderLimit
												? d.totalPctShare < 0
													? xZero + R + CIRCLE_MARGIN
													: xZero - R - CIRCLE_MARGIN
												: xShare - (R + 2),
										}}
									>
										<div
											className=" w-[30px] h-[30px] bg-cover bg-top rounded-full 
                border-[1px] border-black"
											style={{
												backgroundImage: `url(${String(
													d.Images || '/mpasset/design_assets/profile_pic.jpg'
												)})`,
											}}
										/>
										{/* party icon */}
										<div
											className="absolute w-[11.25px] h-[11.25px] bg-cover bg-top rounded-full"
											style={{
												backgroundImage: `url(${String(
													d.PartyName
														? `/mpasset/party/${d.PartyName}.webp`
														: ''
												)})`,
												bottom: 0,
											}}
										/>
									</div>
									{/* bar chart */}
									<div
										className="h-[20px] my-[5px]"
										style={{
											width: getWidth(d.totalPctShare!),
											marginLeft: d.totalPctShare! < 0 ? xShare : xZero,
											backgroundColor: personParty
												? String(personParty.Color || 'black')
												: 'black',
										}}
									/>
									{/* text */}
									<div
										className="typo-b7 my-auto absolute whitespace-nowrap"
										style={{
											color: d.totalPctShare! < LIMITER ? 'black' : 'white',
											textAlign: d.totalPctShare! < LIMITER ? 'start' : 'end',
											top: '8px',
											left: isUnderLimit
												? d.totalPctShare! < 0
													? xZero + R * 2.5
													: xShare + CIRCLE_MARGIN
												: xShare - (R * 2 + CIRCLE_MARGIN),
										}}
									>
										{d.totalValueShare !== 0
											? convertToInternationalCurrencySystem(d.totalValueShare!)
											: d.countDirector > 0 || d.countCompShare > 0
											? `เกี่ยวข้องกับธุรกิจแต่ไม่มีหุ้นอยู่`
											: 'ไม่เกี่ยวข้องกับธุรกิจ'}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</InfiniteScroll>
			<div
				ref={tooltipRef}
				style={{
					position: 'absolute',
					backgroundColor: 'white',
					border: 'solid',
					borderWidth: '1px',
					borderRadius: '5px',
					padding: '10px',
					visibility: 'hidden',
				}}
			/>
		</div>
	);
};

export default MainNav;
