<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTourContext} from './TourContext.svelte.js';

export interface TourArrowProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TourArrowProps = $props();

let tour = getTourContext();
let mergedProps = $derived(mergeProps(tour().getArrowProps(), props));
</script>

{#if tour().step?.arrow}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
	{/if}
{/if}
