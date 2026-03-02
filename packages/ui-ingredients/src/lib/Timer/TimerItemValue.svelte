<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTimerContext,
	getTimerItemPropsContext,
} from './TimerContext.svelte.js';

export interface TimerItemValueProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TimerItemValueProps = $props();

let timer = getTimerContext();
let itemProps = getTimerItemPropsContext();
let mergedProps = $derived(
	mergeProps(timer().getItemValueProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>
		{#if children}
			{@render children?.()}
		{:else}
			{timer().formattedTime[itemProps().type]}
		{/if}
	</div>
{/if}
