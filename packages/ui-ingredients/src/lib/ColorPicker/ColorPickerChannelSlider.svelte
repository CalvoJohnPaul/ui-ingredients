<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ChannelProps} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerContext,
	getColorPickerFormatPropsContext,
	setColorPickerChannelPropsContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerChannelSliderProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ChannelProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerChannelSliderProps = $props();

let channelSliderPropKeys: UnionToTuple<keyof ChannelProps> = [
	'channel',
	'orientation',
];
let [channelSliderProps, localProps] = $derived(
	splitProps(props, channelSliderPropKeys),
);

let colorPicker = getColorPickerContext();
let formatProps = getColorPickerFormatPropsContext();
let mergedProps = $derived(
	mergeProps(
		colorPicker().getChannelSliderProps({
			...formatProps?.(),
			...channelSliderProps,
		}),
		localProps,
	),
);

setColorPickerChannelPropsContext(() => channelSliderProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
