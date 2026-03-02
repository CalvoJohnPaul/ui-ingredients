<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTagsInputContext,
	getTagsInputItemPropsContext,
} from './TagsInputContext.svelte.js';

export interface TagsInputItemPreviewProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TagsInputItemPreviewProps = $props();

let tagsInput = getTagsInputContext();
let itemProps = getTagsInputItemPropsContext();
let mergedProps = $derived(
	mergeProps(tagsInput().getItemPreviewProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
