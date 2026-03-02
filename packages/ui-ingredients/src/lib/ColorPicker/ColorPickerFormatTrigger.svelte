<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getColorPickerContext} from './ColorPickerContext.svelte.js';

export interface ColorPickerFormatTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ColorPickerFormatTriggerProps = $props();

let colorPicker = getColorPickerContext();
let mergedProps = $derived(
	mergeProps(colorPicker().getFormatTriggerProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
