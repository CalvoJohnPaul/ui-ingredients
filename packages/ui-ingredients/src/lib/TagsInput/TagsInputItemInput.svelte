<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTagsInputContext,
	getTagsInputItemPropsContext,
} from './TagsInputContext.svelte.js';

export interface TagsInputItemInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: TagsInputItemInputProps = $props();

let tagsInput = getTagsInputContext();
let itemProps = getTagsInputItemPropsContext();
let mergedProps = $derived(
	mergeProps(tagsInput().getItemInputProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
