<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getFileUploadContext} from './FileUploadContext.svelte.js';

export interface FileUploadClearTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadClearTriggerProps = $props();

let fileUpload = getFileUploadContext();
let mergedProps = $derived(
	mergeProps(fileUpload().getClearTriggerProps(), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
