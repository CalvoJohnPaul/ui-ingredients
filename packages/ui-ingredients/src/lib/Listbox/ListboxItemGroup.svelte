<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getListboxContext,
	setListboxItemGroupPropsContext,
} from './ListboxContext.svelte.js';

export interface ListboxItemGroupProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	id,
	asChild,
	children,
	...props
}: ListboxItemGroupProps = $props();

let uid = $props.id();
let itemGroupProps = $derived({id: id ?? uid});
let listbox = getListboxContext();
let mergedProps = $derived(
	mergeProps(listbox().getItemGroupProps(itemGroupProps), props),
);

setListboxItemGroupPropsContext(() => itemGroupProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
