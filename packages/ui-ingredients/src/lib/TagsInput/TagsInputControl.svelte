<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTagsInputContext} from './TagsInputContext.svelte.js';

export interface TagsInputControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TagsInputControlProps = $props();

let tagsInput = getTagsInputContext();
let mergedProps = $derived(mergeProps(tagsInput().getControlProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
