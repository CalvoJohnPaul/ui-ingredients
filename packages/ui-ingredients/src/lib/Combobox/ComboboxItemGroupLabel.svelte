<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getComboboxContext,
	getComboboxItemGroupPropsContext,
} from './ComboboxContext.svelte.js';

export interface ComboboxItemGroupLabelProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ComboboxItemGroupLabelProps = $props();

let combobox = getComboboxContext();
let itemGroupProps = getComboboxItemGroupPropsContext();
let mergedProps = $derived(
	mergeProps(
		combobox().getItemGroupLabelProps({
			htmlFor: itemGroupProps().id,
		}),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
