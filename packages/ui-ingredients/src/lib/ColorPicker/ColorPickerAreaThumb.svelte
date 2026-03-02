<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getColorPickerAreaPropsContext,
	getColorPickerContext,
} from './ColorPickerContext.svelte.js';

export interface ColorPickerAreaThumbProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerAreaThumbProps = $props();

let colorPicker = getColorPickerContext();
let areaProps = getColorPickerAreaPropsContext();
let mergedProps = $derived(
	mergeProps(colorPicker().getAreaThumbProps(areaProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
