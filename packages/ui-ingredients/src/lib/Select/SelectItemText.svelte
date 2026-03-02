<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSelectContext,
	getSelectItemPropsContext,
} from './SelectContext.svelte.js';

export interface SelectItemTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SelectItemTextProps = $props();

let select = getSelectContext();
let itemProps = getSelectItemPropsContext();
let mergedProps = $derived(
	mergeProps(select().getItemTextProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{select().collection.stringifyItem(itemProps().item)}
		{/if}
	</span>
{/if}
