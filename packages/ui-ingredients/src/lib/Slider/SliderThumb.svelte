<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ThumbProps} from '@zag-js/slider';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSliderContext,
	setSliderThumbPropsContext,
} from './SliderContext.svelte.js';

export interface SliderThumbProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ThumbProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SliderThumbProps = $props();

let thumbPropKeys: UnionToTuple<keyof ThumbProps> = ['index', 'name'];
let [thumbProps, localProps] = $derived(splitProps(props, thumbPropKeys));

let slider = getSliderContext();
let mergedProps = $derived(
	mergeProps(slider().getThumbProps(thumbProps), localProps),
);

setSliderThumbPropsContext(() => thumbProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
