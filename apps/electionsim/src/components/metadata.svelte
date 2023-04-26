<script lang="ts">
	export let pageTitle = '';

	$: title = `${
		pageTitle ? `${pageTitle} - ` : ''
	}ทดลองเป็นนักวิเคราะห์ #เลือกตั้ง66`;
	const description = 'ตอบคำถามเพื่อสร้างแบบจำลองผลเลือกตั้ง 66 ของคุณ';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta
		property="og:image"
		content="https://election66.wevis.info/electionsim/og.png"
	/>

	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
