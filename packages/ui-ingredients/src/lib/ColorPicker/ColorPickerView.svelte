<script lang="ts" module>
import type {ColorFormat} from '@zag-js/color-picker';
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerContext,
	setColorPickerFormatPropsContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerViewProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {
	format: ColorFormat;
}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	format,
	asChild,
	children,
	...props
}: ColorPickerViewProps = $props();

let colorPicker = getColorPickerContext();
let formatProps = $derived({format});
let mergedProps = $derived(
	mergeProps(colorPicker().getViewProps(formatProps), props),
);

setColorPickerFormatPropsContext(() => formatProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
