<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createPagination,
	type CreatePaginationProps,
	type CreatePaginationReturn,
} from './createPagination.svelte.js';
import {setPaginationContext} from './PaginationContext.svelte.js';

export interface PaginationProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreatePaginationReturn>,
		SetOptional<CreatePaginationProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PaginationProps = $props();

let createPaginationPropKeys: UnionToTuple<keyof CreatePaginationProps> = [
	'ids',
	'translations',
	'count',
	'pageSize',
	'defaultPageSize',
	'siblingCount',
	'boundaryCount',
	'page',
	'defaultPage',
	'onPageChange',
	'onPageSizeChange',
	'type',
	'getPageUrl',
	'id',
];

let [createPaginationProps, localProps] = $derived(
	splitProps(props, createPaginationPropKeys),
);

let id = $props.id();
let pagination = createPagination(() => ({id, ...createPaginationProps}));
let mergedProps = $derived(mergeProps(pagination().getRootProps(), localProps));

setPaginationContext(pagination);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, pagination)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(pagination)}</div>
{/if}
