<script lang="ts">
	import { onMount } from 'svelte';
	import { zoom, zoomIdentity } from 'd3-zoom';
	import { select, selectAll, pointer } from 'd3-selection';
	import mapString from '../../../data/map-66-tentative.raw.csv?raw';
	import DistrictCell from './district-cell.svelte';
	import DistrictTooltip from './district-tooltip.svelte';
	import type { DistrictTooltipData } from './district-tooltip.svelte';
	import PartylistCell from './partylist-cell.svelte';
	import PartylistTooltip from './partylist-tooltip.svelte';
	import type { PartyListTooltipData } from './partylist-tooltip.svelte';
	import { party } from '../../../stores/party';
	import { representatives } from '../../../stores/representatives';
	import type { Party } from '@thailand-election-2023/database';
	import type { Coordinate2D } from './coordinate';
	import { districtPopularity } from '../../../stores/district-popularity';

	interface DistrictListData {
		province: string;
		districtNumber: number;
		position: Coordinate2D;
	}

	const CANVAS_PADDING = 30;
	const CELL_SIZE = 10;
	const PARTYLIST_COL = 10;
	const PARTYLIST_MARGIN = CELL_SIZE * 6;

	const electorialDistrictTable = mapString
		.split('\r\n')
		.map((row) => row.split(','));

	$: electorialDistrictList = (() => {
		const districtCountMap = new Map<string, number>();

		return electorialDistrictTable.flatMap((row, rowIndex) =>
			row.reduce<DistrictListData[]>((list, province, colIndex) => {
				if (province.length === 0) return list;

				const districtNumber = (districtCountMap.get(province) || 0) + 1;

				if (!$districtPopularity[province]?.[districtNumber]) return list;

				districtCountMap.set(province, districtNumber);

				return [
					...list,
					{
						province,
						districtNumber,
						position: {
							x: colIndex * CELL_SIZE + CANVAS_PADDING,
							y: rowIndex * CELL_SIZE + CANVAS_PADDING,
						},
					},
				];
			}, [])
		);
	})();

	$: electorialDistrictMapWidth = CELL_SIZE * electorialDistrictTable[0].length;
	$: electorialDistrictMapHeight = CELL_SIZE * electorialDistrictTable.length;

	$: partylistAmount = $representatives.reduce(
		(sum, { fromPartylist }) => sum + fromPartylist,
		0
	);
	$: partylistHeight = CELL_SIZE * Math.floor(partylistAmount / PARTYLIST_COL);
	const partylistWidth = CELL_SIZE * PARTYLIST_COL;

	$: partylistOffsetY =
		(electorialDistrictMapHeight - partylistHeight) / 2 + CANVAS_PADDING;

	$: [partylistMap] = $representatives
		.filter(({ fromPartylist }) => fromPartylist > 0)
		.sort((a, z) => z.fromPartylist - a.fromPartylist)
		.reduce<[{ party: Party; cells: Coordinate2D[] }[], number]>(
			([list, startIndex], { party, fromPartylist }) => [
				[
					...list,
					{
						party,
						cells: new Array(fromPartylist).fill(null).map((_, index) => ({
							x:
								((startIndex + index) % PARTYLIST_COL) * CELL_SIZE +
								electorialDistrictMapWidth +
								PARTYLIST_MARGIN +
								CANVAS_PADDING,
							y:
								Math.floor((startIndex + index) / PARTYLIST_COL) * CELL_SIZE +
								partylistOffsetY,
						})),
					},
				],
				startIndex + fromPartylist,
			],
			[[], 0]
		);

	$: canvasWidth =
		electorialDistrictMapWidth +
		(partylistAmount > 0 ? partylistWidth + PARTYLIST_MARGIN : 0) +
		CANVAS_PADDING * 2;
	$: canvasHeight = electorialDistrictMapHeight + CANVAS_PADDING * 2;

	let partylistTooltip: PartyListTooltipData | null = null;
	let districtTooltip: DistrictTooltipData | null = null;

	let d3 = {
		zoom,
		zoomIdentity,
		select,
		selectAll,
		pointer,
	};

	let hasZoomed: boolean = false;
	let resetZoom: () => void;
	let zoomIn: () => void;
	let zoomOut: () => void;

	onMount(() => {
		const svg = d3.select<SVGElement, unknown>('svg#waffle-map-svg');
		const mapContainer = d3.select<SVGGElement, unknown>('#map-container');

		const d3Zoom = d3
			.zoom<SVGElement, unknown>()
			.translateExtent([
				[0, 0],
				[canvasWidth, canvasHeight],
			])
			.scaleExtent([1, 5])
			.on('zoom', zoomed);

		svg.call(d3Zoom);

		function zoomed({ transform }: any) {
			mapContainer.attr('transform', transform);
			hasZoomed = !(
				transform.x === 0 &&
				transform.y === 0 &&
				transform.k === 1
			);
		}

		resetZoom = () => {
			svg.transition().duration(500).call(d3Zoom.transform, d3.zoomIdentity);
			hasZoomed = false;
		};

		zoomIn = () => svg.transition().duration(500).call(d3Zoom.scaleBy, 1.4);

		zoomOut = () => svg.transition().duration(500).call(d3Zoom.scaleBy, 0.7);
	});
</script>

<svg
	viewBox="0 0 {canvasWidth} {canvasHeight}"
	class="w-full mx-6 sm:m-4 md:m-0 relative h-full {hasZoomed
		? 'cursor-move'
		: ''}"
	id="waffle-map-svg"
>
	<defs>
		{#each $party.list as { Name, Color }}
			<pattern
				id="party-bg-{Name}"
				x="0"
				y="0"
				width={CELL_SIZE}
				height={CELL_SIZE}
			>
				<rect width="100%" height="100%" fill={Color} />
				<image
					href="/party-icons/{Name}.svg"
					height={CELL_SIZE * 0.6}
					width={CELL_SIZE * 0.6}
					x={CELL_SIZE * 0.2}
					y={CELL_SIZE * 0.2}
				/>
			</pattern>
		{/each}
	</defs>

	<g id="map-container">
		{#each electorialDistrictList as district}
			<DistrictCell {...district} size={CELL_SIZE} bind:districtTooltip />
		{/each}

		{#each partylistMap as partylist}
			<PartylistCell {...partylist} size={CELL_SIZE} bind:partylistTooltip />
		{/each}

		<text x="10" y="18" class="typo-b7">ส.ส. เขต</text>
		<text
			x={partylistMap[0].cells[0].x + 7}
			y={partylistMap[0].cells[0].y - 10}
			class="typo-b7">ส.ส. บัญชีรายชื่อ</text
		>
	</g>
</svg>

{#if partylistTooltip}
	<PartylistTooltip {partylistTooltip} />
{/if}

{#if districtTooltip}
	<DistrictTooltip {districtTooltip} />
{/if}

<div class="absolute right-8 bottom-8 flex flex-col space-y-2">
	{#if hasZoomed}
		<button on:click={resetZoom}>รีเซ็ตแผนที่</button>
	{/if}
	<button on:click={zoomIn}>ซูมเข้า</button>
	<button on:click={zoomOut}>ซูมออก</button>
</div>
