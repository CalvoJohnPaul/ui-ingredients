<script lang="ts" module>
import type {HtmlIngredientProps} from '$lib/types.js';
import {mergeProps} from '@zag-js/svelte';
import {getMarqueeContext} from './MarqueeContext.svelte.js';

export interface MarqueeViewportProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: MarqueeViewportProps = $props();

let marquee = getMarqueeContext();
let mergedProps = $derived(mergeProps(marquee().getViewportProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
