<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerChannelPropsContext,
	getColorPickerContext,
	getColorPickerFormatPropsContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerChannelSliderTrackProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerChannelSliderTrackProps = $props();

let colorPicker = getColorPickerContext();
let formatProps = getColorPickerFormatPropsContext();
let channelProps = getColorPickerChannelPropsContext();
let channelSliderProps = $derived({
	...formatProps?.(),
	...channelProps(),
});

let mergedProps = $derived(
	mergeProps(
		colorPicker().getChannelSliderTrackProps(channelSliderProps),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
