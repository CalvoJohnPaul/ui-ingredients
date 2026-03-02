<script lang="ts" module>
import {getLocaleContext} from '$lib/LocaleProvider/LocaleProviderContext.svelte.js';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerChannelPropsContext,
	getColorPickerContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerChannelSliderValueTextProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerChannelSliderValueTextProps = $props();

let locale = getLocaleContext();
let colorPicker = getColorPickerContext();
let channelProps = getColorPickerChannelPropsContext();
let mergedProps = $derived(
	mergeProps(
		colorPicker().getChannelSliderValueTextProps(channelProps()),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{colorPicker().getChannelValueText(
        channelProps().channel,
        locale?.().locale ?? 'en-US',
      )}
		{/if}
	</div>
{/if}
