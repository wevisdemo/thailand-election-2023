<script lang="ts">
	export let name: string;
	export let position: string;
	export let content: string;
</script>

<div class="flex">
	<div class="mr-[10px]">
		<div class="w-8 h-8 rounded-full bg-gray-3" />
	</div>
	<div
		class="bg-gray-4 px-5 py-2 w-full rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]"
	>
		<h4 class="typo-ibmplex typo-b6 font-bold">{name}</h4>
		<h4 class="typo-ibmplex typo-b6 ">{position}</h4>
		<h4 class="typo-ibmplex typo-b4 mt-[10px]">
			{content}
		</h4>
	</div>
</div>
