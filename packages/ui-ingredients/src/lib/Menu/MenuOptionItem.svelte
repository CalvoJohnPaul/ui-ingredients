<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {OptionItemProps, OptionItemState} from '@zag-js/menu';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
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

let optionItemPropKeys = defineKeyset<OptionItemProps>()([
	'value',
	'disabled',
	'valueText',
	'closeOnSelect',
	'checked',
	'type',
	'onCheckedChange',
]);

let [optionItemProps, localProps] = $derived(
	splitProps(props, optionItemPropKeys),
);

let menu = getMenuContext();
let mergedProps = $derived(
	mergeProps(menu?.().getOptionItemProps(optionItemProps) ?? {}, localProps),
);

let optionItemState = (): OptionItemState =>
	menu?.().getOptionItemState(optionItemProps) ?? {
		id: '',
		checked: false,
		disabled: false,
		highlighted: false,
	};

setMenuOptionItemPropsContext(() => optionItemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, optionItemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>
		{@render children?.(optionItemState)}
	</div>
{/if}
