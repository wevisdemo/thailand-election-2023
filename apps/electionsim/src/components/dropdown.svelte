<script lang="ts">
	import type { Party } from '../stores/party';

	let isOpen = false;

	export let options: Party[];
	export let selectedInput: string | undefined;
	export let onSelect: (newPart: string) => void;

	const toggleOpen = () => (isOpen = !isOpen);
</script>

<button
	class="border border-black mt-2 w-full px-4 py-2 flex items-center justify-start relative hover:opacity-100"
	on:click={toggleOpen}
>
	<h3 class="typo-b3 font-bold flex-1 opacity-30 text-left">
		{selectedInput || 'เลือกพรรค'}
	</h3>
	<svg
		width="16"
		height="17"
		viewBox="0 0 16 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.32012 11.06L3.52012 6.25997L4.19212 5.58797L8.32012 9.71597L12.4481 5.58797L13.1201 6.25997L8.32012 11.06Z"
			fill="#161616"
		/>
	</svg>
	{#if isOpen}
		<div
			class="absolute -bottom-60 left-0 border border-black w-full py-2 flex flex-col overflow-scroll h-60 bg-white z-10"
		>
			{#each options as { Name }}
				<div
					class="py-2 hover:bg-gray-4 {selectedInput === Name
						? 'bg-gray-4'
						: ''}"
					on:click={() => onSelect(Name)}
				>
					{Name}
				</div>
			{/each}
		</div>
	{/if}
</button>
