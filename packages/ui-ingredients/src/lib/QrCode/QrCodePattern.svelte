<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getQrCodeContext} from './QrCodeContext.svelte.js';

export interface QrCodePatternProps
	extends HtmlIngredientProps<'path', SVGPathElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: QrCodePatternProps = $props();

let qrCode = getQrCodeContext();
let mergedProps = $derived(mergeProps(qrCode().getPatternProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<path bind:this={ref} {...mergedProps}>{@render children?.()}</path>
{/if}
