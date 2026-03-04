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

let ellipsisPropKeys: Array<keyof EllipsisProps> = ['index'];
let [ellipsisProps, localProps] = $derived(splitProps(props, ellipsisPropKeys));

let pagination = getPaginationContext();
let mergedProps = $derived(
	mergeProps(pagination().getEllipsisProps(ellipsisProps), localProps),
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
