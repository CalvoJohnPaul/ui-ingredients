<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {
	getStepsContext,
	getStepsItemPropsContext,
} from './StepsContext.svelte.js';

export interface StepsIndicatorProps
	extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: StepsIndicatorProps = $props();

let steps = getStepsContext();
let itemProps = getStepsItemPropsContext();
let mergedProps = $derived(
	mergeProps(steps().getIndicatorProps(itemProps()), props),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<span bind:this={ref} {...mergedProps}> {@render children?.()} </span>
{/if}
