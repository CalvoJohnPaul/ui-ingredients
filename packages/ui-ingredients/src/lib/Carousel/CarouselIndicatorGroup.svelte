<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getCarouselContext} from './CarouselContext.svelte.js';

export interface CarouselIndicatorGroupProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CarouselIndicatorGroupProps = $props();

let carousel = getCarouselContext();
let mergedProps = $derived(
	mergeProps(carousel().getIndicatorGroupProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
