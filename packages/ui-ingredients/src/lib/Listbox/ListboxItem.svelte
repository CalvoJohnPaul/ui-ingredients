<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps, ItemState} from '@zag-js/listbox';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getListboxContext,
	setListboxItemPropsContext,
} from './ListboxContext.svelte.js';

export interface ListboxItemProps
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
}: ListboxItemProps = $props();

let itemPropKeys: UnionToTuple<keyof ItemProps> = ['item', 'highlightOnHover'];

let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let listbox = getListboxContext();
let itemState = () => listbox().getItemState(itemProps);
let mergedProps = $derived(
	mergeProps(listbox().getItemProps(itemProps), localProps),
);

setListboxItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
