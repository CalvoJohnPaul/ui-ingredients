<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getFileUploadContext,
	getFileUploadItemPropsContext,
} from './FileUploadContext.svelte.js';

export interface FileUploadItemDeleteTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadItemDeleteTriggerProps = $props();

let fileUpload = getFileUploadContext();
let itemProps = getFileUploadItemPropsContext();
let mergedProps = $derived(
	mergeProps(fileUpload().getItemDeleteTriggerProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
