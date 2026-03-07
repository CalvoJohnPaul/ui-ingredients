<script lang="ts">
interface MetadataProps {
	image?: string;
	title?: string;
	description?: string;
	canonical?: string;
	tags?: string[];
}

let {...props}: MetadataProps = $props();

let title = $derived(
	props.title ? `${props.title} | UI Ingredients` : 'UI Ingredients',
);

let description = $derived(
	props.description ??
		'Headless and accessible Svelte components for building custom design systems.',
);

let image = $derived(
	props.image ?? 'https://ui-ingredients.xyz/social-preview.png',
);

let canonical = $derived(props.canonical ?? 'https://ui-ingredients.xyz');

let keywords = $derived(
	props.tags?.length
		? props.tags
		: [
				'Svelte',
				'Component Library',
				'Design System',
				'Headless UI',
				'Accessibility',
		  ],
);
</script>

<svelte:head>
	<link rel="canonical" href={canonical}>
	<meta name="description" content={description}>
	<meta name="robots" content="index,follow,max-image-preview:large">
	<meta name="keywords" content={keywords.join(', ')}>
	<meta property="og:type" content="website">
	<meta property="og:title" content={title}>
	<meta property="og:description" content={description}>
	<meta property="og:site_name" content="UI Ingredients">
	<meta property="og:url" content={canonical}>
	<meta property="og:image" content={image}>
	<meta property="og:image:type" content="image/png">
	<meta property="og:image:alt" content={`${title} documentation`}>
	<meta property="og:image:width" content="1200">
	<meta property="og:image:height" content="630">
	<meta property="og:locale" content="en_US">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content={title}>
	<meta name="twitter:description" content={description}>
	<meta name="twitter:image" content={image}>
</svelte:head>
