<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerFormatSelectProps
	extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerFormatSelectProps = $props();

let colorPicker = getColorPickerContext();
let mergedProps = $derived(
	mergeProps(colorPicker().getFormatSelectProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<select bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{#each colorPicker().getFormats() as format}
				<option value={format.value}>{format.label}</option>
			{/each}
		{/if}
	</select>
{/if}
