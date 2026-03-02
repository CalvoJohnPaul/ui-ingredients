<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTagsInputContext,
	getTagsInputItemPropsContext,
} from './TagsInputContext.svelte.js';

export interface TagsInputItemTextProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TagsInputItemTextProps = $props();

let tagsInput = getTagsInputContext();
let itemProps = getTagsInputItemPropsContext();
let mergedProps = $derived(
	mergeProps(tagsInput().getItemTextProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>{@render children?.()}</span>
{/if}
