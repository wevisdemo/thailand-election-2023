<script lang="ts">
	import { base } from '$app/paths';
	import Intro from '../components/intro/intro.svelte';
	import Metadata from '../components/metadata.svelte';
</script>

<Metadata />

<div class="h-full flex flex-col">
	<election-header />
	<div class="sticky top-0 w-full h-1 beyondx-gradient-bg" />
	<div class="flex-1 flex justify-center items-center">
		<Intro />
	</div>
	<election-bottom index-path={base} about-path="{base}/about" />
	<election-footer />
</div>
