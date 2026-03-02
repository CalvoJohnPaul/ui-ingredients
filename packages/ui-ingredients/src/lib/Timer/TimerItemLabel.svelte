<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getTimerContext,
	getTimerItemPropsContext,
} from './TimerContext.svelte.js';

export interface TimerItemLabelProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: TimerItemLabelProps = $props();

let timer = getTimerContext();
let itemProps = getTimerItemPropsContext();
let mergedProps = $derived(
	mergeProps(timer().getItemLabelProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
