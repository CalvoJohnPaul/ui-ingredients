<script lang="ts" module>
import { mergeProps } from '@zag-js/svelte';
import type { HtmlIngredientProps } from '../types.js';
import { getTooltipContext } from './TooltipContext.svelte.js';

export interface TooltipArrowProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TooltipArrowProps = $props();

let tooltip = getTooltipContext();
let mergedProps = $derived(mergeProps(tooltip().getArrowProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}>{@render children?.()}</span>
{/if}
