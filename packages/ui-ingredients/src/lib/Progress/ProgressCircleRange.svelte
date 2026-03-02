<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getProgressContext} from './ProgressContext.svelte.js';

export interface ProgressCircleRangeProps
	extends HtmlIngredientProps<'circle', SVGCircleElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ProgressCircleRangeProps = $props();

let progress = getProgressContext();
let mergedProps = $derived(mergeProps(progress().getCircleRangeProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<circle bind:this={ref} {...mergedProps}>{@render children?.()}</circle>
{/if}
