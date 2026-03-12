<script lang="ts">
import Metadata from '$components/Metadata.svelte';
import Markdown from '$templates/Markdown.svelte';

let {data} = $props();
</script>

<svelte:head><title>{data.title} | UI Ingredients</title></svelte:head>

<Metadata
	title={data.title}
	description={data.description}
	canonical={`https://ui-ingredients.xyz${data.permalink ?? `/components/${data.id}`}`}
/>

<Markdown {...data} />
