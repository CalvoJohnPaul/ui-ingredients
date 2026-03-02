<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';import {splitProps} from '$lib/splitProps.js';
import {mergeProps} from '@zag-js/svelte';
import type {Merge, SetOptional} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {
	createQRCode,
	type CreateQrCodeProps,
	type CreateQrCodeReturn,
} from './createQrCode.svelte.js';
import {setQrCodeContext} from './QrCodeContext.svelte.js';

export interface QrCodeProps
	extends Merge<
		HtmlIngredientProps<'div', HTMLDivElement, CreateQrCodeReturn>,
		SetOptional<CreateQrCodeProps, 'id'>
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: QrCodeProps = $props();

let createQrCodePropKeys = defineKeyset<CreateQrCodeProps>()([
	'id',
	'value',
	'defaultValue',
	'ids',
	'encoding',
	'onValueChange',
	'pixelSize',
]);

let [createQrCodeProps, localProps] = $derived(
	splitProps(props, createQrCodePropKeys),
);

let id = $props.id();
let qrCode = createQRCode(() => ({id, ...createQrCodeProps}));
let mergedProps = $derived(mergeProps(qrCode().getRootProps(), localProps));

setQrCodeContext(qrCode);
</script>

{#if asChild}
	{@render asChild(() => mergedProps, qrCode)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.(qrCode)}</div>
{/if}


