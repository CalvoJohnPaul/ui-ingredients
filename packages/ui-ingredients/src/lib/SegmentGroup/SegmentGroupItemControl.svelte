<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSegmentGroupContext,
	getSegmentGroupItemPropsContext,
} from './SegmentGroupContext.svelte.js';

export interface SegmentGroupItemControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SegmentGroupItemControlProps = $props();

let segmentGroup = getSegmentGroupContext();
let itemProps = getSegmentGroupItemPropsContext();
let mergedProps = $derived(
	mergeProps(segmentGroup().getItemControlProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
