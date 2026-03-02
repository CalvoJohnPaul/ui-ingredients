<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {EllipsisProps} from '@zag-js/pagination';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getPaginationContext} from './PaginationContext.svelte.js';

export interface PaginationEllipsisProps
	extends Merge<HtmlIngredientProps<'span', HTMLSpanElement>, EllipsisProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: PaginationEllipsisProps = $props();

let pagination = getPaginationContext();

let paginationEllipsisPropKeys: Array<keyof EllipsisProps> = ['index'];
let [paginationEllipsisProps, localProps] = $derived(
	splitProps(props, paginationEllipsisPropKeys),
);

let mergedProps = $derived(
	mergeProps(
		pagination().getEllipsisProps(paginationEllipsisProps),
		localProps,
	),
);
</script>

{#if asChild}
	{@render asChild(mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			...
		{/if}
	</span>
{/if}
