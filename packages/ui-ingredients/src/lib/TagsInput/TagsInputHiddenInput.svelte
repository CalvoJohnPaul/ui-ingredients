<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTagsInputContext} from './TagsInputContext.svelte.js';

export interface TagsInputHiddenInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	...props
}: TagsInputHiddenInputProps = $props();

let tagsInput = getTagsInputContext();
let mergedProps = $derived(
	mergeProps(tagsInput().getHiddenInputProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
