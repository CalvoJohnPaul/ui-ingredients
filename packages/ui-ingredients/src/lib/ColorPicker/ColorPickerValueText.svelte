<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerValueTextProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerValueTextProps = $props();

let colorPicker = getColorPickerContext();
let mergedProps = $derived(
	mergeProps(colorPicker().getValueTextProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children()}
		{:else}
			{colorPicker().valueAsString}
		{/if}
	</div>
{/if}
