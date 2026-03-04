<script lang="ts" module>
import type {HtmlIngredientProps} from '$lib/types.js';
import {mergeProps} from '@zag-js/svelte';
import {
	getScrollAreaContext,
	getScrollBarPropsContext,
} from './ScrollAreaContext.svelte.js';

export interface ScrollAreaThumbProps
	extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: ScrollAreaThumbProps = $props();

let scrollArea = getScrollAreaContext();
let scrollBarProps = getScrollBarPropsContext();
let mergedProps = $derived(
	mergeProps(
		scrollArea().getThumbProps({orientation: scrollBarProps().orientation}),
		props,
	),
);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
