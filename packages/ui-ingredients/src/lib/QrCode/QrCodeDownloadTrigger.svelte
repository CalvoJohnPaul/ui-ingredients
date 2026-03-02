<script lang="ts" module>
import {splitProps} from '$lib/splitProps.js';
import type {DownloadTriggerProps} from '@zag-js/qr-code';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getQrCodeContext} from './QrCodeContext.svelte.js';

export interface QrCodeDownloadTriggerProps
	extends Merge<
		HtmlIngredientProps<'button', HTMLButtonElement>,
		DownloadTriggerProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: QrCodeDownloadTriggerProps = $props();

let [downloadTriggerProps, localProps] = $derived(
	splitProps(props, ['fileName', 'mimeType', 'quality']),
);

let qrCode = getQrCodeContext();
let mergedProps = $derived(
	mergeProps(
		qrCode().getDownloadTriggerProps(downloadTriggerProps),
		localProps,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
