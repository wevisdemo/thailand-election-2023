<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div
	class="fixed inset-0 w-full h-full bg-black opacity-50 z-10 overflow-scroll mt-1 md:mt-0"
/>
<div
	class="absolute flex flex-col items-center w-full wd:w-[650px] max-w-4xl -mt-10 md:mt-0 bg-white z-20"
	transition:fly={{ y: 400 }}
>
	<slot />
</div>
