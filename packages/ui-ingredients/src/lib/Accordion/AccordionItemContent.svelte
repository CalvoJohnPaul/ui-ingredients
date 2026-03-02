<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import {getCollapsibleContext} from '../Collapsible/CollapsibleContext.svelte.js';
import {createPresence} from '../Presence/createPresence.svelte.js';
import {getPresenceStrategyPropsContext} from '../Presence/PresenceContext.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {
	getAccordionContext,
	getAccordionItemPropsContext,
} from './AccordionContext.svelte.js';

export interface AccordionItemContentProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AccordionItemContentProps = $props();

let accordion = getAccordionContext();
let itemProps = getAccordionItemPropsContext();
let itemsState = () => accordion().getItemState(itemProps());
let collapsible = getCollapsibleContext();
let presenceStrategyProps = getPresenceStrategyPropsContext();
let presence = createPresence(() => ({
	...presenceStrategyProps(),
	present: itemsState().expanded,
}));

let mergedProps = $derived(
	mergeProps(
		collapsible().getContentProps(),
		accordion().getItemContentProps(itemProps()),
		presence().getPresenceProps(),
		props,
	),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
