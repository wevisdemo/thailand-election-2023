<script lang="ts">
	import { contentManager, Content } from '../stores/content';

	$: currentContent = $contentManager.currentContent;
</script>

<div class="w-full fixed h-1 flex space-x-2">
	{#if currentContent == Content.Calculate || currentContent == Content.EditQuiz}
		<div class="beyondx-gradient-bg h-full w-full" />
	{/if}
	{#if currentContent <= Content.Quiz8}
		<div
			class="bg-[#2400DA] h-full w-[11.11%] {currentContent < Content.Analytics
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-[#4200BC] h-full w-[11.11%] {currentContent < Content.Election62
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-[#63009C] h-full w-[11.11%] {currentContent <
			Content.ReCalculate
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-[#81007E] h-full w-[11.11%] {currentContent < Content.Quiz1
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-[#9E0060] h-full w-[11.11%] {currentContent < Content.Quiz2
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-[#BC0043] h-full w-[11.11%] {currentContent < Content.Quiz3
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-[#DB0024] h-full w-[11.11%] {currentContent < Content.Quiz4
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-byx-red h-full w-[11.11%] {currentContent < Content.Quiz6
				? 'opacity-10'
				: ''}"
		/>
		<div
			class="bg-byx-red h-full w-[11.11%] {currentContent < Content.Quiz7
				? 'opacity-10'
				: ''}"
		/>
	{/if}
</div>
