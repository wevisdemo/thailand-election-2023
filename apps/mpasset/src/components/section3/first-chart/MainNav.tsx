import { useTour } from '@reactour/tour';
import * as d3 from 'd3';
import { useCallback, useMemo, useRef } from 'react';
import { PersonCustom } from '../../../models/person';
import { usePersonStore } from '../../../store/person';
import { convertToInternationalCurrencySystem } from '../../util/calculation';

const AVATAR_SIZE = 400;
const R = 30;
const LIMITER = 25;
const CIRCLE_MARGIN = 5;
const R_LOGO = 10;
const TOOLTIP_OFFSET = 10;

type Props = {
	width: number;
	height: number;
	filteredPerson: PersonCustom[];
};

const MainNav = ({ width, height, filteredPerson }: Props) => {
	const { setSelectedPerson, party } = usePersonStore();
	const { currentStep, setCurrentStep } = useTour();
	const tooltipRef = useRef<HTMLDivElement>(null);

	const handleClick = useCallback(
		(d: PersonCustom) => {
			const p = party.find((p) => p.Name === d.PartyName);
			if (p)
				setSelectedPerson({
					...d,
					Party: {
						Id: p.Id,
						Name: p.Name,
						Color: p.Color,
						Images: Array.isArray(p.Images)
							? `/mpasset/party/${p.Name}.webp`
							: null,
					},
				});
			else setSelectedPerson(d);
			if (currentStep === 0) setCurrentStep(1);
			else setCurrentStep(5);
		},
		[currentStep, party, setCurrentStep, setSelectedPerson]
	);

	const { data, contentHeight, yScaleBand } = useMemo(() => {
		const data = filteredPerson.filter(
			(d) => d.countCompShare > 0 || d.countDirector > 0
		);
		const countPerson = data.length + 2;

		return {
			data,
			contentHeight: countPerson * 40,
			yScaleBand: d3
				.scaleBand()
				.domain(data.map((_, i) => `${i}`))
				.range([0, 40 * countPerson])
				.paddingInner(0.5)
				.paddingOuter(0.2),
		};
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

	return (
		<div
			className={`overflow-y-scroll overflow-x-hidden relative`}
			style={{ maxHeight: `${height}px` }}
		>
			<div className="absolute top-0 inset-x-0 h-1/2 pointer-events-none tour1-first-step tour3-first-step" />
			<svg
				className="chart-main"
				width={width}
				height={Math.max(contentHeight, height)}
			>
				<defs>
					<AvatarDefinition
						patternId="pattern_person_avatar_default"
						imageId="person_avatar_default"
						imageHref="/mpasset/design_assets/profile_pic.jpg"
					/>
					{data
						.filter((d) => typeof d.Images === 'string' && d.Images !== '')
						.map((d, i) => (
							<AvatarDefinition
								key={d.Id}
								patternId={
									'pattern_person_avatar_' + d.Name.replaceAll(' ', '-')
								}
								imageId={'person_avatar' + i}
								imageHref={`${d.Images}`}
							/>
						))}
					{party.map((d) => (
						<>
							<AvatarDefinition
								patternId={`pattern_party_${d.Name}`}
								imageId={`#party_avatar_${d.Name}`}
								imageHref={
									d.Images ? String(`/mpasset/party/${d.Name}.webp`) : ''
								}
							/>
							<linearGradient id={`pattern_party_color_${d.Name}`}>
								<stop stopColor={d.Color || undefined}></stop>
							</linearGradient>
						</>
					))}
				</defs>

				{data.map((d, i) => {
					const isUnderLimit = d.totalPctShare < LIMITER;
					const xZero = xScale(0);
					const xShare = xScale(d.totalPctShare);
					const ybandwidth = yScaleBand.bandwidth();

					return (
						<g
							key={d.Id}
							className="cursor-pointer"
							transform={`translate(0, ${yScaleBand(`${i!}`)})`}
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
							onMouseMove={({ nativeEvent: { offsetX, offsetY } }) => {
								if (!tooltipRef.current) return;
								tooltipRef.current.style.left = `${offsetX + TOOLTIP_OFFSET}px`;
								tooltipRef.current.style.top = `${offsetY + TOOLTIP_OFFSET}px`;
							}}
						>
							{/* bar chart */}
							<rect
								x={d.totalPctShare! < 0 ? xShare : xZero}
								y="0"
								width={getWidth(d.totalPctShare!)}
								height={ybandwidth}
								fill={
									d.PartyName
										? `url(#pattern_party_color_${d.PartyName})`
										: 'black'
								}
							/>
							{/* avatar */}
							<rect
								x={
									isUnderLimit
										? d.totalPctShare < 0
											? xZero + R + CIRCLE_MARGIN
											: xZero - R - CIRCLE_MARGIN
										: xShare - (R + 2)
								}
								y={ybandwidth - R + CIRCLE_MARGIN}
								rx="49"
								width={R}
								height={R}
								fill={
									typeof d.Images === 'string' && d.Images !== ''
										? `url(#pattern_person_avatar_${d.Name.replaceAll(
												' ',
												'-'
										  )})`
										: 'url(#pattern_person_avatar_default)'
								}
								stroke="black"
							/>
							{/* party logo */}
							<rect
								x={
									isUnderLimit
										? d.totalPctShare! < 0
											? xZero + R + CIRCLE_MARGIN
											: xZero - R - CIRCLE_MARGIN
										: xShare - R
								}
								y={ybandwidth - R_LOGO * 0.5}
								rx="49"
								width={R_LOGO}
								height={R_LOGO}
								fill={
									d.PartyName ? `url(#pattern_party_${d.PartyName})` : 'none'
								}
							/>
							{/* text */}
							<text
								x={
									isUnderLimit
										? d.totalPctShare! < 0
											? xZero + R * 2 + CIRCLE_MARGIN * 2
											: xShare + R * 0.5
										: xShare - R * 2 - CIRCLE_MARGIN
								}
								y={ybandwidth * 0.5}
								rx="2"
								fill={d.totalPctShare! < LIMITER ? 'black' : 'white'}
								textAnchor={d.totalPctShare! < LIMITER ? 'start' : 'end'}
								alignmentBaseline="middle"
								className="typo-b7"
							>
								{d.totalValueShare !== 0
									? convertToInternationalCurrencySystem(d.totalValueShare!)
									: d.countDirector > 0 || d.countCompShare > 0
									? `เกี่ยวข้องกับธุรกิจแต่ไม่มีหุ้นอยู่`
									: 'ไม่เกี่ยวข้องกับธุรกิจ'}
							</text>
						</g>
					);
				})}
			</svg>

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
			></div>
		</div>
	);
};

const AvatarDefinition = ({
	patternId,
	imageId,
	imageHref,
}: {
	patternId: string;
	imageId: string;
	imageHref: string;
}) => (
	<>
		<pattern
			id={patternId}
			width="1"
			height="1"
			patternContentUnits="objectBoundingBox"
		>
			<use xlinkHref={'#' + imageId}></use>
		</pattern>
		<image
			id={imageId}
			xlinkHref={imageHref}
			transform="scale(0.0025)"
			width={AVATAR_SIZE}
			height={AVATAR_SIZE}
			x="0"
			y="0"
		></image>
	</>
);

export default MainNav;
