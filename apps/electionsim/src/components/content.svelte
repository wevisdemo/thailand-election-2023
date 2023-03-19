<script lang="ts">
	import { contentManager, Content } from '../stores/content';
	export let id: Content;
</script>

{#if id == $contentManager.currentContent}
	<slot />
{/if}
