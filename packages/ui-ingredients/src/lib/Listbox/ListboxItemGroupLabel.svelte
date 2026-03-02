<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getListboxContext,
	getListboxItemGroupPropsContext,
} from './ListboxContext.svelte.js';

export interface ListboxItemGroupLabelProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ListboxItemGroupLabelProps = $props();

let listbox = getListboxContext();
let itemGroupProps = getListboxItemGroupPropsContext();
let mergedProps = $derived(
	mergeProps(
		listbox().getItemGroupLabelProps({
			htmlFor: itemGroupProps().id,
		}),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
