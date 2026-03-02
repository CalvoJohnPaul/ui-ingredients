<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getAccordionContext,
	getAccordionItemPropsContext,
} from './AccordionContext.svelte.js';

export interface AccordionItemTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: AccordionItemTriggerProps = $props();

let accordion = getAccordionContext();
let itemProps = getAccordionItemPropsContext();
let mergedProps = $derived(
	mergeProps(accordion().getItemTriggerProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
