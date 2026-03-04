<script lang="ts" module>
import type {HtmlIngredientProps} from '$lib/types.js';
import {mergeProps} from '@zag-js/svelte';
import {getMarqueeContext} from './MarqueeContext.svelte.js';

export interface MarqueeContentProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: MarqueeContentProps = $props();

let marquee = getMarqueeContext();
</script>

{#each Array.from({length: marquee().contentCount}) as _, index (index)}
	{@const mergedProps = mergeProps(marquee().getContentProps({index}), props)}

	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		{#if index === 0}
			<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
		{:else}
			<div {...mergedProps}>{@render children?.()}</div>
		{/if}
	{/if}
{/each}
