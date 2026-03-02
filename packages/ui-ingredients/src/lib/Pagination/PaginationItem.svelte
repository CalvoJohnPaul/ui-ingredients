<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps} from '@zag-js/pagination';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
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

let paginationItemPropKeys: UnionToTuple<keyof Omit<ItemProps, 'type'>> = [
	'value',
];

let [paginationItemProps, localProps] = $derived(
	splitProps(props, paginationItemPropKeys),
);

let pagination = getPaginationContext();
let mergedProps = $derived(
	mergeProps(
		pagination().getItemProps({type: 'page', ...paginationItemProps}),
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
			{paginationItemProps.value}
		{/if}
	</button>
{/if}
