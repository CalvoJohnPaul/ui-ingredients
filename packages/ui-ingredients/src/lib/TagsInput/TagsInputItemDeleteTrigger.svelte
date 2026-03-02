<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTagsInputContext,
	getTagsInputItemPropsContext,
} from './TagsInputContext.svelte.js';

export interface TagsInputItemDeleteTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TagsInputItemDeleteTriggerProps = $props();

let tagsInput = getTagsInputContext();
let itemProps = getTagsInputItemPropsContext();
let mergedProps = $derived(
	mergeProps(tagsInput().getItemDeleteTriggerProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
