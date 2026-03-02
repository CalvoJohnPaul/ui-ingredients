<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ChannelInputProps} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerChannelInputProps
	extends Merge<
		HtmlIngredientProps<'input', HTMLInputElement>,
		ChannelInputProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: ColorPickerChannelInputProps = $props();

let channelInputPropKeys: UnionToTuple<keyof ChannelInputProps> = [
	'channel',
	'orientation',
];

let [channelInputProps, localProps] = $derived(
	splitProps(props, channelInputPropKeys),
);

let colorPicker = getColorPickerContext();
let mergedProps = $derived(
	mergeProps(colorPicker().getChannelInputProps(channelInputProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
