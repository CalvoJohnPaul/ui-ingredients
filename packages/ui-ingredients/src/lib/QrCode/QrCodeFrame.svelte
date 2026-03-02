<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getQrCodeContext} from './QrCodeContext.svelte.js';

export interface QrCodeFrameProps
	extends HtmlIngredientProps<'svg', SVGSVGElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: QrCodeFrameProps = $props();

let qrCode = getQrCodeContext();
let mergedProps = $derived(mergeProps(qrCode().getFrameProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<svg bind:this={ref} {...mergedProps}>{@render children?.()}</svg>
{/if}
