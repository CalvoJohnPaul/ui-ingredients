<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerLabelProps = $props();

let colorPicker = getColorPickerContext();
let mergedProps = $derived(mergeProps(colorPicker().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}> {@render children?.()} </label>
{/if}
