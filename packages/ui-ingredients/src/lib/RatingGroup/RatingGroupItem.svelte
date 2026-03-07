<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps, ItemState} from '@zag-js/rating-group';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getRatingGroupContext} from './RatingGroupContext.svelte.js';

export interface RatingGroupItemProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, ItemState>,
		ItemProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: RatingGroupItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()(['index']);
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));
let itemState = () => ratingGroup().getItemState(itemProps);
let ratingGroup = getRatingGroupContext();
let mergedProps = $derived(
	mergeProps(ratingGroup().getItemProps(itemProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
