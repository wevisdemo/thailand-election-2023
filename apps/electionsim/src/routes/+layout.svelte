<script lang="ts">
	import { onMount } from 'svelte';
	import '@thailand-election-2023/styles/dist/index.css';
	import '../app.css';

	onMount(() => import('@thailand-election-2023/components'));
</script>

<slot />

<election-cookie />
