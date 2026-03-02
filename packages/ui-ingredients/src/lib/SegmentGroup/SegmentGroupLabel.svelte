<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSegmentGroupContext} from './SegmentGroupContext.svelte.js';

export interface SegmentGroupLabelProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SegmentGroupLabelProps = $props();

let segmentGroup = getSegmentGroupContext();
let mergedProps = $derived(mergeProps(segmentGroup().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>{@render children?.()}</span>
{/if}
