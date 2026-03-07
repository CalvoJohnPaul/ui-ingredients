<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps, ItemState} from '@zag-js/menu';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getMenuContext} from './MenuContext.svelte.js';

export interface MenuItemProps
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
}: MenuItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()([
	'value',
	'disabled',
	'valueText',
	'closeOnSelect',
]);

let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let menu = getMenuContext();
let mergedProps = $derived(
	mergeProps(menu?.().getItemProps(itemProps) ?? {}, localProps),
);

let itemState = (): ItemState =>
	menu?.().getItemState(itemProps) ?? {
		id: '',
		disabled: false,
		highlighted: false,
	};
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
