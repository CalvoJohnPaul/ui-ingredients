<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getFileUploadContext} from './FileUploadContext.svelte.js';

export interface FileUploadLabelProps
	extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadLabelProps = $props();

let fileUpload = getFileUploadContext();
let mergedProps = $derived(mergeProps(fileUpload().getLabelProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<label bind:this={ref} {...mergedProps}>{@render children?.()}</label>
{/if}
