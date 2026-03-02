<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getCarouselContext} from './CarouselContext.svelte.js';

export interface CarouselProgressTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: CarouselProgressTextProps = $props();

let carousel = getCarouselContext();
let mergedProps = $derived(
	mergeProps(carousel().getProgressTextProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{carousel().getProgressText()}
		{/if}
	</span>
{/if}
