<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTourContext} from './TourContext.svelte.js';

export interface TourArrowTipProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TourArrowTipProps = $props();

let tour = getTourContext();
let mergedProps = $derived(mergeProps(tour().getArrowTipProps(), props));
</script>

{#if tour().step?.arrow}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
	{/if}
{/if}
