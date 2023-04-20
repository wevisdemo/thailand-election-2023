<script lang="ts">
	import { base } from '$app/paths';
	import { party } from '../../../stores/party';
	import type { RepresentativeRecord } from '../../../stores/representatives';
	import { PartySide } from '@thailand-election-2023/database';
	import { representatives } from '../../../stores/representatives';
	import Share from '../../../components/result/share/share.svelte';

	$: [governmentParties, oppositionParties, governmentPoints] =
		$representatives.reduce<
			[RepresentativeRecord[], RepresentativeRecord[], number]
		>(
			([government, opposition, governmentPoints], party) =>
				$party.list.find(({ Name }) => party.party.Name === Name)
					?.PartyGroup === PartySide.Government
					? [[...government, party], opposition, governmentPoints + party.total]
					: [government, [party, ...opposition], governmentPoints],
			[[], [], 0]
		);
</script>

<div class="h-full flex flex-col">
	<election-header />
	<div class="sticky top-0 w-full h-1 beyondx-gradient-bg" />
	<div class="flex-1 flex justify-center items-center">
		<Share
			representativeRecord={$representatives}
			{governmentParties}
			{oppositionParties}
			{governmentPoints}
		/>
	</div>
	<election-bottom index-path={base} about-path="{base}/about" />
	<election-footer />
</div>
