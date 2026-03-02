<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTagsInputContext} from './TagsInputContext.svelte.js';

export interface TagsInputInputProps
	extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
let {ref = $bindable(null), asChild, ...props}: TagsInputInputProps = $props();

let tagsInput = getTagsInputContext();
let mergedProps = $derived(mergeProps(tagsInput().getInputProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<input bind:this={ref} {...mergedProps}>
{/if}
