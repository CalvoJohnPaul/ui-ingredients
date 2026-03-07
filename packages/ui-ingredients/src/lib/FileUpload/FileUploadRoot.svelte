<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createFileUpload,
	type CreateFileUploadProps,
	type CreateFileUploadReturn,
} from './createFileUpload.svelte.js';
import {setFileUploadContext} from './FileUploadContext.svelte.js';

export interface FileUploadProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateFileUploadReturn>,
		SetOptional<CreateFileUploadProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: FileUploadProps = $props();

let createFileUploadPropKeys = defineKeyset<CreateFileUploadProps>()([
	'name',
	'ids',
	'translations',
	'accept',
	'disabled',
	'required',
	'allowDrop',
	'maxFileSize',
	'minFileSize',
	'maxFiles',
	'preventDocumentDrop',
	'validate',
	'defaultAcceptedFiles',
	'acceptedFiles',
	'onFileChange',
	'onFileAccept',
	'onFileReject',
	'capture',
	'directory',
	'invalid',
	'readOnly',
	'transformFiles',
	'locale',
	'id',
]);

let [createFileUploadProps, localProps] = $derived(
	splitProps(props, createFileUploadPropKeys),
);

let id = $props.id();
let fileUpload = createFileUpload(() => ({id, ...createFileUploadProps}));
let mergedProps = $derived(mergeProps(fileUpload().getRootProps(), localProps));

setFileUploadContext(fileUpload);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, fileUpload)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(fileUpload)}</div>
{/if}
