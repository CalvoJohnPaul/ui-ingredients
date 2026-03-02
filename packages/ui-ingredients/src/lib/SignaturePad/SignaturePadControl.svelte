<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getSignaturePadContext} from './SignaturePadContext.svelte.js';

export interface SignaturePadControlProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: SignaturePadControlProps = $props();

let signaturePad = getSignaturePadContext();
let mergedProps = $derived(mergeProps(signaturePad().getControlProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
