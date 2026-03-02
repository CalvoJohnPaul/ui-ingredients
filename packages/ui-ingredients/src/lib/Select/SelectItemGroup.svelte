<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSelectContext,
	setSelectItemGroupPropsContext,
} from './SelectContext.svelte.js';

export interface SelectItemGroupProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	id,
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SelectItemGroupProps = $props();

let uid = $props.id();
let select = getSelectContext();
let itemGroupProps = $derived({id: id ?? uid});
let mergedProps = $derived(
	mergeProps(select().getItemGroupProps(itemGroupProps), props),
);

setSelectItemGroupPropsContext(() => itemGroupProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
