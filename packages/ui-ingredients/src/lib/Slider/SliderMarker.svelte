<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {MarkerProps} from '@zag-js/slider';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getSliderContext} from './SliderContext.svelte.js';

export interface SliderMarkerProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, MarkerProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SliderMarkerProps = $props();

let sliderMarkPropKeys: UnionToTuple<keyof MarkerProps> = ['value'];
let [sliderMarkerProps, localProps] = $derived(
	splitProps(props, sliderMarkPropKeys),
);

let slider = getSliderContext();
let mergedProps = $derived(
	mergeProps(slider().getMarkerProps(sliderMarkerProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
