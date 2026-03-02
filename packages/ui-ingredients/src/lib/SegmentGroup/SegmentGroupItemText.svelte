<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSegmentGroupContext,
	getSegmentGroupItemPropsContext,
} from './SegmentGroupContext.svelte.js';

export interface SegmentGroupItemTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SegmentGroupItemTextProps = $props();

let segmentGroup = getSegmentGroupContext();
let itemProps = getSegmentGroupItemPropsContext();
let mergedProps = $derived(
	mergeProps(segmentGroup().getItemTextProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>{@render children?.()}</span>
{/if}
