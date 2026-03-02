<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getComboboxContext,
	setComboboxItemGroupPropsContext,
} from './ComboboxContext.svelte.js';

export interface ComboboxItemGroupProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	id,
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ComboboxItemGroupProps = $props();

let uid = $props.id();

let combobox = getComboboxContext();
let comboboxItemGroupProps = $derived({id: id ?? uid});
let mergedProps = $derived(
	mergeProps(combobox().getItemGroupProps(comboboxItemGroupProps), props),
);

setComboboxItemGroupPropsContext(() => comboboxItemGroupProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
