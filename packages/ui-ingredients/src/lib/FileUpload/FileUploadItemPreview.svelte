<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getFileUploadContext,
	getFileUploadItemPropsContext,
} from './FileUploadContext.svelte.js';

export interface FileUploadItemPreviewProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadItemPreviewProps = $props();

let fileUpload = getFileUploadContext();
let itemProps = getFileUploadItemPropsContext();
let mergedProps = $derived(
	mergeProps(fileUpload().getItemPreviewProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
