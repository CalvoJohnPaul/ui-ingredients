<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerChannelPropsContext,
	getColorPickerContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerChannelSliderLabelProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerChannelSliderLabelProps = $props();

let colorPicker = getColorPickerContext();
let channelProps = getColorPickerChannelPropsContext();
let mergedProps = $derived(
	mergeProps(colorPicker().getChannelSliderLabelProps(channelProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
