import { useTour } from '@reactour/tour';
import * as d3 from 'd3';
import React from 'react';
import { PersonCustom } from '../../../models/person';
import { usePersonStore } from '../../../store/person';
import { convertToInternationalCurrencySystem } from '../../util/calculation';

type Props = {
	width: number;
	height: number;
	filteredPerson: PersonCustom[];
};

const MainNav = ({ width, height, filteredPerson }: Props) => {
	const { setSelectedPerson, party } = usePersonStore();

	// tour
	const { currentStep, setCurrentStep } = useTour();

	const handleClick = React.useCallback(
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

	React.useMemo(() => {
		if (filteredPerson.length > 0) {
			const data = filteredPerson.filter(
				(d) => d.countCompShare > 0 || d.countDirector > 0
			);

			const countPerson = data.length + 2;
			const contentHeight = countPerson * 40;

			const svg = d3
				.select('.chart-main')
				.attr('width', width)
				.attr('height', Math.max(contentHeight, height));

			const yScaleBand = d3
				.scaleBand()
				.domain(data.map((_, i) => `${i}`))
				.range([0, 40 * countPerson])
				.paddingInner(0.5)
				.paddingOuter(0.2);

			const xScale = d3.scaleLinear().domain([-10, 30]).range([0, width]);

			const avatar_size = 400;
			svg.selectAll('defs').remove();

			//tooltip
			const tooltip = d3
				.select('#tooltip-main-nav')
				.style('position', 'absolute')
				.style('visibility', 'hidden')
				.style('background-color', 'white')
				.style('border', 'solid')
				.style('border-width', '1px')
				.style('border-radius', '5px')
				.style('padding', '10px');

			const node = svg
				.selectAll('g')
				.data(data)
				.join('g')
				.attr('transform', (_, i) => `translate(0, ${yScaleBand(`${i!}`)})`)
				.attr('class', `cursor-pointer`)
				.on('click', (_, d: PersonCustom) => handleClick(d))
				.on('mouseover', function (_, d) {
					tooltip.style('visibility', 'visible');
					tooltip.html(d.Name!);
				})
				.on('mousemove', function (e) {
					return tooltip
						.style('top', e.offsetY + 10 + 'px')
						.style('left', e.offsetX + 10 + 'px');
				})
				.on('mouseout', function () {
					return tooltip.style('visibility', 'hidden');
				});

			node.selectAll('rect').remove();
			node.selectAll('text').remove();

			const getWidth = (totalPctShare: number) => {
				let w =
					totalPctShare <= 0
						? xScale(0) - xScale(totalPctShare)
						: xScale(totalPctShare) - xScale(0);

				// return w <= 0 ? 10 : w
				return totalPctShare > 10 ? w : w;
			};

			node
				.append('rect')
				.attr('x', (d) =>
					d.totalPctShare! < 0 ? xScale(d.totalPctShare!) : xScale(0)
				)
				.attr('y', 0)
				.attr('width', (d) => getWidth(d.totalPctShare!))
				.attr('height', (_) => yScaleBand.bandwidth())
				.attr('fill', (d) =>
					d.PartyName ? `url(#pattern_party_color_${d.PartyName})` : 'black'
				);

			node.selectAll('defs').remove();

			const defs = node
				.filter((d) => typeof d.Images === 'string' && d.Images !== '')
				.append('svg:defs');
			// profile
			defs
				.append('svg:pattern')
				.attr(
					'id',
					(d) => 'pattern_person_avatar_' + d.Name.replaceAll(' ', '-')
				)
				.attr('width', 1)
				.attr('height', 1)
				// .attr("patternUnits", "userSpaceOnUse")
				.attr('patternContentUnits', 'objectBoundingBox')
				.append('use')
				.attr('xlink:href', (_, i) => '#person_avatar' + i)
				.attr('transform', 'scale(0.0025)');
			defs
				.append('svg:image')
				.attr('id', (_, i) => 'person_avatar' + i)
				.attr('xlink:href', (d) => String(d.Images))
				.attr('width', avatar_size)
				.attr('height', avatar_size)
				.attr('x', 0)
				.attr('y', 0);

			const r = 30;
			const limiter = 25;
			node.selectAll('circle').remove();

			let circleMargin = 5;

			node
				.append('rect')
				.attr('x', (d) =>
					d.totalPctShare < limiter
						? d.totalPctShare < 0
							? xScale(0) + r + circleMargin
							: xScale(0) - r - circleMargin
						: xScale(d.totalPctShare!) - (r + 2)
				)
				.attr('y', yScaleBand.bandwidth() - r + circleMargin)
				.attr('rx', 49)
				.attr('width', r)
				.attr('height', r)
				.attr('fill', (d) =>
					typeof d.Images === 'string' && d.Images !== ''
						? `url(#pattern_person_avatar_${d.Name.replaceAll(' ', '-')})`
						: 'url(#pattern_person_avatar_default)'
				)
				.attr('stroke', 'black');

			const rLogo = 10;
			node
				.filter((d) => typeof d.PartyName === 'string')
				.append('rect')
				.attr('x', (d) =>
					d.totalPctShare! < limiter
						? d.totalPctShare! < 0
							? xScale(0) + r + circleMargin
							: xScale(0) - r - circleMargin
						: xScale(d.totalPctShare!) - r
				)
				.attr('y', yScaleBand.bandwidth() - rLogo * 0.5)
				.attr('rx', 49)
				.attr('width', rLogo)
				.attr('height', rLogo)
				.attr('fill', (d) =>
					d.PartyName ? `url(#pattern_party_${d.PartyName})` : 'none'
				);

			node
				.append('text')
				.attr('x', (d) =>
					d.totalPctShare! < limiter
						? d.totalPctShare! < 0
							? xScale(0) + r * 2 + circleMargin * 2
							: xScale(d.totalPctShare!) + r * 0.5
						: xScale(d.totalPctShare!) - r * 2 - circleMargin
				)
				.attr('y', yScaleBand.bandwidth() * 0.5)
				.attr('rx', '2')
				.attr('fill', (d) => (d.totalPctShare! < limiter ? 'black' : 'white'))
				.attr('text-anchor', (d) =>
					d.totalPctShare! < limiter ? 'start' : 'end'
				)
				.attr('alignment-baseline', 'middle')
				.attr('class', 'typo-b7')
				.text((d) =>
					d.totalValueShare !== 0
						? convertToInternationalCurrencySystem(d.totalValueShare!)
						: d.countDirector > 0 || d.countCompShare > 0
						? `เกี่ยวข้องกับธุรกิจแต่ไม่มีหุ้นอยู่`
						: 'ไม่เกี่ยวข้องกับธุรกิจ'
				);

			// default unknown person
			const defsDefault = svg.append('svg:defs');
			defsDefault
				.append('svg:pattern')
				.attr('id', 'pattern_person_avatar_default')
				.attr('width', 1)
				.attr('height', 1)
				.attr('patternContentUnits', 'objectBoundingBox')
				.append('use')
				.attr('xlink:href', '#person_avatar_default')
				.attr('transform', 'scale(0.0025)');
			defsDefault
				.append('svg:image')
				.attr('id', 'person_avatar_default')
				.attr('xlink:href', '/mpasset/design_assets/profile_pic.jpg')
				.attr('width', avatar_size)
				.attr('height', avatar_size)
				.attr('x', 0)
				.attr('y', 0);

			// all party image
			const defsAllParty = defsDefault.selectAll(null).data(party);

			const defsEnter = defsAllParty.enter();
			defsEnter
				.append('svg:pattern')
				.attr('id', (d) => `pattern_party_${d.Name}`)
				.attr('width', 1)
				.attr('height', 1)
				.attr('patternContentUnits', 'objectBoundingBox')
				.append('use')
				.attr('xlink:href', (d) => `#party_avatar_${d.Name}`)
				.attr('transform', 'scale(0.0025)');

			defsEnter
				.append('svg:image')
				.attr('id', (d) => `party_avatar_${d.Name}`)
				.attr('xlink:href', (d) =>
					d.Images ? String(`/mpasset/party/${d.Name}.webp`) : ''
				)
				.attr('width', avatar_size)
				.attr('height', avatar_size)
				.attr('x', 0)
				.attr('y', 0);

			defsEnter
				.append('linearGradient')
				.attr('id', (d) => `pattern_party_color_${d.Name}`)
				.append('stop')
				.attr('stop-color', (d) => d.Color);
		}
	}, [filteredPerson, height, width, party, handleClick]);

	return (
		<div
			className={`overflow-y-scroll overflow-x-hidden relative`}
			style={{ maxHeight: `${height}px` }}
		>
			<div
				className="absolute top-0 inset-x-0 h-1/2 pointer-events-none
      tour1-first-step 
      tour3-first-step"
			/>
			<svg className="chart-main" />
			<div id="tooltip-main-nav" />
		</div>
	);
};

export default MainNav;
