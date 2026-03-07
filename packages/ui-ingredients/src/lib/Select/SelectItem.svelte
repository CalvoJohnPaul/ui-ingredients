<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps, ItemState} from '@zag-js/select';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSelectContext,
	setSelectItemPropsContext,
} from './SelectContext.svelte.js';

export interface SelectItemProps
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
}: SelectItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()(['item', 'persistFocus']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let select = getSelectContext();
let itemState = () => select().getItemState(itemProps);
let mergedProps = $derived(
	mergeProps(select().getItemProps(itemProps), localProps),
);

setSelectItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
