<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import type {DropzoneProps} from '@zag-js/file-upload';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getFileUploadContext} from './FileUploadContext.svelte.js';

export interface FileUploadDropzoneProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, DropzoneProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadDropzoneProps = $props();

let dropzonePropKeys = defineKeyset<DropzoneProps>()(['disableClick']);
let [dropzoneProps, localProps] = $derived(splitProps(props, dropzonePropKeys));

let fileUpload = getFileUploadContext();
let mergedProps = $derived(
	mergeProps(fileUpload().getDropzoneProps(dropzoneProps), localProps),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}


