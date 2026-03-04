<script lang="ts" module>
import type {HtmlIngredientProps} from '$lib/types.js';
import {mergeProps} from '@zag-js/svelte';
import {getScrollAreaContext} from './ScrollAreaContext.svelte.js';

export interface ScrollAreaCornerProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: ScrollAreaCornerProps = $props();

let scrollArea = getScrollAreaContext();
let mergedProps = $derived(mergeProps(scrollArea().getCornerProps(), props));
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
