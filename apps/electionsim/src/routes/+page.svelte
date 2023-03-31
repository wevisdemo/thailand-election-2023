<script lang="ts">
	import { base } from '$app/paths';
	import Intro from '../components/intro/intro.svelte';
</script>

<div class="h-full flex flex-col">
	<election-header />
	<div class="flex-1 flex justify-center items-center">
		<Intro />
	</div>
	<election-bottom index-path={base} about-path="{base}/about" />
	<election-footer />
</div>
