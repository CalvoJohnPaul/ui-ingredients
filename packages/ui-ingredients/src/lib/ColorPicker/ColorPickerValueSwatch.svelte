<script lang="ts" module>
import type {SwatchProps} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerValueSwatchProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {
	respectAlpha?: boolean;
}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	respectAlpha,
	asChild,
	children,
	...props
}: ColorPickerValueSwatchProps = $props();

let colorPicker = getColorPickerContext();
let swatchProps: SwatchProps = $derived({
	respectAlpha,
	value: colorPicker().valueAsString,
});

let mergedProps = $derived(
	mergeProps(colorPicker().getSwatchProps(swatchProps), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
