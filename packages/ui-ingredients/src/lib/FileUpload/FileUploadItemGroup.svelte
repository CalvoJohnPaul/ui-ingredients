<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getFileUploadContext} from './FileUploadContext.svelte.js';

export interface FileUploadItemGroupProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadItemGroupProps = $props();

let fileUpload = getFileUploadContext();
let mergedProps = $derived(mergeProps(fileUpload().getItemGroupProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
