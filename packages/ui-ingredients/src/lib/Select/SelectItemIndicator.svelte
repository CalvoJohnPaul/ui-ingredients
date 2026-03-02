<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSelectContext,
	getSelectItemPropsContext,
} from './SelectContext.svelte.js';

export interface SelectItemIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SelectItemIndicatorProps = $props();

let select = getSelectContext();
let itemProps = getSelectItemPropsContext();
let mergedProps = $derived(
	mergeProps(select().getItemIndicatorProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
