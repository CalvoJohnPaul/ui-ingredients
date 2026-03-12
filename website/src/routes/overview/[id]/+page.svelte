<script lang="ts">
import Metadata from '$components/Metadata.svelte';

let {data} = $props();
</script>

<svelte:head><title>{data.title} | UI Ingredients</title></svelte:head>

<Metadata
	title={data.title}
	description={data.description}
	canonical={`https://ui-ingredients.xyz${data.permalink ?? `/overview/${data.id}`}`}
/>

{@html data.content}
