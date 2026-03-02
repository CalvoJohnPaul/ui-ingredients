<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getComboboxContext} from './ComboboxContext.svelte.js';

export interface ComboboxClearTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ComboboxClearTriggerProps = $props();

let combobox = getComboboxContext();
let mergedProps = $derived(
	mergeProps(combobox().getClearTriggerProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
