<script lang="ts" module>
import {mergeProps} from '@zag-js/svelte';
import type {HtmlIngredientProps} from '../types.js';
import {getProgressContext} from './ProgressContext.svelte.js';

export interface ProgressCircleProps
	extends HtmlIngredientProps<'svg', SVGSVGElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	asChild,
	children,
	...props
}: ProgressCircleProps = $props();

let progress = getProgressContext();
let mergedProps = $derived(mergeProps(progress().getCircleProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<svg bind:this={ref} {...mergedProps}>{@render children?.()}</svg>
{/if}
