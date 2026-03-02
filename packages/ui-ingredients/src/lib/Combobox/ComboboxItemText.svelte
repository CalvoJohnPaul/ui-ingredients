<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getComboboxContext,
	getComboboxItemPropsContext,
} from './ComboboxContext.svelte.js';

export interface ComboboxItemTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ComboboxItemTextProps = $props();

let combobox = getComboboxContext();
let itemProps = getComboboxItemPropsContext();
let mergedProps = $derived(
	mergeProps(combobox().getItemTextProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{combobox().collection.stringifyItem(itemProps().item)}
		{/if}
	</span>
{/if}
