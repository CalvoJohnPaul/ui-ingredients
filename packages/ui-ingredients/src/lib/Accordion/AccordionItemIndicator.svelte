<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getAccordionContext,
	getAccordionItemPropsContext,
} from './AccordionContext.svelte.js';

export interface AccordionIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AccordionIndicatorProps = $props();

let accordion = getAccordionContext();
let itemProps = getAccordionItemPropsContext();
let mergedProps = $derived(
	mergeProps(accordion().getItemIndicatorProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
