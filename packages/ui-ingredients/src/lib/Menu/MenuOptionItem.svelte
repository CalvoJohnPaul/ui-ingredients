<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {OptionItemProps, OptionItemState} from '@zag-js/menu';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getMenuContext,
	setMenuOptionItemPropsContext,
} from './MenuContext.svelte.js';

export interface MenuOptionItemProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, OptionItemState>,
		OptionItemProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: MenuOptionItemProps = $props();

let menuOptionItemPropKeys: UnionToTuple<keyof OptionItemProps> = [
	'value',
	'disabled',
	'valueText',
	'closeOnSelect',
	'checked',
	'type',
	'onCheckedChange',
];

let [menuOptionItemProps, localProps] = $derived(
	splitProps(props, menuOptionItemPropKeys),
);

let menu = getMenuContext();
let mergedProps = $derived(
	mergeProps(
		menu?.().getOptionItemProps(menuOptionItemProps) ?? {},
		localProps,
	),
);

let itemState = (): OptionItemState =>
	menu?.().getOptionItemState(menuOptionItemProps) ?? {
		id: '',
		checked: false,
		disabled: false,
		highlighted: false,
	};

setMenuOptionItemPropsContext(() => menuOptionItemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
