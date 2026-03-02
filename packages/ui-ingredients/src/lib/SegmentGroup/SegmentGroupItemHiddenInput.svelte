<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSegmentGroupContext,
	getSegmentGroupItemPropsContext,
} from './SegmentGroupContext.svelte.js';

export interface SegmentGroupItemHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: SegmentGroupItemHiddenInputProps = $props();

let segmentGroup = getSegmentGroupContext();
let itemProps = getSegmentGroupItemPropsContext();
let mergedProps = $derived(
	mergeProps(segmentGroup().getItemHiddenInputProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
