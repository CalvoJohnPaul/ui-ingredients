<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSliderContext,
	getSliderThumbPropsContext,
} from './SliderContext.svelte.js';

export interface SliderDraggingIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SliderDraggingIndicatorProps = $props();

let slider = getSliderContext();
let thumbProps = getSliderThumbPropsContext();
let mergedProps = $derived(
	mergeProps(slider().getDraggingIndicatorProps(thumbProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
