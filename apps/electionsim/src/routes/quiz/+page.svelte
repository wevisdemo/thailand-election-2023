<script lang="ts">
	import ProgressBar from '../../components/progressbar.svelte';
	import Analytic from '../../components/preprocessing/analytic.svelte';
	import Election62 from '../../components/preprocessing/election62.svelte';
	import Recalculate from '../../components/preprocessing/recalculate.svelte';
	import Quiz1 from '../../components/quiz/quiz1.svelte';
	import Quiz2 from '../../components/quiz/quiz2.svelte';
	import Quiz3 from '../../components/quiz/quiz3.svelte';
	import Quiz4 from '../../components/quiz/quiz4.svelte';
	import Quiz5 from '../../components/quiz/quiz5.svelte';
	import Quiz6 from '../../components/quiz/quiz6.svelte';
	import Quiz7 from '../../components/quiz/quiz7.svelte';
	import Quiz8 from '../../components/quiz/quiz8.svelte';
	import Calculate from '../../components/analyze/calculate.svelte';
	import ContentWrapper from '../../components/content.svelte';
	import EditQuiz from '../../components/quiz/editQuize.svelte';
	import { Content, contentManager } from '../../stores/content';
	import { party } from '../../stores/party';
	import { onMount } from 'svelte';
	import Metadata from '../../components/metadata.svelte';

	onMount(async () => {
		if (!$contentManager.isEdited) {
			await party.load();
		}
	});
</script>

<Metadata pageTitle="เริ่มวิเคราะห์" />

<div class="h-screen">
	<ProgressBar />
	<div
		class="flex flex-col items-center w-full max-w-4xl m-auto bg-white py-10 min-h-full"
	>
		<ContentWrapper id={Content.Analytics}>
			<Analytic />
		</ContentWrapper>
		<ContentWrapper id={Content.Election62}>
			<Election62 />
		</ContentWrapper>
		<ContentWrapper id={Content.ReCalculate}>
			<Recalculate />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz1}>
			<Quiz1 />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz2}>
			<Quiz2 />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz3}>
			<Quiz3 />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz4}>
			<Quiz4 />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz5}>
			<Quiz5 />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz6}>
			<Quiz6 />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz7}>
			<Quiz7 />
		</ContentWrapper>
		<ContentWrapper id={Content.Quiz8}>
			<Quiz8 parties={$party.list} />
		</ContentWrapper>
		<ContentWrapper id={Content.Calculate}>
			<Calculate />
		</ContentWrapper>
		<ContentWrapper id={Content.EditQuiz}>
			<EditQuiz />
		</ContentWrapper>
	</div>
</div>
