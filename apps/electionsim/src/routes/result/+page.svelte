<script lang="ts">
	import { onMount } from 'svelte';
	import { districtPopularity } from '../../stores/district-popularity';
	import { party } from '../../stores/party';
	import { representatives } from '../../stores/representatives';

	onMount(async () => {
		await party.load();
		console.log($party);
		await districtPopularity.load();
		console.log($districtPopularity);
		console.log($representatives);
	});
</script>

<div class="h-full flex flex-col">
	<h1>Result page</h1>
	Check console for example of districtPopularity and representatives stores
</div>
