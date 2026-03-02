<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {ItemProps, ItemState} from '@zag-js/combobox';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getComboboxContext,
	setComboboxItemPropsContext,
} from './ComboboxContext.svelte.js';

export interface ComboboxItemProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
		ItemProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ComboboxItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()(['persistFocus', 'item']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let combobox = getComboboxContext();
let itemState = () => combobox().getItemState(itemProps);
let mergedProps = $derived(
	mergeProps(combobox().getItemProps(itemProps), localProps),
);

setComboboxItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}


