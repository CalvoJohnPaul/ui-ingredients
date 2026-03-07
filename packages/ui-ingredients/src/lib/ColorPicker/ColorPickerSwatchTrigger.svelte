<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {SwatchTriggerProps} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerSwatchTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		SwatchTriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerSwatchTriggerProps = $props();

let swatchTriggerPropKeys = defineKeyset<SwatchTriggerProps>()([
	'disabled',
	'value',
]);

let [swatchTriggerProps, localProps] = $derived(
	splitProps(props, swatchTriggerPropKeys),
);

let colorPicker = getColorPickerContext();
let mergedProps = $derived(
	mergeProps(
		colorPicker().getSwatchTriggerProps(swatchTriggerProps),
		localProps,
	),
);
</script>

{#if asChild}
	{@render asChild(() =>mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
