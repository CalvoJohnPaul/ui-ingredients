<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSelectContext,
	getSelectItemGroupPropsContext,
} from './SelectContext.svelte.js';

export interface SelectItemGroupLabelProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SelectItemGroupLabelProps = $props();

let select = getSelectContext();
let itemGroupProps = getSelectItemGroupPropsContext();
let mergedProps = $derived(
	mergeProps(
		select().getItemGroupLabelProps({htmlFor: itemGroupProps().id}),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>{@render children?.()}</span>
{/if}
