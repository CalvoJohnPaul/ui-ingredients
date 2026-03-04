<script lang="ts" module>
import {defineKeyset} from '$lib/defineKeySet.js';
import {splitProps} from '$lib/splitProps.js';
import type {HtmlIngredientProps} from '$lib/types.js';
import type {ScrollbarProps} from '@zag-js/scroll-area';
import {mergeProps} from '@zag-js/svelte';
import type {Merge} from 'type-fest';
import {
	getScrollAreaContext,
	setScrollBarPropsContext,
} from './ScrollAreaContext.svelte.js';

export interface ScrollAreaScrollbarProps
	extends Merge<HtmlIngredientProps<'div', HTMLDivElement>, ScrollbarProps> {}
</script>

<script lang="ts">
let {
	ref = $bindable(null),
	children,
	asChild,
	...props
}: ScrollAreaScrollbarProps = $props();

let scrollBarPropKeys = defineKeyset<ScrollbarProps>()(['orientation']);
let [scrollBarProps, localProps] = $derived(
	splitProps(props, scrollBarPropKeys),
);

let scrollArea = getScrollAreaContext();
let mergedProps = $derived(
	mergeProps(scrollArea().getScrollbarProps(scrollBarProps), localProps),
);

setScrollBarPropsContext(() => scrollBarProps);
</script>

{#if asChild}
	{@render asChild(() => mergedProps)}
{:else}
	<div bind:this={ref} {...mergedProps}>{@render children?.()}</div>
{/if}
