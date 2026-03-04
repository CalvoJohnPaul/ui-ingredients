<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps} from '@zag-js/pagination';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getPaginationContext} from './PaginationContext.svelte.js';

export interface PaginationItemProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		Omit<ItemProps, 'type'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PaginationItemProps = $props();

let itemPropKeys = defineKeyset<Omit<ItemProps, 'type'>>()(['value']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let pagination = getPaginationContext();
let mergedProps = $derived(
	mergeProps(
		pagination().getItemProps({type: 'page', ...itemProps}),
		localProps,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{itemProps.value}
		{/if}
	</button>
{/if}
