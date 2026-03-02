<script lang="ts" module>
import type {SegmentPathProps} from '@zag-js/signature-pad';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import type {HtmlIngredientProps} from '../types.js';
import {getSignaturePadContext} from './SignaturePadContext.svelte.js';

export interface SignaturePadSegmentPathProps
	extends Merge<
		HtmlIngredientProps<'path', SVGPathElement>,
		SegmentPathProps
	> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	path,
	asChild,
	children,
	...props
}: SignaturePadSegmentPathProps = $props();

let signaturePad = getSignaturePadContext();
let mergedProps = $derived(
	mergeProps(signaturePad().getSegmentPathProps({path}), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<path bind:this={ref} {...mergedProps}>{@render children?.()}</path>
{/if}
