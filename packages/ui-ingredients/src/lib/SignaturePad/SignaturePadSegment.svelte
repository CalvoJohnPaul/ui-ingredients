<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSignaturePadContext} from './SignaturePadContext.svelte.js';

export interface SignaturePadSegmentProps
	extends HtmlIngredientProps<'svg', SVGSVGElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SignaturePadSegmentProps = $props();

let signaturePad = getSignaturePadContext();
let mergedProps = $derived(mergeProps(signaturePad().getSegmentProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<svg bind:this={ref} {...mergedProps}>{@render children?.()}</svg>
{/if}
