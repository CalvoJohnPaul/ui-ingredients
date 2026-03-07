<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps, ItemState} from '@zag-js/radio-group';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getSegmentGroupContext,
	setSegmentGroupItemPropsContext,
} from './SegmentGroupContext.svelte.js';

export interface SegmentGroupItemProps
	extends Merge<
		HtmlIngredientProps<'label', HTMLLabelElement, ItemState>,
		ItemProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: SegmentGroupItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()(['value', 'disabled', 'invalid']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let segmentGroup = getSegmentGroupContext();
let itemState = () => segmentGroup().getItemState(itemProps);
let mergedProps = $derived(
	mergeProps(segmentGroup().getItemProps(itemProps), localProps),
);

setSegmentGroupItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<label bind:this={ref} {...mergedProps}>
		{@render children?.(itemState)}
	</label>
{/if}
