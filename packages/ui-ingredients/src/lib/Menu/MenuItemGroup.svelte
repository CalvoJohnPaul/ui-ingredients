<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {ItemGroupProps} from '@zag-js/menu';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getMenuContext,
	setMenuItemGroupPropsContext,
} from './MenuContext.svelte.js';

export interface MenuItemGroupProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement>,
		SetOptional<ItemGroupProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: MenuItemGroupProps = $props();

let id = $props.id();

let menuItemGroupPropKeys = defineKeyset<ItemGroupProps>()(['id']);
let [menuItemGroupProps, localProps] = $derived(
	splitProps({id, ...props}, menuItemGroupPropKeys),
);

let menu = getMenuContext();
let mergedProps = $derived(
	mergeProps(menu?.().getItemGroupProps(menuItemGroupProps) ?? {}, localProps),
);

setMenuItemGroupPropsContext(() => menuItemGroupProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


