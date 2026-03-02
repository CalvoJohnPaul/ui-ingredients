<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {MarkerProps} from '@zag-js/angle-slider';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getAngleSliderContext} from './AngleSliderContext.svelte.js';

export interface AngleSliderMarkerProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, MarkerProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AngleSliderMarkerProps = $props();

let markerPropKeys: UnionToTuple<keyof MarkerProps> = ['value'];
let [markerProps, localProps] = $derived(splitProps(props, markerPropKeys));

let angleSlider = getAngleSliderContext();
let mergedProps = $derived(
	mergeProps(angleSlider().getMarkerProps(markerProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div {...mergedProps}>{@render children?.()}</div>
{/if}
