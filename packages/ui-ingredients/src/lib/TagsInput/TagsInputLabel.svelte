<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTagsInputContext} from './TagsInputContext.svelte.js';

export interface TagsInputLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TagsInputLabelProps = $props();

let tagsInput = getTagsInputContext();
let mergedProps = $derived(mergeProps(tagsInput().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}>{@render children?.()}</label>
{/if}
