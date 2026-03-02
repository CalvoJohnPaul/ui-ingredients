<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSignaturePadContext} from './SignaturePadContext.svelte.js';

export interface SignaturePadCurrentSegmentPathProps
	extends HtmlIngredientProps<'path', SVGPathElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SignaturePadCurrentSegmentPathProps = $props();

let signaturePad = getSignaturePadContext();
let mergedProps = $derived(
	mergeProps(
		signaturePad().getSegmentPathProps({
			path: signaturePad().currentPath ?? '',
		}),
		props,
	),
);
</script>

{#if signaturePad().currentPath}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<path bind:this={ref} {...mergedProps}>{@render children?.()}</path>
	{/if}
{/if}
