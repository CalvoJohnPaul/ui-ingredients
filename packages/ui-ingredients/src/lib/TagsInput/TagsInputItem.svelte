<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {ItemProps, ItemState} from '@zag-js/tags-input';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTagsInputContext,
	setTagsInputItemPropsContext,
} from './TagsInputContext.svelte.js';

export interface TagsInputItemProps
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
}: TagsInputItemProps = $props();

let itemPropKeys = defineKeyset<ItemProps>()(['index', 'value', 'disabled']);

let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let tagsInput = getTagsInputContext();
let itemState = () => tagsInput().getItemState(itemProps);
let mergedProps = $derived(
	mergeProps(tagsInput().getItemProps(itemProps), localProps),
);

setTagsInputItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, itemState)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(itemState)}</div>
{/if}
