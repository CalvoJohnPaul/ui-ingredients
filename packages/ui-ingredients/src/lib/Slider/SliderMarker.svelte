<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {MarkerProps} from '@zag-js/slider';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
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

let markerPropKeys = defineKeyset<MarkerProps>()(['value']);
let [markerProps, localProps] = $derived(splitProps(props, markerPropKeys));

let slider = getSliderContext();
let mergedProps = $derived(
	mergeProps(slider().getMarkerProps(markerProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
