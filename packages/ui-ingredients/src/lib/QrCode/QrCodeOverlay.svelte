<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getQrCodeContext} from './QrCodeContext.svelte.js';

export interface QrCodeOverlayProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: QrCodeOverlayProps = $props();

let qrCode = getQrCodeContext();

let mergedProps = $derived(mergeProps(qrCode().getOverlayProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
