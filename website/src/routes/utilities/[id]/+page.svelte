<script lang="ts">
import Markdown from '$templates/Markdown.svelte';
import Metadata from '$components/Metadata.svelte';

let {data} = $props();
</script>

<title>{data.title} | UI Ingredients</title>

<Metadata
	title={data.title}
	description={data.description}
	canonical="https://ui-ingredients.xyz/{data.id}"
/>

<Markdown {...data} />
