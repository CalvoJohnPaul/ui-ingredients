<script lang="ts" module>
import type {ItemProps, ItemState} from '@zag-js/accordion';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import {defineKeyset} from '$lib/defineKeySet.js';
import {setCollapsibleContext} from '../Collapsible/CollapsibleContext.svelte.js';
import {createCollapsible} from '../Collapsible/createCollapsible.svelte.js';
import {splitProps} from '../splitProps.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	getAccordionContext,
	setAccordionItemPropsContext,
} from './AccordionContext.svelte.js';

export interface AccordionItemProps
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
}: AccordionItemProps = $props();

let accordion = getAccordionContext();
let itemPropKeys = defineKeyset<ItemProps>()(['value', 'disabled']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let itemState = () => accordion().getItemState(itemProps);
let contentProps = $derived(accordion().getItemContentProps(itemProps));
let id = $props.id();
let collapsible = createCollapsible(() => ({
	id,
	ids: {content: contentProps.id},
	open: itemState().expanded,
	disabled: itemState().disabled,
}));

let mergedProps = $derived(
	mergeProps(
		collapsible().getRootProps(),
		accordion().getItemProps(itemProps),
		localProps,
	),
);

setCollapsibleContext(collapsible);
setAccordionItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
