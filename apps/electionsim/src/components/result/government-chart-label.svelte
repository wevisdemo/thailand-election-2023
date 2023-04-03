<script lang="ts">
	export let label: string;
	export let style: string;
</script>

<div class="absolute -top-2 -bottom-2 w-[1px] bg-white" {style}>
	<p
		class="typo-b6 transform -translate-y-full -translate-x-1/2 absolute left-1/2 top-1 md:-top-1 whitespace-nowrap text-white"
	>
		{label}
	</p>
</div>
