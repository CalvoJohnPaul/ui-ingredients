<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getTooltipContext} from './TooltipContext.svelte.js';

export interface TooltipTriggerProps
	extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TooltipTriggerProps = $props();

let tooltip = getTooltipContext();
let mergedProps = $derived(mergeProps(tooltip().getTriggerProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<button type="button" bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
