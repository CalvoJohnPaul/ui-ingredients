<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {SwatchProps} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerContext,
	setColorPickerSwatchPropsContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerSwatchProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, SwatchProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerSwatchProps = $props();

let swatchPropKeys = defineKeyset<SwatchProps>()(['value', 'respectAlpha']);
let [swatchProps, localProps] = $derived(splitProps(props, swatchPropKeys));

let colorPicker = getColorPickerContext();
let mergedProps = $derived(
	mergeProps(colorPicker().getSwatchProps(swatchProps), localProps),
);

setColorPickerSwatchPropsContext(() => swatchProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


