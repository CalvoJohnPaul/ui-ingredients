<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {ItemProps} from '@zag-js/file-upload';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, UnionToTuple} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	getFileUploadContext,
	setFileUploadItemPropsContext,
} from './FileUploadContext.svelte.js';

export interface FileUploadItemProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ItemProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadItemProps = $props();

let itemPropKeys: UnionToTuple<keyof ItemProps> = ['file', 'type'];
let [itemProps, localProps] = $derived(splitProps(props, itemPropKeys));

let fileUpload = getFileUploadContext();
let mergedProps = $derived(
	mergeProps(fileUpload().getItemProps(itemProps), localProps),
);

setFileUploadItemPropsContext(() => itemProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
