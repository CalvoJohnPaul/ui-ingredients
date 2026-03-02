<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import {getPresenceContext} from '../Presence/PresenceContext.svelte.js';
import type {HtmlIngredientProps} from '../types.js';
import {getTooltipContext} from './TooltipContext.svelte.js';

export interface TooltipContentProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TooltipContentProps = $props();

let tooltip = getTooltipContext();
let presence = getPresenceContext();
let mergedProps = $derived(
	mergeProps(tooltip().getContentProps(), presence().getPresenceProps(), props),
);
</script>

{#if presence().mounted}
	{#if asChild}
		{@render asChild(() => mergedProps)}
	{:else}
		<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
	{/if}
{/if}
