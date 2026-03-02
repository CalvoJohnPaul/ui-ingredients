<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTourContext} from './TourContext.svelte.js';

export interface TourTitleProps
	extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TourTitleProps = $props();

let tour = getTourContext();
let mergedProps = $derived(mergeProps(tour().getTitleProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<h2 bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{tour().step?.title}
		{/if}
	</h2>
{/if}
